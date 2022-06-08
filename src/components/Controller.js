import { useState } from 'react';
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
  const randomValue = () => Math.floor(Math.random() * 800 - stretch);

  const [stretch, setStretch] = useState(4);
  const [roundLength, setRoundLength] = useState(randomValue());
  const [score, setScore] = useState(0);

  const [isLoading, pokemons] = usePokemonData(roundLength, stretch);

  const incrementScore = () => setScore(score + 1);
  const incrementStretch = () => setStretch(stretch + 1);

  const resetStretch = () => setStretch(4);
  const resetScore = () => setScore(0);
  const resetRound = () => setRoundLength(randomValue());
  const nextRound = () => {
    resetRound();
    incrementStretch();
  };
  const resetGame = () => {
    resetScore();
    resetRound();
    resetStretch();
  };

  return (
    <Wrapper>
      <Header score={score} />
      <Displayer
        pokemons={pokemons}
        status={isLoading}
        increment={incrementScore}
        reset={resetGame}
        nextRound={nextRound}
        score={score}
      />
    </Wrapper>
  );
};

export default GameController;
