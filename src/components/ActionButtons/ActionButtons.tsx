import { useAtom } from 'jotai';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { currentQuestionAtom } from '~/atoms/currentQuestion.atom';
import { AddToCalendar } from '~/components';
import { Button } from '~/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { getQuestionsMap } from '~/lib/getQuestionsMap';

const ActionButtons = () => {
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionAtom);
  const questions = getQuestionsMap();

  const shouldShowButton = (direction: 'prev' | 'next') => {
    return questions.has(currentQuestion + (direction === 'prev' ? -1 : 1));
  };

  const handleButtonClick = (direction: 'prev' | 'next') => () => {
    setCurrentQuestion((prev) => {
      if (direction === 'prev') {
        return prev - 1;
      }
      return prev + 1;
    });
  };

  return (
    <div className="flex gap-4">
      {shouldShowButton('prev') && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              tabIndex={1}
              type="button"
              onClick={handleButtonClick('prev')}
              variant="outline"
              size="icon"
            >
              <ArrowLeft className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Previous question</TooltipContent>
        </Tooltip>
      )}

      {shouldShowButton('next') && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              tabIndex={0}
              type="button"
              onClick={handleButtonClick('next')}
              variant="outline"
              size="icon"
            >
              <ArrowRight className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Next question</TooltipContent>
        </Tooltip>
      )}

      <AddToCalendar />
    </div>
  );
};

ActionButtons.displayName = 'ActionButtons';
export { ActionButtons };
