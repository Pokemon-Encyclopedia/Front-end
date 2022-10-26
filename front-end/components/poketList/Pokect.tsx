import { NextPage } from 'next';

import styled from "@emotion/styled";
import { Pokectmon } from '../../types';

const Pokect:NextPage<Pokectmon> = ({id, name, url}) => {
    return (
         <PoketWapper>
             <Title>
             </Title>
         </PoketWapper>
    )
} 

const PoketWapper = styled.div`
    width: 40px;
    height: 100px;
`;

const Title = styled.div`
    font-size: 20px;
`;


export default Pokect;
