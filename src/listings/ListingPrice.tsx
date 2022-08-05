import styles from "./Listings.module.scss";
import { IListingPriceProps } from "./listings";

function ListingPrice({price}: IListingPriceProps) {
  return (
    <span className={styles.price}>${price.toLocaleString('en')}</span>
  );
}

export default ListingPrice;