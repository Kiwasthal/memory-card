import styled from 'styled-components';

const StyledCard = styled.div`
  /* background-color: #ff9671; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 20%;
  border: 1px solid black;
  margin-top: 20px;
`;

const StyledImageHolder = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  background-repeat: no-repeat;
  width: 150px;
  background-size: 150px;
  height: 120px;
`;

const StyledText = styled.h1`
  margin: 0;
  font-size: 18px;
`;

const Card = ({ item }) => {
  if (item === []) return;
  console.log();
  // return (
  //   // <StyledCard>
  //   //   <StyledImageHolder
  //   //     style={{ backgroundImage: `url(${item.sprites.front_default})` }}
  //   //   />
  //   //   <StyledText>{item.name}</StyledText>
  //   // </StyledCard>
  // );
};

export default Card;
