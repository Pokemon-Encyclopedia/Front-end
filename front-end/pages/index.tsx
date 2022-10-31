import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRecoilState, useSetRecoilState } from 'recoil'
import InputBox from '../components/inputBox'
import PokectList from '../components/poketList'
import { initPoketmonList, searchValueAtom } from '../Util/recoil/state'
import { getPoketmonType } from '../types';
import { useQuery } from '@apollo/client';
import { GET_POKETLISTS } from '../gql'
import Phead from '../components/Phead'

// const Home: NextPage<{data: getPoketmonType}> = ({data}) => {
const Home: NextPage = () => {
  
  const searchValue = useRecoilState(searchValueAtom);

const { data , loading, error } = useQuery<getPoketmonType>(
  GET_POKETLISTS,
);
console.log(data);
if (loading) {return <h2>Loading...</h2>}
if (error) {return <h1>에러 발생</h1>}

  return (
    <>
      <Phead seoTitle="포켓몬 리스트페이지" />
        <InputBox />
        <PokectList data={data} />
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
