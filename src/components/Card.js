import styled from 'styled-components';

const StyledCard = styled.div`
  justify-self: center;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: clamp(250px, 10vw, 50vh);
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
  height: 70%;
`;

const StyledText = styled.h1`
  margin: 0;
  font-size: 18px;
  text-align: center;
`;

const Card = ({ name, url, handleRound, clicked, reset }) => {
  const clickHandler = () => (clicked ? reset() : handleRound(name));
  let content = (
    <StyledCard onClick={clickHandler}>
      <StyledImageHolder style={{ backgroundImage: `url(${url})` }} />
      <StyledText>{name}</StyledText>
    </StyledCard>
  );

  return content;
};

export default Card;
