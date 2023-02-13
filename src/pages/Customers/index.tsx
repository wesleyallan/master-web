import React from 'react';
import { CardsContainer } from '../../components/CardsContainer';
import { Filter } from '../../components/Filter';
import * as S from './styles';

export const Customers = () => {
  return (
    <S.Container>
      <S.FilterContainer>
        <Filter />
      </S.FilterContainer>
      <S.CardsContainer>
        <CardsContainer />
      </S.CardsContainer>
    </S.Container>
  );
};
