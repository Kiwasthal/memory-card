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
  const [stretch, setStretch] = useState(4);
  const randomValue = () => Math.floor(Math.random() * 900 - stretch);
  const [roundLength, setRoundLength] = useState(randomValue());
  const [score, setScore] = useState(0);

  let [isLoading, pokemons] = usePokemonData(roundLength, stretch);

  const incrementScore = () => setScore(score + 1);

  const resetScore = () => setScore(0);
  const resetRound = () => setRoundLength(randomValue());
  const resetGame = () => {
    resetScore();
    resetRound();
  };

  return (
    <Wrapper>
      <Header score={score} />
      <Displayer
        pokemons={pokemons}
        status={isLoading}
        increment={incrementScore}
        reset={resetGame}
        score={score}
      />
    </Wrapper>
  );
};

export default GameController;
