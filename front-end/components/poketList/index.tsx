import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { useState } from 'react';
import { Pokectmon } from '../../types';

const [pokectmonData , setPokectmonData ] = useState<Pokectmon[]>();

const PokectList:NextPage = () => {
    return (
         <PoketListWapper>
             {pokectmonData?.map(i => (
          <Pokect key={i.id} id={i.id} name={i.name} url={i.url} />
        ))}
         </PoketListWapper>
    )
} 

const PoketListWapper = styled.div`
    height: 100%;
    width: 100%;
`;



export default PokectList;
