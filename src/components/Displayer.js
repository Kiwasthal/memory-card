import styled from 'styled-components';
import { useEffect } from 'react';
import Card from './Card';

const StyledDisplayer = styled.div`
  background-color: #ffc74d;
  display: grid;
  grid-auto-columns: 15%;
  max-width: 80%;
  justify-content: center;
`;

const Displayer = ({ pokemons, status }) => {
  let content = <div>loading</div>;

  let mons;
  if (!pokemons) mons = [];

  if (!status) {
    content = (
      <StyledDisplayer>
        <Card item={mons} />
      </StyledDisplayer>
    );
  }

  return content;
};

export default Displayer;
