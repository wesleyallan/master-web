import styled from 'styled-components';

export const Container = styled.div`
  height: 120px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  background-color: ${(props) => props.theme.foreground};
  border-radius: 5px;
  margin: 0 7px 7px 0;
`;
