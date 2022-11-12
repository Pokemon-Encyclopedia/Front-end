import { gql } from "@apollo/client";

export const getPokemons = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      id
      name
      image
    }
  }
}
`