import styles from "./Listings.module.scss";
import { classes } from "../utils/utilsFunctions";
import { IListingImageCarouselItemProps } from "./listings";

function ListingImageCarouselItem({ image, active }: IListingImageCarouselItemProps) {
  return (
    <div
      className={classes(styles.carousel, active ? styles.activeImage : "")}>
      <img
        src={image}
        className={styles.image}
      />
    </div>
  );
}

export default ListingImageCarouselItem;