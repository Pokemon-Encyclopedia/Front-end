import type { NextPage } from 'next'
import InputBox from '../components/inputBox'
import PokectList from '../components/poketList'
import { getPoketmonType, PokectmonListType } from '../types';
import { useQuery } from '@apollo/client';
import Phead from '../components/Phead'
import { getPokemons } from '../gql'
import Loading from '../components/loading';
import React from 'react';
import DownLoadBtn from '../components/DownLoadBtn';
import { pokectName } from '../metadata/pokectName';
import { useRecoilState } from 'recoil';
import { initPoketmonList } from '../Util/recoil/state';


const Home: NextPage = () => {
const [, setFirstPokemonList ] = useRecoilState<PokectmonListType[]>(initPoketmonList);
const { data:List , loading } = useQuery<getPoketmonType>(getPokemons,{
    variables : {
      limit:649,
      offset:0,
    }
  }
);
if (loading) {return <Loading />}
const data = List?.pokemons.results.map((i) => ({...i , pokemonName : pokectName[i.id]} ));
setFirstPokemonList(List?.pokemons.results)

  return (
    <>
      <DownLoadBtn />
      <Phead seoTitle="리스트페이지" />
        <InputBox />
        <PokectList data={data} />
    </>
  )
}

export default React.memo(Home);
