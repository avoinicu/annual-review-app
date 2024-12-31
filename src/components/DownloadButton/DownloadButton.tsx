import { usePDF } from '@react-pdf/renderer';
import { useAtomValue } from 'jotai';
import { Download, Loader } from 'lucide-react';

import { reviewYearAtom } from '~/atoms/reviewYear.atom';
import { PdfDocument } from '~/components';
import { buttonVariants } from '~/components/ui/button';
import { useHasAnswers } from '~/lib/useHasAnswers';
import { cn } from '~/lib/utils';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const DownloadButton = () => {
  const [instance] = usePDF({ document: <PdfDocument /> });
  const year = useAtomValue(reviewYearAtom);
  const hasAnswers = useHasAnswers();

  if (!hasAnswers) {
    return null;
  }

  if (instance.loading) {
    return (
      <div className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}>
        <Loader className="h-[1.2rem] w-[1.2rem] animate-spin" />
      </div>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={instance.url ?? undefined}
          download={`annual-review-${year}.pdf`}
          className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
        >
          <Download className="h-[1.2rem] w-[1.2rem]" />
        </a>
      </TooltipTrigger>
      <TooltipContent>Download PDF</TooltipContent>
    </Tooltip>
  );
};

DownloadButton.displayName = 'Download';
export { DownloadButton };
