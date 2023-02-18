import styled from 'styled-components';
import type { StyledComponentsProps } from './types';

export const Container = styled.div<StyledComponentsProps>`
  height: 100vh;
  display: grid;
  transition: ${({ theme }) => theme.transition.tran05};
  grid-template-columns: ${({ isFull }) => (isFull ? '25rem 1fr' : '9rem 1fr')};
`;

export const Content = styled.main`
  transition: ${({ theme }) => theme.transition.tran03};
  background: ${({ theme }) => theme.colors.background};
`;
