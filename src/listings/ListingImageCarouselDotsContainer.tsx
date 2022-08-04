import { Col, Container, Row } from "react-bootstrap";
import styles from "./Listings.module.scss";
import { classes } from "../utils/utilsFunctions";
import { IListingImageCarouselDotsContainerProps } from "./listings";

function ListingImageCarouselDotsContainer({
                                             id,
                                             dotsNumber,
                                             activeIndex
                                           }: IListingImageCarouselDotsContainerProps) {
  if (dotsNumber > 1) {
    return (
      <Container fluid className={styles.dotsContainer}>
        <Row
          className={classes(`listing-image-carousel-dots-container-${id}`, styles.dotsContainerRow)}>
          {[ ...Array(dotsNumber) ].map((e, i) => <Col
            className={classes(styles.dot, activeIndex === i ? styles.activeDot : "")}
            key={i}/>)}
        </Row>
      </Container>
    );
  }

  return <></>;
}

export default ListingImageCarouselDotsContainer;