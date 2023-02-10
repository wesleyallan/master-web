import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 210px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9.3px 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  outline: none;
  background: #2020;
  border: none;
  background: rgb(68, 68, 68);
  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: rgb(100, 100, 100);
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: rgb(218, 218, 218);
  font-size: 1rem;
  border: none;
  font-weight: 500;
  background-color: #303030;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
`;
