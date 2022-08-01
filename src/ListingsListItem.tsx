import { Col, Row } from "react-bootstrap";
import ListingImageCarousel from "./listings/ListingImageCarousel";

function ListingsListItem({ id, name, price, shortAddress, createdAt, images }: Listing) {
  return (
    <Col lg={3} sm={4} xs={3} key={id}>
      <Row>
        <h3>{name}</h3>
        <span>{price}</span>
        <span>{shortAddress}</span>
        <span>{createdAt}</span>
        <ListingImageCarousel images={images} name={name}/>
      </Row>
    </Col>
  );
}

export default ListingsListItem;