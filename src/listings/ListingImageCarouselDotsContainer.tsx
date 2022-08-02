import { Col, Container, Row } from "react-bootstrap";

function ListingImageCarouselDotsContainer({ id, dotsNumber }: { id: number, dotsNumber: number }) {
  if (dotsNumber > 1) {
    return (
      <Container fluid className='listing-image-carousel-dots-container'>
        <Row className={`listing-image-carousel-dots-container-${id}`}>
          {[ ...Array(dotsNumber) ].map((e, i) => <Col className="listing-item-image-carousel-dot" key={i}/>)}
        </Row>
      </Container>
    );
  }

  return <></>;
}

export default ListingImageCarouselDotsContainer;