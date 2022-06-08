import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Card from './Card';
import findBackground from './findBackground';
import pokeball from './assets/pokeball.png';
import { keyframes } from 'styled-components';
import bgimg from './assets/bgimg.jpg';

const StyledDisplayer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background: url(${bgimg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const StyledImage = styled.img`
  align-self: center;
  justify-self: center;
  height: 30%;
  animation: ${Rotate} 5s infinite linear;
`;

const Displayer = ({ pokemons, status, increment, reset, nextRound }) => {
  let content = <StyledImage src={pokeball} alt="pokeball-loading" />;

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
    if (everythingIsClicked(fetchedPokemons)) nextRound();
  };

  useEffect(() => {
    setFetchedPokemons(
      pokemons
        ? pokemons.map(pokemon => ({
            background: findBackground(pokemon, 0),
            shadow: findBackground(pokemon, 1),
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
            background={pokemon.background}
            shadow={pokemon.shadow}
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

  while (currentIndex !== 0) {
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
