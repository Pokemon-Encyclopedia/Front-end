/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import InputBox from '../components/inputBox'
import PokectList from '../components/poketList'
import { getPoketmonType } from '../types';
import { useQuery } from '@apollo/client';
import Phead from '../components/Phead'
import { getPokemons } from '../gql'
import Loading from '../components/loading';
import React from 'react';
import DownLoadBtn from '../components/DownLoadBtn';

const Home: NextPage = () => {
const { data , loading } = useQuery<getPoketmonType>(getPokemons,{
    variables : {
      limit:386,
      offset:0,
    }
  }
);
if (loading) {return <Loading />}

  return (
    <>
      <DownLoadBtn />
      <Phead seoTitle="리스트페이지" />
        <InputBox />
        <PokectList data={data?.pokemons.results} />
    </>
  )
}

export default React.memo(Home);
