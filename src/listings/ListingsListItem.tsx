import { Col, Row } from "react-bootstrap";
import ListingImageCarousel from "./ListingImageCarousel";
import { humanizeDate } from "../utils/utilsFunctions";

function ListingsListItem({ id, name, price, shortAddress, createdAt, images }: Listing) {
  return (
    <Col lg={3} sm={4} xs={3} key={id} className='listing-list-item'>
      <Row>
        <ListingImageCarousel images={images} name={name}/>
        <h3>{name}</h3>
        <span>${price}</span>
        <span>{shortAddress}</span>
        <span>{humanizeDate(createdAt)}</span>
      </Row>
    </Col>
  );
}

export default ListingsListItem;