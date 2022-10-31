import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from "@emotion/styled";
import { getPoketmonIdType, PokectmonListType, PokectmontypeType } from '../../types';
import { useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { initPoketmonList } from '../../Util/recoil/state';
import Image from "next/image";
import { PokemonTypesData } from '../../metadata/pokectType';
import { GET_POKETMON } from '../../gql';
import Layout from '../../components/Phead';
import { useParams } from "react-router-dom";
import { useRouter } from 'next/router';
import { pokectName } from '../../metadata/pokectName';



// const PokectDetail:NextPage<{data:PokectmonListType}> = ({data}) => {
const PokectDetail:NextPage = () => {
    const router = useRouter();
    console.log(router.query.id);
    
    
    const { data , loading, error } = useQuery<getPoketmonIdType>(
        GET_POKETMON,{
            variables: {
                poketId: router.query.id,
            },
        }
    );
    console.log(data);    
    
    if (loading) {return <h2>Loading...</h2>}
    if (error) {return <h1>에러 발생</h1>}


    const PoketmonName = pokectName[ data?.findPokemonById.id ?? 0] ;
    // const Pokemontypes:PokectmontypeType[] = PokemonTypesData.filter((i) =>  i.usValue === data?.types[0] ||  i.usValue === data?.types[1]);    

    return (
        <>
        <Layout seoTitle={"포켓몬 상세페이지"} />
            <PoketListWapper>
            <ImgWapper>
               <Image height={600} width={600} quality={100} alt={"포켓몬 캐릭터 앞모습"} objectFit={'cover'} src={data?.findPokemonById.front_default ?? ""} />  
                <Image height={600} width={600} quality={100} alt={"포켓몬 캐릭터 뒷모습"} objectFit={'cover'} src={data?.findPokemonById.back_default ?? ""} />
                {/* <Hellow/>
                <Hellow/> */}
            </ImgWapper>
            <ContentWapper>
                <Number>{`No.${data?.findPokemonById.id}`}</Number>
                <Name>{PoketmonName}</Name>
                {/* <Number>No.1</Number>
                <Name>리자몽</Name> */}
                <TypesWapper>

                {/* { Pokemontypes.map((i) => <TypesBox style={{backgroundColor:`${i.color}`}} >{i.value}</TypesBox> )} */}
                    {/* <TypesBox>{"풀"}</TypesBox>
                    <TypesBox>{"독"}</TypesBox> */}
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
    
`;
const ImgWapper = styled.div`
    width: 40%;
    height: 400px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Hellow = styled.div`
    width: 48%;
    height: 350px;
    
    background-color: blue;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;
const ContentWapper = styled.div`
    width: 40%;
    height: 400px;

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
