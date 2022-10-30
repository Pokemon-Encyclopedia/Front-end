import { gql } from "@apollo/client";

export const GET_POKETMONS = gql`
query {
  findAll {
      id
      name
      front_default
      types
  }
}
`;