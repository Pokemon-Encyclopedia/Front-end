import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { PokectmonListType } from '../../types';
import { gql, useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { searchValueAtom } from '../../Util/recoil/state';



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
    const { data, loading, error } = useQuery<PokectmonListType[]>(
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
    console.log(data);

    return (
        <PoketListWapper>
        {data.findAll?.map(i => (
          <Pokect key={i.id} id={i.id} name={i.name} front_default={i.front_default} types={i.types} />
        ))}
        <Pokect key={1} id={1} name={"이상해씨"} front_default={""} types={["풀","2풀"]} />
        </PoketListWapper>
    )
}

const PoketListWapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 50px;
    background-color: #FAEBD7;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;



export default PokectList;
