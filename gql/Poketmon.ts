import { gql } from "@apollo/client";

export const getPokemon = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    height
    weight
    sprites {
      front_default
      back_default
    }
    types {
      type {
        name
      }
    }
  }
}
`;