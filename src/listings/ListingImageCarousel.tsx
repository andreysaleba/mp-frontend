import ListingImageCarouselItem from "./ListingImageCarouselItem";
import ListingImageLastCarouselItem from "./ListingImageLastCarouselItem";
import ListingImageCarouselDotsContainer from "./ListingImageCarouselDotsContainer";
import useListingImageCarouselHoverSlide from "./useListingImageCarouselHoverSlide";
import { Container } from "react-bootstrap";

const LIST_CAROUSEL_IMAGES_TO_DISPLAY = 5;

function renderCarouselWithLessThanLimitItems(images: string[], activeIndex: number) {
  return (
    images.map((image, index) => <ListingImageCarouselItem key={index} image={image} active={index === activeIndex}/>)
  );
}

function renderCarouselWithMoreThanLimitItems(images: string[], activeIndex: number) {
  return (
    <>
      {images.slice(0, LIST_CAROUSEL_IMAGES_TO_DISPLAY - 1).map((image, index) => <ListingImageCarouselItem key={index}
                                                                                                            image={image}
                                                                                                            active={activeIndex === index}/>)}
      <ListingImageLastCarouselItem image={images[LIST_CAROUSEL_IMAGES_TO_DISPLAY - 1]}
                                    imagesLeft={images.length - LIST_CAROUSEL_IMAGES_TO_DISPLAY}
                                    active={activeIndex === LIST_CAROUSEL_IMAGES_TO_DISPLAY - 1}/>
    </>
  );
}

function ListingImageCarousel({ images, id }: { images: string[], id: number }) {
  const imagesCount = images.length;
  const [ ref, value ] = useListingImageCarouselHoverSlide<HTMLDivElement>();
  const slidesToDisplay = Math.min(images.length, LIST_CAROUSEL_IMAGES_TO_DISPLAY);
  const activeIndex = Math.floor(value / (100 / slidesToDisplay));

  return (
    <>
      <div ref={ref} className="listing-carousel">
        {imagesCount >= LIST_CAROUSEL_IMAGES_TO_DISPLAY
          ? renderCarouselWithMoreThanLimitItems(images, activeIndex)
          : renderCarouselWithLessThanLimitItems(images, activeIndex)
        }

      </div>
      <ListingImageCarouselDotsContainer id={id}
                                         dotsNumber={Math.min(images.length, LIST_CAROUSEL_IMAGES_TO_DISPLAY)}/>
    </>
  );
}

export default ListingImageCarousel;