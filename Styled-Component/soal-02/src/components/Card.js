import { CardContainer, CardImage, CardBody, CardPrice, CardProductName, CardTitle, CardText } from './Styles/Card';
import Button from './Button';
import styled from 'styled-components';

const Viewport = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Card = (props) => {
  return (
    <Viewport>
      <CardContainer width="500px">
        <CardImage src={props.item.imageUrl} />
        <CardBody>
          <CardPrice>{props.item.price}</CardPrice>
          <CardProductName>{props.item.productName}</CardProductName>
          <Button />
        </CardBody>
      </CardContainer>
    </Viewport>
  );
}
export default Card;
