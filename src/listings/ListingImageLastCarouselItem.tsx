import React from "react";

function ListingImageLastCarouselItem({
                                        image,
                                        imagesLeft,
                                        active
                                      }: { image: string, imagesLeft: number, active?: boolean }) {
  return (
    <div
      className={`listing-list-item-image-carousel ${active ? "listing-list-item-image-carousel-active-image" : ""}`}>
      <div className="listing-carousel-last-image-label">{imagesLeft} more photo{imagesLeft > 1 ? "s" : ""}</div>
      <img src={`${image}?t=${Math.random()}`} className="listing-image-carousel-last-image listing-list-item-image-carousel-image"/>

    </div>
  );
}

export default ListingImageLastCarouselItem;