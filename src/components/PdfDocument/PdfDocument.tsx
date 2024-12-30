import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { useAtomValue } from 'jotai';
import React from 'react';

import { answersAtom } from '~/atoms/answers.atom';
import { reviewYearAtom } from '~/atoms/reviewYear.atom';
import { groups } from '~/data/questionGroups.json';
import OpenSansBold from '~/fonts/OpenSans-Bold.ttf';
import OpenSansRegular from '~/fonts/OpenSans-Regular.ttf';
import { getQuestionsMap } from '~/lib/getQuestionsMap';
import { useHasAnswers } from '~/lib/useHasAnswers';

Font.register({
  family: 'Open Sans',
  fonts: [
    { fontWeight: 400, src: OpenSansRegular },
    { fontWeight: 700, src: OpenSansBold },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Open Sans',
    padding: 20,
    fontSize: 12,
    lineHeight: 1.5,
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 700,
  },
  groupTitle: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10,
  },
  question: {
    fontFamily: 'Open Sans',
    fontWeight: 700,
  },
  answer: {
    fontFamily: 'Open Sans',
    marginBottom: 20,
  },
});

const PdfDocument = () => {
  const reviewYear = useAtomValue(reviewYearAtom);
  const answers = useAtomValue(answersAtom)[reviewYear];
  const hasAnswers = useHasAnswers();
  const questions = getQuestionsMap();

  if (!hasAnswers) {
    return null;
  }

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >
        <View>
          <Text style={styles.title}>Annual Review: {reviewYear}</Text>
          {groups
            .filter(({ questions }) => questions.filter((question) => answers[question]?.length).length)
            .map((group) => (
              <React.Fragment key={group.name}>
                <Text style={styles.groupTitle}>{group.name}</Text>
                {group.questions.map((questionId) => {
                  const question = questions.get(questionId);
                  const answer = answers[questionId-1];
                  if (answer?.length) {
                    return (
                      <React.Fragment key={questionId}>
                        <Text style={styles.question}>{question?.question}</Text>
                        <Text style={styles.answer}>{answer}</Text>
                      </React.Fragment>
                    );
                  }
                })}
              </React.Fragment>
            ))}
        </View>
      </Page>
    </Document>
  );
};

PdfDocument.displayName = 'PdfDocument';
export { PdfDocument };
