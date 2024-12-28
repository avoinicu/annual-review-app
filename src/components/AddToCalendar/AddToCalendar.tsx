import { google, ics, office365, outlook } from 'calendar-link';
import { BellPlus } from 'lucide-react';

import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

const EVENT = {
  title: 'Annual Review',
  description: `Use last year as inspiration: \n ${window.location.href}`,
  start: new Date(new Date().getFullYear() + 1, 0, 1, 9, 0),
  end: new Date(new Date().getFullYear() + 1, 0, 1, 10, 0),
};

const AddToCalendar = () => {
  const links = {
    google: {
      name: 'Google Calendar',
      url: google(EVENT),
    },
    outlook: {
      name: 'Outlook',
      url: outlook(EVENT),
    },
    office: {
      name: 'Office 365',
      url: office365(EVENT),
    },
    apple: {
      name: 'Apple Calendar (ics)',
      url: ics(EVENT),
    },
  };

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
            >
              <BellPlus className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Add to calendar</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>Set a reminder for next year with the link to this page.</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        {Object.entries(links).map(([key, { name, url }]) => (
          <DropdownMenuItem
            key={key}
            asChild
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 text-sm"
            >
              {name}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

AddToCalendar.displayName = 'AddToCalendar';
export { AddToCalendar };
