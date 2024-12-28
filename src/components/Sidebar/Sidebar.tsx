const Sidebar = ({ children }: { children?: React.ReactNode }) => {
  return <div tabIndex={-1} className="relative w-10 h-full min-h-full">{children}</div>;
};

Sidebar.displayName = 'Sidebar';
export { Sidebar };