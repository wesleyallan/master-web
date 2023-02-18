import React from 'react';
import type { LayoutProps } from './types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usePersistent } from '../../hooks/usePersistent';
import { Sidebar } from '../Sidebar';
import { MenuItem } from '../MenuItem';
import {
  AiOutlineHome,
  AiOutlineDollarCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import * as S from './styles';

export const Layout = ({
  toggleTheme,
  isDark,
  children,
}: LayoutProps): JSX.Element => {
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
      >
        <MenuItem isFull={isFull} icon={<AiOutlineHome />}>
          Dashboard
        </MenuItem>
        <MenuItem isFull={isFull} icon={<AiOutlineDollarCircle />}>
          Financeiro
        </MenuItem>
        <MenuItem isFull={isFull} icon={<AiOutlineUser />}>
          Clientes
        </MenuItem>
      </Sidebar>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
