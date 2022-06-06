import styled from 'styled-components';

const StyledCard = styled.div`
  /* background-color: #ff9671; */
  display: flex;
`;

const StyledImageHolder = styled.div`
  max-width: 80%;
  max-height: 60%;
`;

const Card = ({ item }) => {
  console.log(item);
  return (
    <StyledCard>
      <StyledImageHolder>{item.name}</StyledImageHolder>
    </StyledCard>
  );
};

export default Card;
