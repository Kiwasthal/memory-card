import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 20%;
  border: 1px solid black;
  margin-top: 20px;
  overflow: hidden;
`;

const StyledImageHolder = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  background-size: contain;
  height: 120px;
`;

const StyledText = styled.h1`
  margin: 0;
  font-size: 18px;
`;

const Card = ({ name, url, increment, clicked, checkCl, resetGame }) => {
  const clickHandler = () => {
    if (clicked) resetGame();
    else {
      increment();
      checkCl(name);
    }
  };

  let content = (
    <StyledCard onClick={clickHandler}>
      <StyledImageHolder style={{ backgroundImage: `url(${url})` }} />
      <StyledText>{name}</StyledText>
    </StyledCard>
  );

  return content;
};

export default Card;
