import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-right: 7px;
  background-color: ${(props) => props.theme.foreground};
`;
