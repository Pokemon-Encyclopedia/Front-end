import {atom} from "recoil";
import { PokectmonListType } from "../../types";

const searchValueAtom = atom<string>({
    key: 'searchValueAtom',
    default : '',
})

const initPoketmonList = atom<PokectmonListType[]>({
    key: 'initPoketmonList',
    default: [],
})
export {searchValueAtom,initPoketmonList};

