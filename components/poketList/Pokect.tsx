import { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import { PokectmonListType } from '../../types';
import { useCallback } from 'react';

const Pokect:NextPage<PokectmonListType> = ({id, Kname, name, image}) => {
    const router = useRouter();
    const handleClickCard = useCallback(
        (Ename: string) => {
          router.push(`${Ename}`);
        },
        [router],
      );

    return (
         <PoketWapper onClick={() => handleClickCard(name)}>
            { image && <Image height={300} width={90} quality={100} alt={"포켓몬 캐릭터"} objectFit={'cover'} src={image} /> }
             <Number>{`No.${id}`}</Number>
             <Name>{Kname}</Name>
         </PoketWapper>
    )
}

const PoketWapper = styled.div`
    width: 270px;
    height: 350px;
    
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    padding: 10px 10px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        :hover {
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
            transition: 0.2s ease;
            transform: scale(1.02);
        }
    
    @media (max-width: 768px) {
    width: 210px;
    height: 280px;
    margin: 0 auto;
  }
`;

const Number = styled.p`
    width: 100%;
    height: 20px;
    
    font-size: 12px;
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
