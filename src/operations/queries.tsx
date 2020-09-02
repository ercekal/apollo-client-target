import { gql } from "@apollo/client";

export const GET_INPUT = gql`
  query GetInput {
    firstName @client
    lastName @client
  }
`