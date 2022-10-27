import { NextPage } from 'next';
import styled from "@emotion/styled";
import React, { useState } from "react"
import { useRecoilState } from 'recoil';
import { searchValueAtom } from '../../Util/recoil/state';



const InputBox:NextPage = () => {
    const [value , setValue] = useRecoilState(searchValueAtom);
    return (
        <InputBoxWapper>
            <InputWapper>
            <input  onChange={({target}) => setValue(target.value)} value={value}/>
            </InputWapper>
            <SubmitBtn>Search</SubmitBtn>
        </InputBoxWapper>
    )
}

const InputBoxWapper = styled.div`
    width: 500px;
    height: 100px;
    background-color: #FAEBD7;

    display: flex;
    align-items: center;
    margin: 0 auto;
    border: 1px solid black;
`;

const InputWapper = styled.div`
    width: 400px;
    height: 60%;

    display: flex;
    align-items: center;
    border: 1px solid black;

    input{
        width: 100%;
        height: 100%;
        font-size: 20px;
    }
`;

const SubmitBtn = styled.button`
    width: 100px;
    height: 60%;

    background-color: black;
    color: white;
`;



export default InputBox;
