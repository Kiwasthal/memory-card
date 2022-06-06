import styled from 'styled-components';
import Card from './Card';

const StyledDisplayer = styled.div`
  background-color: #ffc74d;
  display: grid;
  grid-auto-columns: 10%;
  max-width: 80%;
`;

const Displayer = ({ items }) => {
  const displayItems = items.map(item => <Card />);
  return <StyledDisplayer>{displayItems}</StyledDisplayer>;
};

export default Displayer;
