import React from 'react';
import * as S from './styles';

export const Search = () => {
  return (
    <S.InputGroup>
      <S.Button>
        <svg
          fill="none"
          stroke="#ffffff"
          viewBox="0 0 24 24"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <circle r="7" cy="10" cx="10"></circle>
          <line y2="15" x2="15" y1="21" x1="21"></line>
        </svg>
      </S.Button>
      <S.Input name="search" type="text" />
    </S.InputGroup>
  );
};
