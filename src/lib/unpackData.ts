import pako from 'pako';

export const unpackData = (data: string) => {
  const compressedData = atob(data)
    .split('')
    .map((c) => c.charCodeAt(0));
  const decompressedData = pako.inflate(new Uint8Array(compressedData));
  const decoder = new TextDecoder();
  const decompressedString = decoder.decode(decompressedData);
  return JSON.parse(decompressedString);
};
