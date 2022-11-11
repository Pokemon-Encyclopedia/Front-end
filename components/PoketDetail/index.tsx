import { NextPage } from 'next';
import styled from "@emotion/styled";
import { getPoketmonIdType, PokectmonListType, PokectmontypeType} from '../../types';
import Image from "next/image";
import { PokemonTypesData } from '../../metadata/pokectType';
import { pokectName } from '../../metadata/pokectName';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const PokectDetail:NextPage<{data:getPoketmonIdType , prevPokemon:PokectmonListType,  nextPokemon:PokectmonListType}> = ({data , prevPokemon , nextPokemon}) => {
    const router = useRouter();
    const handleClickCard = useCallback(
        (Ename: string) => {
          router.push(`${Ename}`);
        },
        [router],
    );
    let Pokemontypes;
    const PoketmonName = pokectName[ data?.pokemon.id ?? 0];
    data?.pokemon.types[1] ? (
        Pokemontypes = PokemonTypesData.filter((i) =>  i.usValue === data?.pokemon.types[0].type.name.toUpperCase() ||  i.usValue === data?.pokemon.types[1].type.name.toUpperCase())    
    ):(
        Pokemontypes = PokemonTypesData.filter((i) =>  i.usValue === data?.pokemon.types[0].type.name.toUpperCase())    
    )
    
    return (
        <>
            <BackBtn onClick={() => router.push('./')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </BackBtn>
            <PoketListWapper>
            
            <ImgWappers>
            { prevPokemon ? (
                <PreviewImgWapper>
                    <Image layout="fill" alt={"이전 포켓몬 캐릭터"} objectFit={'cover'} src={prevPokemon.image}  onClick={() => handleClickCard(prevPokemon.name)} />
                </PreviewImgWapper>
            ) : <PreviewImgWapper />
            }
            <MidelImgWapper>
                <ImgWapper><Image layout="fill" alt={"포켓몬 캐릭터 앞모습"} objectFit={'cover'} src={data?.pokemon.sprites.front_default ?? ""} /></ImgWapper>
                <ImgWapper><Image layout="fill" alt={"포켓몬 캐릭터 뒷모습"} objectFit={'cover'} src={data?.pokemon.sprites.back_default ?? ""} /></ImgWapper>
            </MidelImgWapper>
            { nextPokemon ? (
                <PreviewImgWapper>
                    <Image layout="fill" alt={"다음 포켓몬 캐릭터"} objectFit={'cover'} src={nextPokemon.image} onClick={() => handleClickCard(nextPokemon.name)}/>
                </PreviewImgWapper>
            ) : <PreviewImgWapper />
            }
            </ImgWappers>

            <ContentWapper>
                <Main>
                <Name>{PoketmonName}</Name>
                <Number>{`No.${data?.pokemon.id}`}</Number>
                </Main>

               <Detail>
                <TypesWapper>
                { Pokemontypes.map((i:PokectmontypeType , index:number) => <TypesBox key={index} style={{backgroundColor:`${i.color}`}} >{i.value}</TypesBox> )}
                </TypesWapper>

                <DetailBox>
                    <Height>{`키: ${data?.pokemon.height ? data?.pokemon.height/10 : "없음"}m`}</Height>
                    <Weight>{`몸무게 : ${data?.pokemon.weight ? data?.pokemon.weight/10 : "없음" }kg`}</Weight>
                </DetailBox>
               </Detail>
            </ContentWapper>
            </PoketListWapper>           
        </>
    )
}

const BackBtn = styled.div`
    position: fixed;
    width: 40px;
    height: 40px;
    color:black;
    border-radius: 10px;

    top: 20px;
    left: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        scale: calc(1.1);
    }
`;

const PoketListWapper = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

    @media (max-width: 768px) {
    width: 500px;
    height: 100%;
    }
    
`;
const ImgWappers = styled.div`
    width: 70%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
    width: 700px;
    }
`;

const PreviewImgWapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.5;

    img{
        cursor: pointer;
    }
`;


const MidelImgWapper = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    @media (max-width: 768px) {
    width: 400px;
    }
`;

const ImgWapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
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
const Main = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5px;
`;
const Number = styled.span`
    padding-bottom: 7px;
    font-size: 15px;
    color: gray;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;
const Name = styled.div`
    font-size: 40px;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 35px;
    }
`;
const TypesWapper = styled.div`
    width: 100%;
    height: 70px;

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
    @media (max-width: 768px) {
        width: 130px;
        height: 27px;
        font-size: 20px;
    }
`;
const Detail = styled.div`
    width: 500px;
    height: 400px;

`;
const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 80px;
    gap: 50px;

`;
const Height = styled.span`
    width: 50%;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;
const Weight = styled.span`
    font-size: 20px;
    width: 50%;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export default PokectDetail;
