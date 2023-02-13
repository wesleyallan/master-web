import styled, { css } from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

export const Sidebar = styled.nav`
  height: 100%;
  padding: 10px 14px;
  background-color: ${(props) => props.theme.colors.foreground};
  @media (max-width: 470px) {
    display: flex;
  }
`;

export const Header = styled.header`
  position: relative;
`;

export const ImageText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  & img {
    width: 40px;
    border-radius: 6px;
  }
`;

export const Image = styled.span`
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  transition: ${(props) => props.theme.transition.tran03};
`;

export const Name = styled.span`
  font-weight: 600;
  transition: none;
  transition: ${(props) => props.theme.transition.tran04};
  white-space: nowrap;
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
  @media (max-width: 470px) {
    display: none;
  }
`;

export const Description = styled.span`
  margin-top: -2px;
  transition: none;
  transition: ${(props) => props.theme.transition.tran04};
  white-space: nowrap;
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
  @media (max-width: 470px) {
    display: none;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textColor};
`;

export const ToggleLeft = styled(FaAngleLeft)`
  position: absolute;
  top: 50%;
  right: -25px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.toggleColor};
  font-size: 22px;
  @media (max-width: 470px) {
    display: none;
  }
`;

export const ToggleRight = styled(FaAngleRight)`
  position: absolute;
  top: 50%;
  right: -25px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.toggleColor};
  font-size: 22px;
  @media (max-width: 470px) {
    display: none;
  }
`;

export const MenuBar = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 470px) {
    flex-direction: row;
  }
`;

export const Menu = styled.div`
  @media (max-width: 470px) {
    flex-direction: row;
  }
`;

export const MenuLinks = styled.ul`
  @media (max-width: 470px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavText = styled.span`
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.textColor};
  transition: ${(props) => props.theme.transition.tran02};
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
  @media (max-width: 470px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  height: 50px;
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  & a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 6px;
    transition: ${(props) => props.theme.transition.tran04};
  }
  & a:hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
    & .icon,
    & ${NavText} {
      color: ${(props) => props.theme.colors.primaryColorLight};
    }
  }
  & .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.textColor};
    transition: ${(props) => props.theme.transition.tran02};
  }
  @media (max-width: 470px) {
    margin-top: 0;
  }
`;

export const Mode = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  background: ${(props) => props.theme.colors.foreground};
  @media (max-width: 470px) {
    right: calc(334px - 100vw);
    top: -50px;
  }
`;

export const DarkLight = styled.div`
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
`;

export const ModeText = styled.span`
  font-size: 16px;
  font-weight: 500;
  transition: ${(props) => props.theme.transition.tran02};
  white-space: nowrap;
  color: ${(props) => props.theme.colors.textColor};
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
  @media (max-width: 470px) {
    display: none;
  }
`;

export const ToggleSwitch = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 60px;
  cursor: pointer;
`;

export const Switch = styled.span`
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.toggleColor};
  &:before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: ${(props) => props.theme.transition.togglePosition};
    transform: translateY(-50%);
    background: ${(props) => props.theme.colors.foreground};
  }
`;

export const IconSun = styled(FiSun)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.textColor};
  transition: ${(props) => props.theme.transition.tran02};
  position: absolute;
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
  @media (max-width: 470px) {
    display: none;
  }
`;

export const IconMoon = styled(FiMoon)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.textColor};
  transition: ${(props) => props.theme.transition.tran02};
  position: absolute;
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
  @media (max-width: 470px) {
    display: none;
  }
`;
