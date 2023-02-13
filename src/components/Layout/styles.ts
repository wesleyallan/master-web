import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar content';
  background-color: ${(props) => props.theme.colors.background};
  transition: ${(props) => props.theme.transition.tran05};
  color: ${(props) => props.theme.colors.textColor};
  ${({ isFull }) =>
    !isFull &&
    css`
      grid-template-columns: 90px 1fr;
    `}
  @media (max-width: 470px) {
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      'sidebar'
      'content';
  }
`;

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: ${(props) => props.theme.colors.foreground};
`;

export const Content = styled.main`
  grid-area: content;
  margin-left: 5px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  @media (max-width: 470px) {
    margin-left: 0;
    margin-top: 5px;
  }
`;
