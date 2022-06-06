import styled from 'styled-components';
import { useEffect } from 'react';
import Card from './Card';

const StyledDisplayer = styled.div`
  background-color: #ffc74d;
  display: grid;
  grid-auto-columns: 10%;
  max-width: 80%;
`;

const Displayer = ({ items }) => {
  const displayMons = items.map(item => <Card item={item} />);
  return <StyledDisplayer>{displayMons}</StyledDisplayer>;
};

export default Displayer;
