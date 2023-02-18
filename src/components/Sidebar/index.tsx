import React from 'react';
import Logo from '../../assets/favicon.ico';
import { MenuItem } from '../MenuItem';
import { Switch } from '../Switch';
import {
  AiOutlineHome,
  AiOutlineDollarCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import * as S from './styles';
import type { SidebarProps } from './types';

export const Sidebar = ({
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
      <S.Menu>
        <MenuItem isFull={isFull} icon={<AiOutlineHome />}>
          Dashboard
        </MenuItem>
        <MenuItem isFull={isFull} icon={<AiOutlineDollarCircle />}>
          Financeiro
        </MenuItem>
        <MenuItem isFull={isFull} icon={<AiOutlineUser />}>
          Clientes
        </MenuItem>
      </S.Menu>
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
