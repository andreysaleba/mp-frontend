import ListingsListItem from "../ListingsListItem";
import { Row } from "react-bootstrap";

const DATA = [ {
  id: 1,
  name: "Кроссовки Nike Cortez",
  price: 2000,
  shortAddress: "London, Hammingway st. 1",
  createdAt: "28 июля 13-25"
}, {
  id: 2,
  name: "Кроссовки Nike Cortez",
  price: 2000,
  shortAddress: "London, Hammingway st. 1",
  createdAt: "28 июля 13-25"
}
];

function ListingsList() {
  return (
    <Row className='m-lg-5'>
      {DATA.map(ListingsListItem)}
    </Row>
  );
}

export default ListingsList;