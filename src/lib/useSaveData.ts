import { useAtomValue } from 'jotai';

import { answersAtom } from '~/atoms/answers.atom';
import { reviewYearAtom } from '~/atoms/reviewYear.atom';

import { packData } from './packData';
import { updateUrl } from './updateURL';

export const useSaveData = () => {
  const answers = useAtomValue(answersAtom);
  const reviewYear = useAtomValue(reviewYearAtom);

  const saveData = () => {
    const packedData = packData(reviewYear, answers[reviewYear] || []);

    updateUrl(packedData);

    return packedData;
  };

  return saveData;
};
