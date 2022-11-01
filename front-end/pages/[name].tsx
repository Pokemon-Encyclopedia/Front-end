import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from "@emotion/styled";
import { getPoketmonIdType, PokectmonListType, PokectmontypeType, PoketmonType } from '../types';
import { useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { initPoketmonList } from '../Util/recoil/state';
import Image from "next/image";
import { PokemonTypesData } from '../metadata/pokectType';
import { getPokemon } from '../gql';
import Layout from '../components/Phead';
import { useParams } from "react-router-dom";
import { useRouter } from 'next/router';
import { pokectName } from '../metadata/pokectName';



// const PokectDetail:NextPage<{data:PokectmonListType}> = ({data}) => {
const PokectDetail:NextPage = () => {
    const router = useRouter();
    console.log(router.query.name);
    
    
    const { data , loading, error } = useQuery<getPoketmonIdType>(
        getPokemon,{
            variables: {
                name: router.query.name,
            },
        }
    );    
    if (loading) {return <h2>Loading...</h2>}
    if (error) {return <h1>에러 발생</h1>}

    

    const PoketmonName = pokectName[ data?.pokemon.id ?? 0] ;

    const Pokemontypes:any = PokemonTypesData.filter((i) =>  i.usValue === data?.pokemon.types[0].type.name.toUpperCase() ||  i.usValue === data?.pokemon.types[1] ? data?.pokemon.types[1].type.name.toUpperCase() : "")
    console.log(Pokemontypes);
    
        
    return (
        <>
        <Layout seoTitle={"포켓몬 상세페이지"} />
            <PoketListWapper>
            <ImgWapper>
               <Image height={300} width={300} quality={100} alt={"포켓몬 캐릭터 앞모습"} objectFit={'cover'} src={data?.pokemon.sprites.front_default ?? ""} />  
                <Image height={300} width={300} quality={100} alt={"포켓몬 캐릭터 뒷모습"} objectFit={'cover'} src={data?.pokemon.sprites.back_default ?? ""} />
            </ImgWapper>
            <ContentWapper>
                <Number>{`No.${data?.pokemon.id}`}</Number>
                <Name>{PoketmonName}</Name>
                <TypesWapper>
                { Pokemontypes.map((i:PokectmontypeType , index:number) => <TypesBox key={index} style={{backgroundColor:`${i.color}`}} >{i.value}</TypesBox> )}
                </TypesWapper>
            </ContentWapper>
            </PoketListWapper>
        </>
    )
}

// export const getStaticPaths:GetStaticPaths = () => {
//     // const InitPoketmonList = useRecoilValue(initPoketmonList);
//     // const ids =  InitPoketmonList.map((poket) => {
//     //   return { params: { id: poket.id.toString() } };
//     // });
//     return {
//         paths: [],
//         fallback: "blocking",
//     };
//   }


// export const getStaticProps:GetStaticProps = async(ctx) => {
//     if (!ctx?.params?.id) {
//         return {
//         props: {},
//         };
//     }
//     const { data:POKETMON , loading, error } = useQuery<PokectmonListType>(
//         GET_POKETMON,{
//             variables: {
//                 poketId: ctx.params?.id,
//             },
//         }
//     );
//     if (loading) {return <h2>Loading...</h2>}
//     if (error) {return <h1>에러 발생</h1>}

//     return {
//         props: {
//         data:POKETMON
//         },
//     };
// };


const PoketListWapper = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    
`;
const ImgWapper = styled.div`
    width: 40%;
    height: 250px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ContentWapper = styled.div`
    width: 100%;
    height: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 40px;
    padding-bottom: 60px;
    background-color: white;
`;
const Number = styled.span`
    font-size: 20px;
    color: gray;
`;
const Name = styled.div`
    font-size: 40px;
    font-weight: bold;
`;

const TypesWapper = styled.div`
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: center;
`;

const TypesBox = styled.div`
    width: 170px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 0 5px;
    background-color: green;
    border-radius: 5px;
    color: white;
    font-size: 25px;
    
`;

export default PokectDetail;
