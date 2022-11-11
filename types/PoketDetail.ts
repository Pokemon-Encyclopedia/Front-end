export interface PoketmonType {
    id:number,
    name:string,
    height:number,
    weight:number,
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

export interface PoketmonProviewType {
    id:number,
    name:string,
    sprites : {
      back_default:string,
    }
  }

export interface getPoketmonIdType {
    pokemon :PoketmonType
}

export interface getPoketmonProviewType {
    pokemon : PoketmonProviewType;
}
  