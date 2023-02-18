import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usePersistent } from '../../hooks/usePersistent';
import { Sidebar } from '../Sidebar';
import type { LayoutProps } from './types';
import * as S from './styles';

export const Layout = ({ toggleTheme, isDark }: LayoutProps): JSX.Element => {
  const { value: isFull, setValue: setIsFull } = usePersistent('SIDEBAR_FULL');
  const toggleSidebar = (): void => {
    setIsFull(!isFull);
  };
  return (
    <S.Container isFull={isFull}>
      <Sidebar
        isFull={isFull}
        isDark={isDark}
        toggleTheme={toggleTheme}
        toggleFull={toggleSidebar}
      />
      <S.Content></S.Content>
    </S.Container>
  );
};
