import { About, ThemeSwitch } from '~/components';

const ToolButtons = () => {
  return (
    <div className="flex gap-4" tabIndex={-1}>
      <About />
      <ThemeSwitch />
    </div>
  );
};

ToolButtons.displayName = 'ToolButtons';
export { ToolButtons };
