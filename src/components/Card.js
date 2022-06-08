import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
  position: relative;
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
  z-index: 9000;
  text-shadow: 2px 3px black;
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
  const randomPosition = () => Math.floor(Math.random() * 100);
  const start = [];

  const fillStart = () => {
    for (let i = 0; i <= 20; i++) {
      if (shadow)
        start.push(
          <FontAwesomeIcon
            icon={faStar}
            style={{
              position: 'absolute',
              right: `${randomPosition()}%`,
              top: `${randomPosition()}%`,
              color: `${shadow}`,
            }}
          />
        );
      else {
        start.push(
          <FontAwesomeIcon
            icon={faStar}
            style={{
              position: 'absolute',
              right: `${randomPosition()}%`,
              top: `${randomPosition()}%`,
              color: `rgba(0, 9, 0, 0.1)`,
            }}
          />
        );
      }
    }
  };
  fillStart();

  let content = (
    <StyledCard
      onClick={clickHandler}
      style={{
        backgroundColor: background,
        boxShadow: `3px 3px 5px ${shadow}`,
      }}
    >
      {start.map(start => start)}

      <StyledImageHolder style={{ backgroundImage: `url(${url})` }} />
      <StyledText>{capitalizeFirst(name)}</StyledText>
    </StyledCard>
  );

  return content;
};

export default Card;
