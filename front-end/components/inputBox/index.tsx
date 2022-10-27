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
            <input placeholder='검색할 포켓몬이름을 입력해주세요'  onChange={({target}) => setValue(target.value)} value={value}/>
            </InputWapper>
            <SubmitBtn>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </SubmitBtn>
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
    border: 1px solid black;

    input{
        width: 100%;
        height: 100%;
        font-size: 20px;
        font-family: EarlyFontDiary;
        outline: none;
    }
`;

const SubmitBtn = styled.button`
    width: 50px;
    height: 50%;

    font-family: EarlyFontDiary;
    background-color: black;
    color: white;
`;



export default InputBox;
