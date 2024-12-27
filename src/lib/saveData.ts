import { useAtomValue } from 'jotai';
import pako from 'pako';

import { answersAtom } from '~/atoms/answers.atom';

export const unpackData = (data: string) => {
  const compressedData = atob(data)
    .split('')
    .map((c) => c.charCodeAt(0));
  const decompressedData = pako.inflate(new Uint8Array(compressedData));
  const decoder = new TextDecoder();
  const decompressedString = decoder.decode(decompressedData);
  return JSON.parse(decompressedString);
};

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
