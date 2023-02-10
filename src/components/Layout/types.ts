import type React from 'react';

export interface LayoutProps {
  isDark: boolean;
  toggleTheme: () => void;
  children: React.ReactNode;
}
