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

const Home: NextPage<{data: getPoketmonType}> = ({data}) => {
  const setInitPoketmonList = useSetRecoilState(initPoketmonList);
  setInitPoketmonList(data.findAll);
  return (
    <>
      <Phead seoTitle="포켓몬 리스트페이지" />
        <InputBox />
        <PokectList data={data}  />
    </>
  )
}

export const getStaticProps:GetStaticProps = () => {
  const searchValue = useRecoilState(searchValueAtom);
  
  const { data:POKETLIST , loading, error } = useQuery<getPoketmonType>(
    GET_POKETLISTS,
      searchValue 
      ? {
          variables: {
          isAdult: false,
          type: 'POKECT',
          search: searchValue,
          } 
      }   
      : {
          variables: {
          isAdult: false,
          type: 'POKECT',
          }
      } 
  );
  if (loading) {return <h2>Loading...</h2>}
  if (error) {return <h1>에러 발생</h1>}
  
  
  return {
      props: {
          data:POKETLIST
      }
  }
}

export default Home
