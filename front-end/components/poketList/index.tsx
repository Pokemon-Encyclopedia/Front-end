import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import React, { useState } from "react"
import { PokectmonListType } from '../../types';

// const [pokectmonData , setPokectmonData ] = useState<PokectmonListType[]>([]);

const PokectList:NextPage = () => {
    return (
        <PoketListWapper>
        {/* {pokectmonData?.map(i => (
          <Pokect key={i.id} id={i.id} name={i.name} front_default={i.front_default} types={i.types} />
        ))} */}
        <Pokect key={1} id={1} name={"이상해씨"} front_default={""} types={["풀","2풀"]} />
        </PoketListWapper>
    )
}

const PoketListWapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 50px;
    background-color: #FAEBD7;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;



export default PokectList;
