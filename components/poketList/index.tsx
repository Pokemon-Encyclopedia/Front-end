/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { PokectmonListType } from '../../types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PokeListSortAtom, searchValueAtom } from '../../Util/recoil/state';
import { pokectName } from '../../metadata/pokectName';
import { useEffect, useMemo, useState } from 'react';

const PokectList:NextPage<{data: PokectmonListType[] | undefined}> = ({data}) => {
  const searchValue = useRecoilState(searchValueAtom);
  const [AddKoreanNameList , setAddKoreanNameList] = useState([]);
  const setSortValue = useRecoilValue(PokeListSortAtom);

  useEffect(() =>{
    setAddKoreanNameList(data?.map((i) => ({...i , pokectmonName : pokectName[i.id]} )));
  },[])

  const filterPoketList = useMemo(() => {return AddKoreanNameList?.filter((data) => data.pokectmonName.includes(searchValue[0].toLocaleString()))},[searchValue]);
  useMemo(() => {
    switch(setSortValue){
      case "도감번호순서" :
      AddKoreanNameList.sort((a,b) => a.id - b.id); break;
    case "도감번호반대순서" :
      AddKoreanNameList.sort((a,b) => b.id - a.id); break;
    case "가나다순서" :
      AddKoreanNameList.sort((a,b) => b.pokectmonName > a.pokectmonName ? -1 : 1); break;
    case "가나다역순서" :
      AddKoreanNameList.sort((a,b) => b.pokectmonName < a.pokectmonName ? -1 : 1); break;
    } 
  },[setSortValue])

  return (
    <PoketListWapper>
      {AddKoreanNameList && filterPoketList && searchValue ? filterPoketList?.map(i => (
      <Pokect key={i.id} id={i.id} Kname={i.pokectmonName} name={i.name} image={i.image} />
      )) : 
      AddKoreanNameList?.map(i => (
      <Pokect key={i.id} id={i.id} Kname={i.pokectmonName} name={i.name} image={i.image} />
      ))}
    </PoketListWapper>
  )
}

const PoketListWapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 27px 30px 3.2vw;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
  }
`;

export default PokectList;
