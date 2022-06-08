import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledHeader = styled.div`
  background-image: linear-gradient(
    to bottom,
    #edf3f3,
    #e2eff0,
    #d8eaed,
    #cee5eb,
    #c4e0ea,
    #c2dee9,
    #bfdbe8,
    #bdd9e7,
    #bfd9e5,
    #c2d9e4,
    #c4d9e2,
    #c7d9e1
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 25px double black;
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
