import React from 'react';
import {
  AiOutlineHome,
  AiOutlineDollarCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import Logo from '../../assets/logo64.ico';
import * as S from './styles';
import type { SidebarProps } from './types';

export const Sidebar = ({
  isDark,
  isFull,
  toggleSidebar,
  toggleTheme,
}: SidebarProps) => {
  return (
    <S.Sidebar>
      <S.Header>
        <S.ImageText>
          <S.Image>
            <img
              src={Logo}
              alt="Logo da empresa Master Soluções de Osvaldo Cruz"
            />
          </S.Image>
          <S.HeaderText>
            <S.Name isFull={isFull}>Master Soluções</S.Name>
            <S.Description isFull={isFull}>Controle Online</S.Description>
          </S.HeaderText>
        </S.ImageText>
        {isFull && <S.ToggleLeft onClick={toggleSidebar} />}
        {!isFull && <S.ToggleRight onClick={toggleSidebar} />}
      </S.Header>
      <S.MenuBar>
        <S.Menu>
          <S.MenuLinks>
            <S.NavLink>
              <a href="#">
                <AiOutlineHome className="icon" />
                <S.NavText isFull={isFull}>Dashboard</S.NavText>
              </a>
            </S.NavLink>
            <S.NavLink>
              <a href="#">
                <AiOutlineDollarCircle className="icon" />
                <S.NavText isFull={isFull}>Financeiro</S.NavText>
              </a>
            </S.NavLink>
            <S.NavLink>
              <a href="#">
                <AiOutlineUser className="icon" />
                <S.NavText isFull={isFull}>Clientes</S.NavText>
              </a>
            </S.NavLink>
          </S.MenuLinks>
        </S.Menu>
        <S.BottomContent>
          <S.NavLink>
            <a href="#">
              <IoLogOutOutline className="icon" />
              <S.NavText isFull={isFull}>Logout</S.NavText>
            </a>
          </S.NavLink>
          <S.Mode>
            <S.DarkLight>
              {isDark && <S.IconSun isFull={isFull} className="icon" />}
              {!isDark && <S.IconMoon isFull={isFull} className="icon" />}
            </S.DarkLight>
            <S.ModeText isFull={isFull}>Dark Mode</S.ModeText>
            <S.ToggleSwitch onClick={toggleTheme}>
              <S.Switch />
            </S.ToggleSwitch>
          </S.Mode>
        </S.BottomContent>
      </S.MenuBar>
    </S.Sidebar>
  );
};
