import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100%;
  text-align: center;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 5px;
`;
