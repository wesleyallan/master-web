import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { getCustomers } from './services';
import type { Customer } from './types';
import { CardsCustomer } from '../CardsCustomer';

export const CardsContainer = () => {
  const [customers, setCustomers] = useState<Customer[]>();

  async function loadCustomers() {
    try {
      const response = await getCustomers();
      setCustomers(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    void loadCustomers();
  }, []);

  return (
    <S.Container>
      {customers?.map(({ codPessoa, nome, snAtivo }) => (
        <CardsCustomer
          key={codPessoa}
          id={codPessoa}
          name={nome}
          snAtivo={snAtivo}
        />
      ))}
    </S.Container>
  );
};
