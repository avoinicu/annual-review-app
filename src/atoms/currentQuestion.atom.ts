import { atomWithStorage } from 'jotai/utils';

export const currentQuestionAtom = atomWithStorage('currentQuestion', 1);
