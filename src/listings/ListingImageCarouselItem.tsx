function ListingImageCarouselItem({ image, active }: { image: string, active: boolean }) {
  return (
    <div
      className={`listing-list-item-image-carousel ${active ? "listing-list-item-image-carousel-active-image" : ""}`}>
      <img
        src={image}
        className="listing-list-item-image-carousel-image"
      />
    </div>
  );
}

export default ListingImageCarouselItem;