import React from 'react';
import type { SwitchProps } from './types';
import { FiSun, FiMoon } from 'react-icons/fi';
import * as S from './styles';

export const Switch = ({
  isDark,
  onClick,
  isFull,
}: SwitchProps): JSX.Element => {
  return (
    <S.Container>
      <S.ContainerSwitchIcon isFull={isFull}>
        {isDark ? <FiMoon /> : <FiSun />}
      </S.ContainerSwitchIcon>
      <S.Text isFull={isFull}>Dark Mode</S.Text>
      <S.ContainerSwitch>
        <S.Switch onClick={onClick} />
      </S.ContainerSwitch>
    </S.Container>
  );
};
