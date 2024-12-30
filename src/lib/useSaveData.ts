import { useAtomValue } from 'jotai';
import pako from 'pako';

import { answersAtom } from '~/atoms/answers.atom';
import { reviewYearAtom } from '~/atoms/reviewYear.atom';

export const useSaveData = () => {
  const answers = useAtomValue(answersAtom);
  const reviewYear = useAtomValue(reviewYearAtom);

  const saveData = () => {
    const data = `${reviewYear}:${answers[reviewYear].join(':')}`;
    const compressedData = pako.deflate(data);
    const base64Data = btoa(String.fromCharCode(...compressedData));

    const url = new URLSearchParams();
    url.set('data', base64Data);
    window.history.pushState({}, '', `${window.location.pathname}?${url.toString()}`);

    return base64Data;
  };

  return saveData;
};
