import styled from 'styled-components';

const StyledCard = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: minmax(30% 70%);
  height: clamp(250px, 10vw, 50vh);
  margin-top: 20px;
  overflow: hidden;
  transition: all 200ms ease-in;
  border-radius: 5px;
  transform: scale(1);
  box-shadow: 3px 5px 5px black;
  &:hover {
    transform: scale(1.1);
    border-radius: 12px;
  }
`;

const StyledImageHolder = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(5px 2px 0px black);

  width: 150px;
  background-size: contain;
  height: 70%;
`;

const StyledText = styled.h1`
  margin: 0;
  font-size: 22px;
  text-align: center;
  color: #fff;
`;

const Card = ({
  name,
  url,
  handleRound,
  clicked,
  reset,
  background,
  shadow,
}) => {
  const clickHandler = () => (clicked ? reset() : handleRound(name));
  const capitalizeFirst = string =>
    string.charAt(0).toUpperCase() + string.slice(1);
  let content = (
    <StyledCard
      onClick={clickHandler}
      style={{
        backgroundColor: background,
        boxShadow: `3px 3px 5px ${shadow}`,
      }}
    >
      <StyledImageHolder style={{ backgroundImage: `url(${url})` }} />
      <StyledText>{capitalizeFirst(name)}</StyledText>
    </StyledCard>
  );

  return content;
};

export default Card;
