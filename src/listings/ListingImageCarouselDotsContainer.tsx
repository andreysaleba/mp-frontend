import { Col, Container, Row } from "react-bootstrap";

function ListingImageCarouselDotsContainer({
                                             id,
                                             dotsNumber,
                                             activeIndex
                                           }: { id: number, dotsNumber: number, activeIndex: number }) {
  if (dotsNumber > 1) {
    return (

      <Container fluid className="listing-image-carousel-dots-container">
        <Row className={`listing-image-carousel-dots-container-${id} listing-image-carousel-dots-container-row`}>
          {[ ...Array(dotsNumber) ].map((e, i) => <Col className={`listing-item-image-carousel-dot ${activeIndex === i ? 'listing-item-image-carousel-dot-active' : ''}`} key={i}/>)}
        </Row>
      </Container>
    );
  }

  return <></>;
}

export default ListingImageCarouselDotsContainer;