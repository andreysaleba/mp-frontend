import ListingImageCarouselItem from "./ListingImageCarouselItem";
import ListingImageLastCarouselItem from "./ListingImageLastCarouselItem";
import ListingImageCarouselDotsContainer from "./ListingImageCarouselDotsContainer";
import useListingImageCarouselHoverSlide from "./useListingImageCarouselHoverSlide";
import useListingImageCarouselPostRender from "./useListingImageCarouselPostRender";
import styles from "./Listings.module.scss";
import { IListingImageCarouselProps } from "./listings";

const LIST_CAROUSEL_IMAGES_TO_DISPLAY = 5;

function renderCarouselWithLessThanLimitItems(images: string[], activeIndex: number, name: string) {
  return (
    images.map((image, index) => <ListingImageCarouselItem key={index} image={image} active={index === activeIndex}
                                                           name={name}/>)
  );
}

function renderCarouselWithMoreThanLimitItems(images: string[], activeIndex: number, name: string) {
  return (
    <>
      {images.slice(0, LIST_CAROUSEL_IMAGES_TO_DISPLAY - 1).map((image, index) => <ListingImageCarouselItem key={index}
                                                                                                            image={image}
                                                                                                            active={activeIndex === index}
                                                                                                            name={name}/>)}
      <ListingImageLastCarouselItem image={images[LIST_CAROUSEL_IMAGES_TO_DISPLAY - 1]}
                                    imagesLeft={images.length - LIST_CAROUSEL_IMAGES_TO_DISPLAY}
                                    active={activeIndex === LIST_CAROUSEL_IMAGES_TO_DISPLAY - 1} name={name}/>
    </>
  );
}

function ListingImageCarousel({ images, id, name }: IListingImageCarouselProps) {
  const imagesCount = images.length;
  const [ ref, value ] = useListingImageCarouselHoverSlide<HTMLDivElement>();
  const slidesToDisplay = Math.min(images.length, LIST_CAROUSEL_IMAGES_TO_DISPLAY);
  const activeIndex = Math.floor(value / (100 / slidesToDisplay));

  useListingImageCarouselPostRender(id);
  return (
    <a href={'#'} title={`${name} listing`}>
      <div ref={ref} className={styles.listingCarousel} id={`listing-carousel-${id}`}>
        {imagesCount > LIST_CAROUSEL_IMAGES_TO_DISPLAY
          ? renderCarouselWithMoreThanLimitItems(images, activeIndex, name)
          : renderCarouselWithLessThanLimitItems(images, activeIndex, name)
        }

      </div>
      <ListingImageCarouselDotsContainer id={id}
                                         activeIndex={activeIndex}
                                         dotsNumber={Math.min(images.length, LIST_CAROUSEL_IMAGES_TO_DISPLAY)}/>
    </a>
  );
}

export default ListingImageCarousel;