import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { getPoketmonType, PokectmonListType } from '../../types';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { initPoketmonList, searchValueAtom } from '../../Util/recoil/state';
import { pokectName } from '../../metadata/pokectName';
import { useQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react';

const PokectList:NextPage<{data: PokectmonListType[] | undefined}> = ({data}) => {
    const searchValue = useRecoilState(searchValueAtom);
    
    const AddKoreanNameList = data?.map((i) => ({...i , pokectmonName : pokectName[i.id]} ))  
    const filterPoketList = AddKoreanNameList?.filter((data) => data.pokectmonName.includes(searchValue[0].toLocaleString()))


    return (
        <PoketListWapper>
         {AddKoreanNameList && filterPoketList && searchValue ? filterPoketList?.map(i => (
          <Pokect key={i.id} id={i.id} name={i.pokectmonName} image={i.image}  />
        )) : AddKoreanNameList?.map(i => (
            <Pokect key={i.id} id={i.id} name={i.pokectmonName} image={i.image}
            />
          ))}
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
