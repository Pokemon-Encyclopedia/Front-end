import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { getPoketmonType, PokectmonListType } from '../../types';
import { useRecoilState } from 'recoil';
import { searchValueAtom } from '../../Util/recoil/state';
import { pokectName } from '../../metadata/pokectName';

const PokectList:NextPage<{data: getPoketmonType}> = ({data}) => {
    const searchValue = useRecoilState(searchValueAtom);

    const List = data?.findAll.map((i) => ({...i , pokectmonName : pokectName[i.id]}))      
   const searchDataList = List && List.filter((data) => data.pokectmonName.toLowerCase().includes(searchValue[0].toLocaleString()))
    console.log(searchDataList);
    

    return (
        <PoketListWapper>
         {List && searchDataList && searchValue ? searchDataList?.map(i => (
          <Pokect key={i.id} id={i.id} name={i.pokectmonName} front_default={i.front_default} types={i.types} 
          />
        )) : List?.map(i => (
            <Pokect key={i.id} id={i.id} name={i.pokectmonName} front_default={i.front_default} types={i.types}
            />
          ))}
           {/* <Pokect key={1} id={1} name={"리자몽"} front_default={"a"} types={["POISON","ICE"]} /> */}
        </PoketListWapper>
    )
}


const PoketListWapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 50px;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export default PokectList;
