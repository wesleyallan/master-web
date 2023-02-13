import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  ${(props) =>
    props.snAtivo === 'S'
      ? css`
          background-color: ${(props) => props.theme.colors.activeColor};
          &:hover {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
            cursor: pointer;
          }
        `
      : css`
          background-color: ${(props) => props.theme.colors.inactiveColor};
        `}
`;

export const ContainerId = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 50%;
`;

export const Id = styled.div`
  color: ${(props) => props.theme.colors.textColor};
`;

export const Name = styled.div`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.textColor};
`;
