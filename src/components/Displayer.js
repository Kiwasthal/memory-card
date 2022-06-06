import styled from 'styled-components';
import { useEffect } from 'react';
import Card from './Card';

const StyledDisplayer = styled.div`
  background-color: #ffc74d;

  grid-auto-columns: 15%;
  max-width: 80%;
  justify-content: center;
`;

const Displayer = ({ pokemons, status }) => {
  let content = <div>loading</div>;

  const loadedPokemons = pokemons
    ? pokemons.map(pokemon => ({
        name: pokemon.name,
        url: pokemon.sprites.front_default,
      }))
    : [];

  if (!status && loadedPokemons && loadedPokemons.length > 0) {
    content = (
      <StyledDisplayer>
        {loadedPokemons.map(pokemon => (
          <Card name={pokemon.name} url={pokemon.url} />
        ))}
      </StyledDisplayer>
    );
  }

  return content;
};

export default Displayer;
