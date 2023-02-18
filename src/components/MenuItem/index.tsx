import React from 'react';
import type { MenuItemProps } from './types';
import * as S from './styles';

export const MenuItem = ({
  icon,
  children,
  isFooterItem = false,
  isFull,
}: MenuItemProps): JSX.Element => {
  return (
    <S.Container as={isFooterItem ? 'div' : 'li'}>
      <S.Icon>{icon}</S.Icon>
      <S.Title isFull={isFull}>{children}</S.Title>
    </S.Container>
  );
};
