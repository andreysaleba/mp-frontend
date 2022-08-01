import { gql } from "@apollo/client";

export const GET_ALL_LISTINGS = gql`
  query GetAllListings($limit: Int, $offset: Int) {
    allListings(limit: $limit, offset: $offset) {
      id
      name
      price
      shortAddress
      images
      createdAt
      updatedAt
    }
  }
`