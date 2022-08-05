import { ReactComponent as DeliveryPossibleLogo } from "../images/deliverypossible.svg";
import styles from "./Listings.module.scss";
import { IDeliveryPossibleProps } from "./listings";
import { OverlayTrigger, Tooltip, TooltipProps } from "react-bootstrap";
import './Listings.scss';

function DeliveryPossible({ deliveryPossible }: IDeliveryPossibleProps) {
  if (deliveryPossible) {
    const renderTooltip = (props: TooltipProps) => (
      <Tooltip {...props}>
        Delivery is possible
      </Tooltip>
    );

    return (
      <OverlayTrigger
        delay={0}
        placement="right"
        overlay={renderTooltip}
      >
        <DeliveryPossibleLogo className={styles.deliveryPossible}/>
      </OverlayTrigger>
    );
  }
  return <></>
}

export default DeliveryPossible;