import { Carousel } from "react-bootstrap";
import ListingImageCarouselItem from "./ListingImageCarouselItem";
import ListingImageLastCarouselItem from "./ListingImageLastCarouselItem";

const LIST_CAROUSEL_IMAGES_TO_DISPLAY = 5;

function ListingImageCarousel({ images, name }: { images: string[], name: string }) {
  const imagesCount = images.length;
  if (imagesCount > LIST_CAROUSEL_IMAGES_TO_DISPLAY) {
    return (
      <Carousel controls={false} interval={null} className="listing-list-item-image-carousel">
        {images.slice(0, 3).map(ListingImageCarouselItem)}
        {ListingImageLastCarouselItem(images[4], imagesCount - LIST_CAROUSEL_IMAGES_TO_DISPLAY)}
      </Carousel>
    );
  }

  return (
    <Carousel interval={null} controls={false}>
      {images.map(ListingImageCarouselItem)}
    </Carousel>
  );
}

export default ListingImageCarousel;