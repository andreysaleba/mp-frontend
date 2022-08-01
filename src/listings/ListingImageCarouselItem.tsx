function ListingImageCarouselItem(image: string, index: number) {
  return (
    <div key={index} className='listing-list-item-image-carousel'>
      <img
        src={image}
      />
    </div>
  );
}

export default ListingImageCarouselItem;