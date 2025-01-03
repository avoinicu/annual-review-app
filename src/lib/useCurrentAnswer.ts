import { useAtom, useAtomValue } from 'jotai';

import { answersAtom } from '~/atoms/answers.atom';
import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { reviewYearAtom } from '~/atoms/reviewYear.atom';

export const useCurrentAnswer = () => {
  const [answers, setAnswers] = useAtom(answersAtom);
  const reviewYear = useAtomValue(reviewYearAtom);
  const currentQuestion = useAtomValue(currentQuestionAtom) - 1;

  const updateAnswer = (update: string) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      if (!newAnswers[reviewYear]) {
        newAnswers[reviewYear] = [];
      }
      newAnswers[reviewYear][currentQuestion] = update;
      return newAnswers;
    });
  };

  return {
    answer: answers[reviewYear]?.[currentQuestion] ?? '',
    setAnswer: updateAnswer,
  };
};
