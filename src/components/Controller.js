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
  const [roundLength, setRoundLength] = useState(4);
  const [count, setCount] = useState(0);

  const [isLoading, pokemons] = usePokemonData(3, 2);

  return (
    <Wrapper>
      <Header />
      <Displayer items={pokemons} status={isLoading} />
    </Wrapper>
  );
};

export default GameController;
