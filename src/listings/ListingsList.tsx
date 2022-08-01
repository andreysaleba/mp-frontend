import ListingsListItem from "../ListingsListItem";
import { Row } from "react-bootstrap";
import "./Listings.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_LISTINGS } from "../operations/queries/getAllListings";

function ListingsList() {
  const { loading, data, error } = useQuery(GET_ALL_LISTINGS, { variables: { limit: 40, offset: 0 } });

  if (loading) return <p>Loading...</p>;
  if (error) <p>Error :( </p>;

  return (
    <Row className="m-lg-5">
      {data.allListings.map(ListingsListItem)}
    </Row>
  );
}

export default ListingsList;