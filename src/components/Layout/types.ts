export interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export interface StyledComponentsProps {
  isFull: boolean;
}
