import { NextPage } from 'next';
import styled from "@emotion/styled";
import { getPoketmonIdType, PokectmontypeType} from '../../types';
import Image from "next/image";
import { PokemonTypesData } from '../../metadata/pokectType';
import { pokectName } from '../../metadata/pokectName';

const PokectDetail:NextPage<{data:getPoketmonIdType}> = ({data}) => {
    let Pokemontypes;
    const PoketmonName = pokectName[ data?.pokemon.id ?? 0];
    if(data?.pokemon.types[1]){
        Pokemontypes = PokemonTypesData.filter((i) =>  i.usValue === data?.pokemon.types[0].type.name.toUpperCase() ||  i.usValue === data?.pokemon.types[1].type.name.toUpperCase())    
    }else{
        Pokemontypes = PokemonTypesData.filter((i) =>  i.usValue === data?.pokemon.types[0].type.name.toUpperCase())    
    }
    return (
        <>
            <PoketListWapper>
            <ImgWappers>
            <ImgWapper>
               <Image quality={100} layout="fill" alt={"포켓몬 캐릭터 앞모습"} objectFit={'cover'} src={data?.pokemon.sprites.front_default ?? ""} />  
            </ImgWapper>
            <ImgWapper>
                <Image quality={100} layout="fill" alt={"포켓몬 캐릭터 뒷모습"} objectFit={'cover'} src={data?.pokemon.sprites.back_default ?? ""} />
            </ImgWapper>
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
                    <Order>{`나이 : ${data?.pokemon.order}살`}</Order>
                </DetailBox>
               </Detail>
            </ContentWapper>
            </PoketListWapper>           
        </>
    )
}

const PoketListWapper = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    
`;
const ImgWappers = styled.div`
    width: 25%;
    height: 330px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;
const Name = styled.div`
    font-size: 40px;
    font-weight: bold;
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
`;
const Weight = styled.span`
    font-size: 20px;
    width: 50%;
`;
const Order = styled.span`
    font-size: 20px;
    width: 50%;
`;

export default PokectDetail;
