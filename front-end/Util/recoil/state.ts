import {atom} from "recoil";

const searchValueAtom = atom<string>({
    key: 'searchValueAtom',
    default : '',
})
export {searchValueAtom};