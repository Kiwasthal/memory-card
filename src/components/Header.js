import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledHeader = styled.div`
  background-color: #0099cd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledGameName = styled.div`
  border: 1px solid black;
`;

const StyledLogoContainer = styled.div`
  border: 1px solid black;
`;

const StyledCounterContainer = styled.div``;

const StyleCounter = styled.div`
  border: 1px solid black;
`;

const Header = ({ score }) => {
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    if (score > highestScore) setHighestScore(score);
  }, [score, highestScore]);

  return (
    <StyledHeader>
      <StyledGameName>Memory-card</StyledGameName>
      <StyledLogoContainer>Pokemon</StyledLogoContainer>
      <StyledCounterContainer>
        <StyleCounter>{'Highest Score: ' + highestScore}</StyleCounter>
        <StyleCounter>{'Score: ' + score}</StyleCounter>
      </StyledCounterContainer>
    </StyledHeader>
  );
};

export default Header;
