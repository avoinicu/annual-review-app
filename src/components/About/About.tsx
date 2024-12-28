import { BadgeInfo } from 'lucide-react';
import { useState } from 'react';

import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog';

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        tabIndex={-1}
        onClick={() => setOpen(true)}
        variant="outline"
        size="icon"
      >
        <BadgeInfo className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle>What's this about?</DialogTitle>
            <div id="about-content">
              <p className="mt-4 mb-2 dark:text-slate-400 text-slate-600">
                I'm <strong className="dark:text-slate-200 text-slate-800">not storing any data</strong> outside of your
                browser. Please don't take it personally, but I'm not that curious about your life. Not unless we become
                friends, then I'll be all ears.
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
    </>
  );
};

About.displayName = 'About';
export { About };
