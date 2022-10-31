import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRecoilState, useSetRecoilState } from 'recoil'
import InputBox from '../components/inputBox'
import PokectList from '../components/poketList'
import { initPoketmonList, searchValueAtom } from '../Util/recoil/state'
import { getPoketmonType } from '../types';
import { gql, useQuery } from '@apollo/client';
import Phead from '../components/Phead'
import { getPokemons } from '../gql'

const Home: NextPage = () => {  

const { data , loading, error } = useQuery<getPoketmonType>(getPokemons,{
    variables : {
      limit:151,
      offset:0,
    }
  }
);

if (loading) {return <h2>Loading...</h2>}
if (error) {return <h1>에러 발생</h1>}

  return (
    <>
      <Phead seoTitle="포켓몬 리스트페이지" />
        <InputBox />
        <PokectList data={data?.pokemons.results} />
    </>
  )
}

// export const getStaticProps:GetStaticProps = () => {  
//   const { data , loading, error } = useQuery<getPoketmonType>(GET_POKETLISTS);
//   console.log(data);
//   // if (loading) {return <h2>Loading...</h2>}
//   // if (error) {return <h1>에러 발생</h1>}
//   return {
//       props: {
//           data:data
//       }
//   }
// }

export default Home
