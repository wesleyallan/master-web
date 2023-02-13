import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'filters'
    'cards';
`;

export const FilterContainer = styled.div`
  grid-area: filters;
  margin-bottom: 5px;
`;

export const CardsContainer = styled.div`
  grid-area: cards;
`;
