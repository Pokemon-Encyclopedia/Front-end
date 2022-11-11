import {atom} from "recoil";
import { PokectmonListType } from "../../types";

const searchValueAtom = atom<string>({
    key: 'searchValueAtom',
    default : '',
})

const PokeListSortAtom = atom<string>({
    key: 'PokeListSortAtom',
    default: '',
})

const installClickedState = atom<boolean>({
    key: 'installClick',
    default : false,
})

const initPoketmonList = atom<PokectmonListType[]>({
    key:'initPoketmonList',
    default : [],
})

export {searchValueAtom , PokeListSortAtom , installClickedState ,initPoketmonList};

