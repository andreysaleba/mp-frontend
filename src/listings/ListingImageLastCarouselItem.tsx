import React from "react";

function ListingImageLastCarouselItem(image: string, imagesLeft: number) {
  return (
    <div className='listing-list-item-image-carousel'>
      <div className='listing-carousel-last-image-label'>{imagesLeft} more photo{imagesLeft > 1 ? "s" : ""}</div>
      <img src={image} className='listing-image-carousel-last-image'/>

    </div>
  );
}

export default ListingImageLastCarouselItem;