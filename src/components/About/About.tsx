import { useAtom } from 'jotai';
import { BadgeInfo } from 'lucide-react';

import { showAboutAtom } from '~/atoms/showAbout.atom';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

const About = () => {
  const [showAbout, setShowAbout] = useAtom(showAboutAtom);

  return (
    <Dialog
      open={showAbout}
      onOpenChange={(open) => {
        setShowAbout(open);
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              onClick={() => setShowAbout(true)}
              variant="outline"
              size="icon"
            >
              <BadgeInfo className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>About this app</TooltipContent>
      </Tooltip>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>What's this about?</DialogTitle>
          <div id="about-content">
            <p className="mt-4 mb-2 dark:text-slate-400 text-slate-600">
              I'm <strong className="dark:text-slate-200 text-slate-800">not storing any data</strong> outside of your
              browser. Please don't take it personally, but I'm not that curious about your life. Not unless we become
              friends, then I'll be all ears.
            </p>
            <p className="mt-4 mb-2 dark:text-slate-400 text-slate-600">
              Once you finish your review, you can{' '}
              <strong className="dark:text-slate-200 text-slate-800">download it as a PDF file</strong> or{' '}
              <strong className="dark:text-slate-200 text-slate-800">add a calendar event</strong> for next year with a
              link this year's review.
            </p>
            <p className="mb-2 dark:text-slate-400 text-slate-600">
              I created this app because of boredom and existential dread during the holidays of 2024. I was listening
              to one of Chris Williamson's podcasts and he mentioned his{' '}
              <a
                className="underline dark:text-slate-200 text-slate-800"
                href="https://chriswillx.com/review/"
                target="_blank"
                rel="noreferrer noopener"
              >
                annual review template
              </a>
              .
            </p>
            <p className="mb-2 dark:text-slate-400 text-slate-600">
              I downloaded it and I thought it would be fun to create a web app for it.
            </p>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

About.displayName = 'About';
export { About };
