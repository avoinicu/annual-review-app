import { atom } from 'jotai';

import { answersAtom } from './answers.atom';

export const reviewYearAtom = atom((get) => {
  return Object.keys(get(answersAtom))[0];
});
