import styled from 'styled-components';
import logo from './assets/logo.svg';
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
  border-bottom: 20px double black;
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  text-shadow: 1px 3px black;
`;

const StyledLogoContainer = styled.div`
  height: 100%;
  width: 200px;
  background-position: center;
  background-size: cover;
  background-image: url(${logo});
`;

const StyleCounter = styled.div`
  font-size: 24px;
  border-bottom: 4px solid black;
  filter: drop-shadow(1px 1px 1px black);
`;

const Header = ({ score }) => {
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    if (score > highestScore) setHighestScore(score);
  }, [score, highestScore]);

  return (
    <StyledHeader>
      <StyleCounter style={{ marginLeft: '50px' }}>
        {'Highest Score: ' + highestScore}
      </StyleCounter>
      <StyledLogoContainer />
      <StyleCounter style={{ marginRight: '150px' }}>
        {'Score: ' + score}
      </StyleCounter>
    </StyledHeader>
  );
};

export default Header;
