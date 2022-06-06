import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #0099cd;
  display: flex;
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

const Header = () => {
  return (
    <StyledHeader>
      <StyledGameName></StyledGameName>
    </StyledHeader>
  );
};

export default Header;
