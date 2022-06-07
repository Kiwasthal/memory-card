import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Card from './Card';

const StyledDisplayer = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-auto-columns: 250px;
  flex-wrap: nowrap;
`;

const Displayer = ({ pokemons, status, increment, reset, nextRound }) => {
  let content = <div>loading</div>;

  const [fetchedPokemons, setFetchedPokemons] = useState(pokemons);

  let checkClicked = name => {
    setFetchedPokemons(
      fetchedPokemons.map(pokemon => {
        if (pokemon.name === name) {
          return { ...pokemon, clicked: true };
        } else return pokemon;
      })
    );
  };

  let everythingIsClicked = fetchedPokemons =>
    fetchedPokemons.filter(pokemon => pokemon.clicked).length ===
    fetchedPokemons.length - 1
      ? true
      : false;

  const handleRound = name => {
    increment();
    checkClicked(name);
    if (everythingIsClicked(fetchedPokemons)) {
      nextRound();
    }
  };

  useEffect(() => {
    setFetchedPokemons(
      pokemons
        ? pokemons.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.sprites.front_default,
            clicked: false,
          }))
        : []
    );
  }, [pokemons]);

  if (!status && fetchedPokemons && fetchedPokemons.length > 0) {
    content = (
      <StyledDisplayer>
        {shuffleCards(fetchedPokemons).map(pokemon => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            clicked={pokemon.clicked}
            handleRound={handleRound}
            reset={reset}
          />
        ))}
      </StyledDisplayer>
    );
  }

  return content;
};

let shuffleCards = array => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export default Displayer;
