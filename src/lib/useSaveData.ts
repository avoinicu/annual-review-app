import { useAtomValue } from 'jotai';
import pako from 'pako';

import { answersAtom } from '~/atoms/answers.atom';

export const useSaveData = () => {
  const answers = useAtomValue(answersAtom);

  const saveData = () => {
    const data = JSON.stringify(answers);
    const compressedData = pako.deflate(data);
    const base64Data = btoa(String.fromCharCode(...compressedData));

    const url = new URLSearchParams();
    url.set('data', base64Data);
    window.history.pushState({}, '', `${window.location.pathname}?${url.toString()}`);

    return base64Data;
  };

  return saveData;
};
