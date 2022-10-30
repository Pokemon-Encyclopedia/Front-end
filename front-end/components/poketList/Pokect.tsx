import { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import { PokectmonListType, PokectmontypeType } from '../../types';
import { PokemonTypesData } from '../../metadata/pokectType';
import { useCallback } from 'react';

const Pokect:NextPage<PokectmonListType> = ({id, name, front_default ,types}) => {
    const router = useRouter();

    const handleClickCard = useCallback(
        (id: number) => {
          router.push(`item/${id}`);
        },
        [router],
      );

    const Pokemontypes:PokectmontypeType[] = PokemonTypesData.filter((i) =>  i.usValue === types[0] ||  i.usValue === types[1]);    

    return (
         <PoketWapper onClick={() => handleClickCard(id)}>
            <Hellow /> 
            { front_default && <Image height={200} width={`100%`} quality={100} alt={"포켓몬 캐릭터"} objectFit={'cover'} src={front_default} /> }
             <Number>{`No.${id}`}</Number>
             <Name>{name}</Name>
             <TypesWapper>
             { Pokemontypes.map((i) => <TypesBox style={{backgroundColor:`${i.color}`}} >{i.value}</TypesBox>) }
             </TypesWapper>
         </PoketWapper>
    )
}

const Hellow = styled.div`
    width: 250px;
    height: 200px;
    
    background-color: blue;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const PoketWapper = styled.div`
    width: 270px;
    height: 320px;
    
    display: flex;
    flex-direction: column;
    
    padding: 10px 10px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`;

const Number = styled.p`
    width: 100%;
    height: 20px;
    
    font-size: 10px;
    color: darkgray;
`;
const Name = styled.div`
    width: 100%;
    height: 50px;
    
    font-size: 20px;
    font-weight: bold;
`;

const TypesWapper = styled.div`
    width: 100%;
    height: 30px;

    display: flex;
`;

const TypesBox = styled.div`
    width: 50%;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 0 5px;
    background-color: green;
    border-radius: 5px;
    color: white;
    
`;


export default Pokect;
