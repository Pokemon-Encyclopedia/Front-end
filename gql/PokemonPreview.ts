import { gql } from "@apollo/client";

export const getPokemonPreview = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
  }
}
`;