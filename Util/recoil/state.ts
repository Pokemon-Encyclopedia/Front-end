import {atom} from "recoil";
import { PokectmonList } from "../../types";

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

const MainPoketmonList = atom<PokectmonList[]>({
    key:'initPoketmonList',
    default : [],
})

export {searchValueAtom , PokeListSortAtom , installClickedState ,MainPoketmonList};

