import pako from 'pako';

export const packData = (reviewYear: string, answers: string[]) => {
  const data = `${reviewYear}:${answers.join(':')}`;
  const compressedData = pako.deflate(data);
  const base64Data = btoa(String.fromCharCode(...compressedData));
  return base64Data;
};
