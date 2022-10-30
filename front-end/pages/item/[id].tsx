import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { getPoketmonType, PokectmonListType, PokectmontypeType } from '../../types';
import { useQuery } from '@apollo/client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { initPoketmonList, searchValueAtom } from '../../Util/recoil/state';
import { pokectName } from '../../metadata/pokectName';
import Image from "next/image";
import { PokemonTypesData } from '../../metadata/pokectType';
import { GET_POKETMON, GET_POKETMONS } from '../../gql';


const PokectDetail:NextPage<{data:PokectmonListType}> = ({data}) => {
    const Pokemontypes:PokectmontypeType[] = PokemonTypesData.filter((i) =>  i.usValue === data?.types[0] ||  i.usValue === data?.types[1]);    

    return (
        <PoketListWapper>
          <ImgWapper>
            { data?.front_default && <Image height={400} width={`48%%`} quality={100} alt={"포켓몬 캐릭터 앞모습"} objectFit={'cover'} src={data?.front_default ?? ""} />  }
            { data?.back_default && <Image height={400} width={`48%%`} quality={100} alt={"포켓몬 캐릭터 뒷모습"} objectFit={'cover'} src={data?.back_default ?? ""} />}
            {/* <Hellow/>
            <Hellow/> */}
          </ImgWapper>
          <ContentWapper>
            <Number>{`No.${data?.id}`}</Number>
            <Name>{data?.name}</Name>
            {/* <Number>No.1</Number>
            <Name>리자몽</Name> */}
            <TypesWapper>
             { Pokemontypes.map((i) => <TypesBox style={{backgroundColor:`${i.color}`}} >{i.value}</TypesBox> )}
                {/* <TypesBox>{"풀"}</TypesBox>
                <TypesBox>{"독"}</TypesBox> */}
             </TypesWapper>
          </ContentWapper>
        </PoketListWapper>
    )
}

export const getStaticPaths:GetStaticPaths = () => {
    const InitPoketmonList = useRecoilValue(initPoketmonList);

    const ids =  InitPoketmonList.map((poket) => {
      return { params: { id: poket.id.toString() } };
    });
    return {
      paths: ids,
      fallback: false,
    };
  }


export const getStaticProps:GetStaticProps = async(ctx) => {
        const id = ctx.params?.id;

        const { data:POKETMON , loading, error } = useQuery<PokectmonListType>(
            GET_POKETMON,{
                variables: {
                    poketId: id,
                },
            }
        );
        if (loading) {return <h2>Loading...</h2>}
        if (error) {return <h1>에러 발생</h1>}
  
        return {
          props: {
            data:POKETMON
          },
        };
};


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
