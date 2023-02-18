import styled, { css } from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import type { StyledComponentsProps } from './types';

export const Container = styled.nav`
  position: relative;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transition.tran03};
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-inline: 1rem;
  width: 4rem;
`;

export const ContainerAbout = styled.div<StyledComponentsProps>`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textColor};
  transition: ${({ theme }) => theme.transition.tran03};
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
`;

export const Name = styled.div`
  font-weight: 600;
`;

export const Description = styled.div`
  line-height: 1.2;
`;

export const ToggleLeft = styled(FaAngleLeft)`
  position: absolute;
  top: 50%;
  right: -2.5rem;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: -0.1rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2),
    0 0.15rem 0.2rem rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.toggleColor};
  font-size: 2.2rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.85);
  }
`;

export const ToggleRight = styled(FaAngleRight)`
  position: absolute;
  top: 50%;
  right: -2.5rem;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: -0.1rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2),
    0 0.15rem 0.2rem rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.toggleColor};
  font-size: 2.2rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.85);
  }
`;

export const Menu = styled.ul`
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
`;

export const Footer = styled.footer`
  margin-bottom: 1rem;
  position: absolute;
  bottom: 0;
  display: grid;
  width: calc(100% - 3rem);
  gap: 1rem;
`;
