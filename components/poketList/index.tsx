import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { PokectmonList } from '../../types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MainPoketmonList, PokeListSortAtom, searchValueAtom } from '../../Util/recoil/state';
import { useEffect, useMemo, useState } from 'react';
import React from 'react';

const PokectList:NextPage<{data: PokectmonList[]}> = ({data}) => {
  const searchValue = useRecoilState(searchValueAtom);

  const [PoList , setPoList] =  useState<PokectmonList[]>();
  const setSortValue = useRecoilValue(PokeListSortAtom);  
  const [, setMainPokemonList ] = useRecoilState<PokectmonList[]>(MainPoketmonList);
    
  useEffect(()=> {
    setPoList(data);
    setMainPokemonList(data);
  },[data]);
  
  const filterPoketList = PoList?.filter((data) => data.pokemonName.includes(searchValue[0].toLocaleString()));
  
  useMemo(() => {
    const List = [...data];
    switch(setSortValue){
    case "도감번호순서" :
      setPoList(List.sort((a,b) => a.id - b.id)); break;
    case "도감번호반대순서" :
      setPoList(List.sort((a,b) => b.id - a.id)); break;
    case "가나다순서" :
      setPoList(List.sort((a,b) => b.pokemonName > a.pokemonName ? -1 : 1)); break;
    case "가나다역순서" :
      setPoList(List.sort((a,b) => b.pokemonName < a.pokemonName ? -1 : 1)); break;
    } 
  },[setSortValue])

  return (
    <PoketListWapper>
      {PoList && filterPoketList && searchValue ? filterPoketList?.map(i => (
      <Pokect key={i.id} id={i.id} name={i.name} image={i.image} pokemonName={i.pokemonName} />
      )) : 
      PoList?.map(i => (
      <Pokect key={i.id} id={i.id} name={i.name} image={i.image} pokemonName={i.pokemonName} />
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

export default React.memo(PokectList);
