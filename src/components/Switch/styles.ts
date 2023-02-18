import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ContainerSwitchIcon = styled.div`
  display: flex;
  align-items: center;
  & svg {
    min-width: 6rem;
    font-size: 2rem;
    transition: ${({ theme }) => theme.transition.tran04};
    ${({ isFull }) =>
      !isFull &&
      css`
        opacity: 0;
      `};
  }
`;

export const Text = styled.span`
  transition: ${({ theme }) => theme.transition.tran04};
  white-space: nowrap;
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `};
`;

export const ContainerSwitch = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 6rem;
  cursor: pointer;
`;

export const Switch = styled.span`
  position: relative;
  height: 2.2rem;
  width: 4.4rem;
  border-radius: 2.5rem;
  background: ${(props) => props.theme.colors.toggleColor};
  &:before {
    content: '';
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    top: 50%;
    left: ${(props) => props.theme.transition.togglePosition};
    transform: translateY(-50%);
    background: ${(props) => props.theme.colors.foreground};
    transition: ${(props) => props.theme.transition.tran03};
  }
`;
