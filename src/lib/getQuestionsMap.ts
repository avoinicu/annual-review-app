import { questions } from '~/data/questions.json';
import type { TQuestion } from '~/types';

export const getQuestionsMap = () => {
  const questionsMap = new Map<TQuestion['id'], TQuestion>();
  questions.forEach((question: TQuestion) => {
    questionsMap.set(question.id, question);
  });
  return questionsMap;
};
