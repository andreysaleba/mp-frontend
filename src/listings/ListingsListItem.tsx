import { Col, Row } from "react-bootstrap";
import ListingImageCarousel from "./ListingImageCarousel";
import { humanizeDate } from "../utils/utilsFunctions";
import { IListingListItemProps } from "./listings";

function ListingsListItem({ id, name, price, shortAddress, createdAt, images }: IListingListItemProps) {
  return (
    <Col lg={3} sm={4} xs={3} key={id}>
      <Row>
        <ListingImageCarousel images={images} id={id}/>
        <h3>{name}</h3>
        <span>${price}</span>
        <span>{shortAddress}</span>
        <span>{humanizeDate(createdAt)}</span>
      </Row>
    </Col>
  );
}

export default ListingsListItem;