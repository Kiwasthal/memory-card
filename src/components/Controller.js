import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Displayer from './Displayer';
import usePokemonData from './Hooks/useFetchData';

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 12% 1fr;
`;

const GameController = () => {
  const [startingValue, setRoundLength] = useState(14);
  const [stretch, setStretch] = useState(4);
  const [count, setCount] = useState(0);

  const [isLoading, pokemons] = usePokemonData(startingValue, stretch);
  console.log(pokemons);

  return (
    <Wrapper>
      <Header />
      <Displayer pokemons={pokemons} status={isLoading} />
    </Wrapper>
  );
};

export default GameController;
