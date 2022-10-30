import { gql } from "@apollo/client";

export const GET_POKETLISTS = gql`
query {
  findAll {
      id
      name
      front_default
      types
  }
}
`;