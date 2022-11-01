/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import InputBox from '../components/inputBox'
import PokectList from '../components/poketList'
import { getPoketmonType } from '../types';
import { useQuery } from '@apollo/client';
import Phead from '../components/Phead'
import { getPokemons } from '../gql'
import Loading from '../components/loading';

const Home: NextPage = () => {  

const { data , loading } = useQuery<getPoketmonType>(getPokemons,{
    variables : {
      limit:251,
      offset:0,
    }
  }
);

if (loading) {return <Loading />}

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
