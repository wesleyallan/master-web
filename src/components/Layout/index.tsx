import React, { useState } from 'react';
import { Sidebar } from '../Sidebar';
import type { LayoutProps } from './types';
import * as S from './styles';

export const Layout = ({ children, isDark, toggleTheme }: LayoutProps) => {
  const [isFull, setIsFull] = useState<boolean>(true);
  const toggleSidebar = (): void => {
    setIsFull(!isFull);
  };
  return (
    <S.Container isFull={isFull}>
      <S.SidebarContainer>
        <Sidebar
          isDark={isDark}
          isFull={isFull}
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme}
        />
      </S.SidebarContainer>
      {/* <S.Content>{children}</S.Content> */}
    </S.Container>
  );
};
