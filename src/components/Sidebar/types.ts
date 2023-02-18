export interface SidebarProps {
  children: React.ReactNode;
  isDark: boolean;
  isFull: boolean;
  toggleTheme: () => void;
  toggleFull: () => void;
}
