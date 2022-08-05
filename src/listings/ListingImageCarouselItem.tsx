import styles from "./Listings.module.scss";
import { classes } from "../utils/utilsFunctions";
import { IListingImageCarouselItemProps } from "./listings";

function ListingImageCarouselItem({ image, active, name }: IListingImageCarouselItemProps) {
  return (
    <div
      className={classes(styles.carousel, active ? styles.activeImage : "")}>
      <img
        alt={name}
        src={image}
        className={styles.image}
      />
    </div>
  );
}

export default ListingImageCarouselItem;