import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { PokectmonListType } from '../../types';
import { gql, useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { searchValueAtom } from '../../Util/recoil/state';
import { useCallback, useEffect, useState } from 'react';
import { pokectName } from '../../metadata/pokectName';

interface getPoketmonType {
    findAll :PokectmonListType[]
}


const GET_POKETMONS = gql`
query {
    findAll {
        id
        name
        front_default
        types
    }
  }
`;

const PokectList:NextPage = () => {
    const searchValue = useRecoilState(searchValueAtom);
    const [pokectList , setPokectList] = useState<getPoketmonType>();
    
    const { data , loading, error } = useQuery<getPoketmonType>(
        GET_POKETMONS,
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
    const List = data?.findAll.map((i) => ({...i , pokectmonName : pokectName[i.id]}))      
   const searchDataList = List && List.filter((data) => data.pokectmonName.toLowerCase().includes(searchValue[0].toLocaleString()))
    console.log(searchDataList);
    

    return (
        <PoketListWapper>
         {List && searchDataList && searchValue ? searchDataList?.map(i => (
          <Pokect key={i.id} id={i.id} name={i.pokectmonName} front_default={i.front_default} types={i.types} 
          />
        )) : List?.map(i => (
            <Pokect key={i.id} id={i.id} name={i.pokectmonName} front_default={i.front_default} types={i.types}
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
