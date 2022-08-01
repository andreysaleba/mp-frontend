import { Carousel } from "react-bootstrap";
import React from "react";

interface ListingImageLastCarouselItemProps {
  image: string;
  imagesLeft: number;
}

function ListingImageLastCarouselItem(image: string, imagesLeft: number) {
  return (
    <Carousel.Item className='listing-image-last-carousel-item'>
      <div className='listing-carousel-last-image-label'>{imagesLeft} more photo{imagesLeft > 1 ? "s" : ""}</div>
      <img src={image} className='listing-image-carousel-last-image'/>
      <Carousel.Caption/>

    </Carousel.Item>
  );
}

export default ListingImageLastCarouselItem;