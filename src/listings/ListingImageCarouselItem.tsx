import { Carousel } from "react-bootstrap";

function ListingImageCarouselItem(image: string, index: number) {
  return (
    <Carousel.Item key={index} className='listing-list-item-image-carousel'>
      <img
        src={image}
      />
      <Carousel.Caption/>
    </Carousel.Item>
  );
}

export default ListingImageCarouselItem;