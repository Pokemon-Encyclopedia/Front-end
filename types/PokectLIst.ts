export interface PokectmonListType{
    id:number,
    name:string,
    image:string,
    pokemonName:string,
}

export interface getPoketmonType {
  pokemons : {
    results :PokectmonListType[]
  }
}

export interface Ptype {
  type : {
    name: string,
  },
}
