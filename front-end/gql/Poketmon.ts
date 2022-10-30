import { gql } from "@apollo/client";

export const GET_POKETMON = gql`
query getPokectmon($poketId : ID!) {
    findPokemonById(id : $poketId) {
        id
        name
        front_default
        back_default
        types
    }
  }
`;