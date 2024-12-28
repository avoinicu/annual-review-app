import { useAtom } from 'jotai';

import { answersAtom } from '~/atoms/answers.atom';
import { unpackedAtom } from '~/atoms/unpacked.atom';
import { STATUS_CODES } from '~/lib/constants';

import { unpackData } from './unpackData';
import { useHasAnswers } from './useHasAnswers';

export const useReadUrl = () => {
  const [answers, setAnswers] = useAtom(answersAtom);
  const [unpacked, setUnpacked] = useAtom(unpackedAtom);
  const hasAnswers = useHasAnswers();
  const url = new URLSearchParams(window.location.search);
  const dataParam = url.get('data');

  if (unpacked) {
    return STATUS_CODES.OK;
  }

  if (!dataParam) {
    return STATUS_CODES.NO_CONTENT;
  }

  const unpackedData = unpackData(dataParam);
  setUnpacked(true);

  if (!hasAnswers) {
    setAnswers(unpackedData);
    return STATUS_CODES.OK;
  }

  if (answers === unpackedData) {
    return STATUS_CODES.OK;
  }

  if (answers !== unpackedData) {
    return STATUS_CODES.BAD_REQUEST;
  }
};
