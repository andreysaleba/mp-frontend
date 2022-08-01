import ListingsListItem from "../ListingsListItem";
import { Row } from "react-bootstrap";
import './Listings.scss';

const DATA = [ {
  id: 1,
  name: "Кроссовки Nike Cortez",
  price: 2000,
  shortAddress: "London, Hammingway st. 1",
  createdAt: "28 июля 13-25",
  images: [ "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E", "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E", "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E" ]
}, {
  id: 2,
  name: "Кроссовки Nike Cortez",
  price: 2000,
  shortAddress: "London, Hammingway st. 1",
  createdAt: "28 июля 13-25",
  images: [
    "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E",
    "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E",
    "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E",
    "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E",
    "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E",
    "https://32.img.avito.st/image/1/1.PQDmlra_kengMlfukNoKcjs1l-9eM5PjWIWUL1U1k-lScw.-y2Htc_8hHP4dEVancHTmIpuYT-GmghHzwWcM4RCy7E"
  ]
}
];

function ListingsList() {
  return (
    <Row className="m-lg-5">
      {DATA.map(ListingsListItem)}
    </Row>
  );
}

export default ListingsList;