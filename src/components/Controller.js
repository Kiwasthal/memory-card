import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Displayer from './Displayer';
import getPokemon from './Hooks/useFetchData';

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 12% 1fr;
`;

const GameController = () => {
  const [roundLength, setRoundLength] = useState(4);
  const [pokemons, setPokemons] = useState(getPokemon(roundLength, 0));

  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Header />
      <Displayer items={pokemons} />
    </Wrapper>
  );
};

export default GameController;
