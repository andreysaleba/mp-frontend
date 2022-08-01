import ListingImageCarouselItem from "./ListingImageCarouselItem";
import ListingImageLastCarouselItem from "./ListingImageLastCarouselItem";
import ReactOwlCarousel from "react-owl-carousel";
import ListingImageCarouselDotsContainer from "./ListingImageCarouselDotsContainer";

const LIST_CAROUSEL_IMAGES_TO_DISPLAY = 5;

function renderCarouselWithLessThanLimitItems(images: string[]) {
  return (
    images.map(ListingImageCarouselItem)
  );
}

function renderCarouselWithMoreThanLimitItems(images: string[]) {
  return (
    <>
      {images.slice(0, LIST_CAROUSEL_IMAGES_TO_DISPLAY - 2).map(ListingImageCarouselItem)}
      {ListingImageLastCarouselItem(images[LIST_CAROUSEL_IMAGES_TO_DISPLAY - 1], images.length - LIST_CAROUSEL_IMAGES_TO_DISPLAY)}
    </>
  );
}


function ListingImageCarousel({ images, id }: { images: string[], id: number }) {
  const imagesCount = images.length;
  return (
    <>
      <ReactOwlCarousel dots dotsContainer={`.listing-image-carousel-dots-container-${id}`} className="owl-theme"
                        items={1}>
        {imagesCount > LIST_CAROUSEL_IMAGES_TO_DISPLAY
          ? renderCarouselWithMoreThanLimitItems(images)
          : renderCarouselWithLessThanLimitItems(images)
        }
      </ReactOwlCarousel>
      <ListingImageCarouselDotsContainer id={id}/>
    </>
  );
}

export default ListingImageCarousel;