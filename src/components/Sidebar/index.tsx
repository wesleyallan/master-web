import React, { Children } from 'react';
import Logo from '../../assets/favicon.ico';
import { MenuItem } from '../MenuItem';
import { Switch } from '../Switch';
import { IoLogOutOutline } from 'react-icons/io5';
import * as S from './styles';
import type { SidebarProps } from './types';

export const Sidebar = ({
  children,
  isDark,
  isFull,
  toggleTheme,
  toggleFull,
}: SidebarProps): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src={Logo} alt="Logo da empresa" />
        <S.ContainerAbout isFull={isFull}>
          <S.Name>Master Soluções</S.Name>
          <S.Description>Controle Online</S.Description>
        </S.ContainerAbout>
        {!isFull && <S.ToggleRight onClick={toggleFull} />}
        {isFull && <S.ToggleLeft onClick={toggleFull} />}
      </S.Header>
      <S.Menu>{children}</S.Menu>
      <S.Footer>
        <MenuItem
          isFull={isFull}
          isFooterItem={true}
          icon={<IoLogOutOutline />}
        >
          Logout
        </MenuItem>
        <Switch isFull={isFull} isDark={isDark} onClick={toggleTheme} />
      </S.Footer>
    </S.Container>
  );
};
