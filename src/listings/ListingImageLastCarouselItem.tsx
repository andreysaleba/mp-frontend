import React from "react";
import styles from "./Listings.module.scss";
import { classes } from "../utils/utilsFunctions";
import { IListingImageLastCarouselItemProps } from "./listings";

function ListingImageLastCarouselItem({
                                        image,
                                        imagesLeft,
                                        active
                                      }: IListingImageLastCarouselItemProps) {
  return (
    <div
      className={classes(styles.carousel, active ? styles.activeImage : "")}>
      <div className={styles.lastImageLabel}>{imagesLeft} more photo{imagesLeft > 1 ? "s" : ""}</div>
      <img src={image}
           className={classes(styles.lastImage, styles.image)}/>

    </div>
  );
}

export default ListingImageLastCarouselItem;