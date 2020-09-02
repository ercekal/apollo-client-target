import { gql } from "@apollo/client";

export const GET_INPUT = gql`
  query GetInput {
    inputText @client
  }
`