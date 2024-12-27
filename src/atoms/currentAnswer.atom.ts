import { atom } from 'jotai';

import { answersAtom } from './answers.atom';
import { currentQuestionAtom } from './currentQuestion.atom';

export const currentAnswerAtom = atom(
  (get) => {
    const questionId = get(currentQuestionAtom);
    const answers = get(answersAtom).split(':');

    return answers[questionId] ?? '';
  },
  (get, set, update: string) => {
    const answers = get(answersAtom).split(':');
    answers[get(currentQuestionAtom)] = update;
    set(answersAtom, answers.join(':'));
  }
);
