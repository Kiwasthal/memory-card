import styled from 'styled-components';

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

const StyledCounterContainer = styled.div`
  border: 1px solid black;
`;

const StyleCounter = styled.div``;

const Header = ({ score }) => {
  return (
    <StyledHeader>
      <StyledGameName>Memory-card</StyledGameName>
      <StyledLogoContainer>Pokemon</StyledLogoContainer>
      <StyledCounterContainer>{score}</StyledCounterContainer>
    </StyledHeader>
  );
};

export default Header;
