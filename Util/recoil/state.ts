import {atom} from "recoil";

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

export {searchValueAtom , PokeListSortAtom , installClickedState};

