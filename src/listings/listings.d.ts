import { ForwardedRef, RefObject } from "react";

export interface IListingListItemProps {
  id: number;
  name: string;
  price: number;
  shortAddress: string;
  createdAt: Date;
  images: string[];
  deliveryPossible: boolean;
}

export interface IListingImageCarouselProps {
  images: string[],
  id: number,
  name: string
}

export interface IListingImageCarouselDotsContainerProps {
  id: number,
  dotsNumber: number,
  activeIndex: number
}

export interface IListingImageCarouselItemProps {
  image: string,
  active: boolean,
  name: string
}

export interface IListingImageLastCarouselItemProps {
  image: string,
  imagesLeft: number,
  active?: boolean,
  name: string
}

export interface IListingPriceProps {
  price: number;
}

export interface IDeliveryPossibleProps {
  deliveryPossible: boolean;
}