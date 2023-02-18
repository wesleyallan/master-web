import styled, { css } from 'styled-components';

export const Container = styled.li`
  height: 5rem;
  display: flex;
  border-radius: 0.6rem;
  list-style: none;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  transition: ${(props) => props.theme.transition.tran02};
  & svg {
    min-width: 6rem;
    font-size: 20px;
  }
  ${Container}:hover & {
    color: ${(props) => props.theme.colors.primaryColorLight};
  }
`;

export const Title = styled.p`
  display: inline;
  color: ${({ theme }) => theme.colors.textColor};
  transition: ${(props) => props.theme.transition.tran02};
  ${Container}:hover & {
    color: ${(props) => props.theme.colors.primaryColorLight};
  }
  ${({ isFull }) =>
    !isFull &&
    css`
      opacity: 0;
    `}
`;
