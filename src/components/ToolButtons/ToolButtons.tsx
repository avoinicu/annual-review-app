import { Heart } from 'lucide-react';

import { About, ThemeSwitch } from '~/components';
import { buttonVariants } from '~/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { cn } from '~/lib/utils';

const ToolButtons = () => {
  return (
    <div
      className="flex gap-4 ml-auto"
      tabIndex={-1}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
            href="https://avoinicu.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Heart className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </TooltipTrigger>
        <TooltipContent>Made with passion by...</TooltipContent>
      </Tooltip>

      <About />

      <ThemeSwitch />
    </div>
  );
};

ToolButtons.displayName = 'ToolButtons';
export { ToolButtons };
