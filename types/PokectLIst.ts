export interface PokectmonList{
    id:number,
    name:string,
    image:string,
    pokemonName:string,
}

export interface getPoketmon {
  pokemons : {
    results :PokectmonList[]
  }
}
