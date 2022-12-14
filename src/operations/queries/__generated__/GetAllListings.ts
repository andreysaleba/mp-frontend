/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllListings
// ====================================================

export interface GetAllListings_allListings {
  __typename: "Listing";
  id: number;
  name: string;
  price: number;
  shortAddress: string;
  images: string[];
  deliveryPossible: boolean;
  createdAt: any;
  updatedAt: any;
}

export interface GetAllListings {
  allListings: GetAllListings_allListings[];
}

export interface GetAllListingsVariables {
  limit?: number | null;
  offset?: number | null;
}
