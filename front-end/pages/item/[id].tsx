import { GetServerSideProps, NextPage } from 'next';
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { PokectmonListType } from '../../types';
import { gql, useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { searchValueAtom } from '../../Util/recoil/state';
import { pokectName } from '../../metadata/pokectName';
import Image from "next/image";

const GET_POKETMON = gql`
query getPokectmon($poketId : ID!) {
    findPokemonById(id : $poketId) {
        id
        name
        front_default
        back_default
        types
    }
  }
`;

const PokectList:NextPage = () => {
    const { id } = useParams();
    
    const { data , loading, error } = useQuery<PokectmonListType>(
            GET_POKETMON,{
                variables: {
                    poketId: id,
                },
            }
    );
    if (loading) {return <h2>Loading...</h2>}
    if (error) {return <h1>에러 발생</h1>}
    

    return (
        <PoketListWapper>
          <ImgWapper>
            { data?.front_default ? <Image height={200} width={`100%`} quality={100} alt={"포켓몬 캐릭터"} objectFit={'cover'} src={data?.front_default ?? ""} /> : <Hellow /> }
            { data?.back_default ? <Image height={200} width={`100%`} quality={100} alt={"포켓몬 캐릭터"} objectFit={'cover'} src={data?.back_default ?? ""} /> : <Hellow /> }

          </ImgWapper>
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

const ImgWapper = styled.div`

`;

const Hellow = styled.div`
    width: 250px;
    height: 200px;
    
    background-color: blue;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;


// export const getServerSideProps: GetServerSideProps = async contexts => {
//     try {
//       if (contexts?.params?.number) {
//         const id = Number(contexts.params.id);

//         const { data , loading, error } = useQuery<PokectmonListType>(
//             GET_POKETMON,{
//                 variables: {
//                     poketId: id,
//                 },
//             }
//     );
  
//         return {
//           props: {
//             id: contexts.params.id,
//           },
//         };
//       }
//     } catch (error) {
//       console.error('Error', error);
//     }
  
//     return {
//       props: {
//         id: 0,
//       },
//     };
//   };


export default PokectList;
