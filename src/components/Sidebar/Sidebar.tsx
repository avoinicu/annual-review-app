const Sidebar = ({ children }: { children?: React.ReactNode }) => {
  return <div className="relative flex-grow-0 flex-shrink-0 w-10 h-full overflow-hidden min-h-ful">{children}</div>;
};

Sidebar.displayName = 'Sidebar';
export { Sidebar };