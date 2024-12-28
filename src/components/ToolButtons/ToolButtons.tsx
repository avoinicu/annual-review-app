import { Heart } from 'lucide-react';

import { About, ThemeSwitch } from '~/components';
import { cn } from '~/lib/utils';

import { buttonVariants } from '../ui/button';

const ToolButtons = () => {
  return (
    <div
      className="flex gap-4 ml-auto"
      tabIndex={-1}
    >
      <a
        className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
        href="https://avoinicu.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Heart className="h-[1.2rem] w-[1.2rem]" />
      </a>
      <About />
      <ThemeSwitch />
    </div>
  );
};

ToolButtons.displayName = 'ToolButtons';
export { ToolButtons };
