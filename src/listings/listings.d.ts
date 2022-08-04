export interface IListingListItemProps {
  id: number;
  name: string;
  price: number;
  shortAddress: string;
  createdAt: Date;
  images: string[];
}

export interface IListingImageCarouselProps {
  images: string[],
  id: number
}

export interface IListingImageCarouselDotsContainerProps {
  id: number,
  dotsNumber: number,
  activeIndex: number
}

export interface IListingImageCarouselItemProps {
  image: string,
  active: boolean
}

export interface IListingImageLastCarouselItemProps {
  image: string,
  imagesLeft: number,
  active?: boolean
}