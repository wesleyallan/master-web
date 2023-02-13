import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.foreground};
  overflow: hidden;
`;
