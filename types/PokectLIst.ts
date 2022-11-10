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

export interface PoketmonType {
  id:number,
  name:string,
  height:number,
  weight:number,
  order:number,
  sprites : {
    back_default:string,
    front_default:string,
  }
  types : {
    0 : {
      type : {
        name : string,
      }
    }
    1 : {
      type : {
        name : string,
      }
    }

  },
}

export interface getPoketmonIdType {
  pokemon :PoketmonType
}
