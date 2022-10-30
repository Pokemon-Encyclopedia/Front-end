export interface PokectmonListType{
    id:number,
    name:string,
    front_default:string,
    back_default?:string,
    types : string[],
}

export interface getPoketmonType {
    findAll :PokectmonListType[]
  }