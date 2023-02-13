import React, { useState } from 'react';
import { Sidebar } from '../Sidebar';
import type { LayoutProps } from './types';
import * as S from './styles';
import { usePersistent } from '../../hooks/usePersistent';

export const Layout = ({ children, isDark, toggleTheme }: LayoutProps) => {
  const { value: isFull, setValue: setIsFull } = usePersistent('SIDEBAR_FULL');
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
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
