import { Col, Row } from "react-bootstrap";
import styles from "./Listings.module.scss";
import ListingImageCarousel from "./ListingImageCarousel";
import { humanizeDate } from "../utils/utilsFunctions";
import { IListingListItemProps } from "./listings";
import ListingPrice from "./ListingPrice";
import DeliveryPossible from "./DeliveryPossible";

function ListingsListItem({
                            id,
                            name,
                            price,
                            shortAddress,
                            createdAt,
                            images,
                            deliveryPossible
                          }: IListingListItemProps) {
  return (
    <Col lg={3} sm={4} xs={3} key={id}>
      <Row>
        <ListingImageCarousel images={images} id={id} name={name}/>
        <a href={"#"} className={styles.link}>{name}</a>
        <div>
          <ListingPrice price={price}/>{" "}
          <DeliveryPossible deliveryPossible={deliveryPossible} />
        </div>
        <span className={styles.listingAttribute}>{shortAddress}</span>
        <span className={styles.listingAttribute}>{humanizeDate(createdAt)}</span>
      </Row>
    </Col>
  );
}

export default ListingsListItem;