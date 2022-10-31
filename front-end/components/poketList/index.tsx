import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { getPoketmonType } from '../../types';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { initPoketmonList, searchValueAtom } from '../../Util/recoil/state';
import { pokectName } from '../../metadata/pokectName';
import { GET_POKETLISTS } from '../../gql';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

const PokectList:NextPage<{data: getPoketmonType | undefined}> = ({data}) => {
// const PokectList:NextPage = () => {
    // const setInitPoketmonList = useSetRecoilState(initPoketmonList);
    const searchValue = useRecoilState(searchValueAtom);
        
    // const { data , loading, error } = useQuery<getPoketmonType>(
    //     GET_POKETLISTS,
    //     searchValue 
    //     ? {
    //         variables: {
    //         isAdult: false,
    //         type: 'POKECT',
    //         search: searchValue,
    //         } 
    //     }   
    //     : {
    //         variables: {
    //         isAdult: false,
    //         type: 'POKECT',
    //         }
    //     } 
    // );    
    // console.log(data);
    // if (loading) {return <h2>Loading...</h2>}
    // if (error) {return <h1>에러 발생</h1>}

    const List = data?.findAll.map((i) => ({...i , pokectmonName : pokectName[i.id]}))  
    let searchDataList = List && List.filter((data) => data.pokectmonName.toLowerCase().includes(searchValue[0].toLocaleString()))
    console.log(searchDataList);

    useEffect(() => {
        
    },[])
    

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
