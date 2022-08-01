import ListingsListItem from "./ListingsListItem";
import { Col, Row } from "react-bootstrap";
import "./Listings.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_LISTINGS } from "../operations/queries/getAllListings";
import { PAGINATION_PAGE_SIZE } from "../utils/const";
import InfiniteScroll from "react-infinite-scroll-component";

function ListingsList() {
  const { loading, data, error, fetchMore } = useQuery(GET_ALL_LISTINGS, {
    variables: {
      limit: PAGINATION_PAGE_SIZE,
      offset: 0
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) <p>Error :( </p>;

  const { allListings } = data;

  return (
    <InfiniteScroll
      dataLength={allListings.length}
      next={() => fetchMore({ variables: { limit: PAGINATION_PAGE_SIZE, offset: allListings.length } })}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Row className="m-lg-5" fluid>
        <Col lg={2}/>
        <Col>
          <Row>
            {allListings.map(ListingsListItem)}
          </Row>
        </Col>
        <Col lg={2}/>
      </Row>
    </InfiniteScroll>
  );
}

export default ListingsList;