import { Col, Row } from "react-bootstrap";

function ListingsListItem({ id, name, price, shortAddress, createdAt }: Listing) {
  return (
    <Col lg={3} sm={4} xs={3} key={id}>
      <Row>
        <h3>{name}</h3>
        <span>{price}</span>
        <span>{shortAddress}</span>
        <span>{createdAt}</span>
      </Row>
    </Col>
  );
}

export default ListingsListItem;