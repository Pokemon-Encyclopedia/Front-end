export interface PokectmonListType{
    id:number,
    name:string,
    image:string,
}

export interface getPoketmonType {
  pokemons : {
    results :PokectmonListType[]
  }
  }


  
export interface getPoketmonIdType {
    findPokemonById :PokectmonListType
  }