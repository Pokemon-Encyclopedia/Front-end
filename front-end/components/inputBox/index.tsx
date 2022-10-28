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
            <input placeholder='포켓몬이름을 입력하세요'  onChange={({target}) => setValue(target.value)} value={value}/>
            </InputWapper>
        </InputBoxWapper>
    )
}

const InputBoxWapper = styled.div`
    width: 500px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const InputWapper = styled.div`
    width: 430px;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: EarlyFontDiary;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    input{
        width: 90%;
        height: 70%;
        font-size: 20px;
        outline: none;
        border: none;
    }
`;

// const SubmitBtn = styled.button`
//     width: 50px;
//     height: 50%;

//     font-family: EarlyFontDiary;
//     background-color: black;
//     color: white;
//     border-top-right-radius: 10px;
//     border-bottom-right-radius: 10px;
// `;

export default InputBox;
