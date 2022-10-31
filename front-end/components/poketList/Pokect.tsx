import { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import { PokectmonListType } from '../../types';
import { useCallback } from 'react';

const Pokect:NextPage<PokectmonListType> = ({id, name, image}) => {
    const router = useRouter();

    const handleClickCard = useCallback(
        (id: number) => {
          router.push(`item/${id}`);
        },
        [router],
      );

    return (
         <PoketWapper onClick={() => handleClickCard(id)}>
            { image && <Image height={200} width={`100%`} quality={100} alt={"포켓몬 캐릭터"} objectFit={'cover'} src={image} /> }
             <Number>{`No.${id}`}</Number>
             <Name>{name}</Name>
         </PoketWapper>
    )
}

const PoketWapper = styled.div`
    width: 270px;
    height: 300px;
    
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
    
    display: flex;
    align-items: center;
    
    font-weight: bold;
    font-size: 22px;
`;

export default Pokect;
