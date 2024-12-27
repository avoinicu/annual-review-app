import { atom } from 'jotai';

import { questions } from '~/data/questions.json';

import { answersAtom } from './answers.atom';

export const statusAtom = atom((get) => {
  const status =
    get(answersAtom)
      .split(':')
      .filter((answer) => !!answer).length - 1;
  const questionsCount = questions.length;
  return `You answered ${status} out of ${questionsCount} questions.`;
});
