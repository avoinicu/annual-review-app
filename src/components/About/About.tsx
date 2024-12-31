import { useAtom } from 'jotai';
import { BadgeInfo } from 'lucide-react';

import { showAboutAtom } from '~/atoms/showAbout.atom';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';

const About = () => {
  const [showAbout, setShowAbout] = useAtom(showAboutAtom);

  return (
    <Drawer>
      <DrawerTrigger asChild>
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
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-md mx-auto">
          <DrawerHeader>
            <DrawerTitle>What's this about?</DrawerTitle>
            <DrawerDescription className="italic">
              A simple web app to help you reflect on the past year and plan for the next.
            </DrawerDescription>
          </DrawerHeader>
          <div className="text-sm dark:text-slate-400 text-slate-600">
            <p className="mx-4 mb-2">
              I created this app out of boredom and existential dread during the 2024 holiday season. While listening to
              one of Chris Williamson's podcasts, I heard him mention his{' '}
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
            <p className="mx-4 mb-2">
              Curious, I downloaded the template and thought it would be fun to turn it into a web app.
            </p>
            <p className="mx-4 mb-2">
              Rest assured,{' '}
              <strong className="dark:text-slate-200 text-slate-800">I’m not storing any of your data</strong> beyond
              your browser. It’s nothing personal—I’m just not that curious about your life. Unless, of course, we
              become friends; then I’ll be all ears!
            </p>
            <p className="mx-4 mb-2">
              Your current progress is saved in the URL so you can copy it and move to another device or browser.
            </p>
            <p className="mx-4 mb-2">
              Once you finish your review, you can{' '}
              <strong className="dark:text-slate-200 text-slate-800">download it as a PDF</strong> or{' '}
              <strong className="dark:text-slate-200 text-slate-800">create a calendar event</strong> for next year with
              a link to this year's review.
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );

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
            <p className="mb-2 dark:text-slate-400 text-slate-600">
              I created this app out of boredom and existential dread during the 2024 holiday season. While listening to
              one of Chris Williamson's podcasts, I heard him mention his{' '}
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
              Curious, I downloaded the template and thought it would be fun to turn it into a web app.
            </p>
          </div>
          <p className="mt-4 mb-2 dark:text-slate-400 text-slate-600">
            Rest assured,{' '}
            <strong className="dark:text-slate-200 text-slate-800">I’m not storing any of your data</strong> beyond your
            browser. It’s nothing personal—I’m just not that curious about your life. Unless, of course, we become
            friends; then I’ll be all ears!
          </p>
          <p className="mt-4 mb-2 dark:text-slate-400 text-slate-600">
            Once you finish your review, you can{' '}
            <strong className="dark:text-slate-200 text-slate-800">download it as a PDF</strong> or{' '}
            <strong className="dark:text-slate-200 text-slate-800">create a calendar event</strong> for next year with a
            link to this year's review.
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

About.displayName = 'About';
export { About };
