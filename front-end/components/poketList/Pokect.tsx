import { NextPage } from 'next';
import Image from "next/image";

import styled from "@emotion/styled";
import { PokectmonListType } from '../../types';

const Pokect:NextPage<PokectmonListType> = ({id, name, front_default ,types}) => {
    return (
         <PoketWapper>
            { front_default ? <Image height={200} width={`100%`} quality={100} alt={"포켓몬 캐릭"} objectFit={'cover'} src={front_default} /> : <Hellow /> }
             <Number>{`No.${id}`}</Number>
             <Name>{name}</Name>
             <TypesWapper>
                <TypesBox>{"water"}</TypesBox>
                {/* <TypesBox>{types[0]}</TypesBox> */}
                {/* {types[2] && <TypesBox>{types[1]}</TypesBox>} */}
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
    
    background-color: green;
    border-radius: 5px;
    color: white;
    
`;


export default Pokect;
