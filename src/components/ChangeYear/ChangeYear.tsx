import { useAtom, useSetAtom } from 'jotai';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { reviewYearAtom } from '~/atoms/reviewYear.atom';
import { getCurrentYear } from '~/lib/getCurrentYear';

import { Button } from '../ui/button';
import { currentQuestionAtom } from "~/atoms/currentQuestion.atom";

const ChangeYear = () => {
  const [reviewYear, setReviewYear] = useAtom(reviewYearAtom);
  const setCurrentQuestion = useSetAtom(currentQuestionAtom);

  const handleChangeYear = (direction: 'next' | 'prev') => {
    if (direction === 'prev') {
      setReviewYear((parseInt(reviewYear) - 1).toString());
      setCurrentQuestion(1);
      return;
    }
    if (parseInt(reviewYear) < parseInt(getCurrentYear())) {
      setReviewYear((parseInt(reviewYear) + 1).toString());
      setCurrentQuestion(1);
      return;
    }
  };

  return (
    <div className="flex items-center justify-start gap-2">
      <Button
        size="sm"
        variant="ghost"
        className="p-0"
        onClick={() => handleChangeYear('prev')}
      >
        <ChevronLeft
          strokeDasharray={2}
          className="h-[1.2rem] w-[1.2rem]"
        />
      </Button>
      <div className="text-4xl">{reviewYear}</div>
      <Button
        size="sm"
        variant="ghost"
        className="p-0"
        onClick={() => handleChangeYear('next')}
      >
        <ChevronRight
          strokeDasharray={2}
          className="h-[1.2rem] w-[1.2rem]"
        />
      </Button>
    </div>
  );
};

ChangeYear.displayName = 'ChangeYear';
export { ChangeYear };
