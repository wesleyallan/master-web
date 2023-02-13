import React from 'react';
import type { CardsCustomerProps } from './types';
import * as S from './styles';

export const CardsCustomer = ({ id, name, snAtivo }: CardsCustomerProps) => {
  return (
    <S.Container snAtivo={snAtivo}>
      <S.ContainerId>
        <S.Id>{id}</S.Id>
      </S.ContainerId>
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};
