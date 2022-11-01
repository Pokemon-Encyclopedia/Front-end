export interface PokectmonListType{
    id:number,
    name:string,
    Kname:string,
    image:string,
}

export interface getPoketmonType {
  pokemons : {
    results :PokectmonListType[]
  }
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
  types: [
    type : {
      type:{
        name:string,
      }
    },
  ],
}

export interface getPoketmonIdType {
  pokemon :PoketmonType
}