import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useRecoilState } from 'recoil';
import { searchValueAtom } from '../../Util/recoil/state';
import { useCallback, useState } from 'react';

const InputBox:NextPage = () => {
    const [value , setValue] = useRecoilState(searchValueAtom);
    const [selectValue , SetSelectValue] = useState("");

    const onChange = useCallback((e:any) => {
        setValue(e.target.value)
    },[setValue]) 

    console.log(selectValue);
    return (
        <InputBoxWapper>
            <InputWapper>
            <input placeholder='포켓몬이름을 입력하세요'  onChange={onChange} value={value}/>
            <XBtn onClick={() => setValue("")} style={{visibility:`${value ? "visible" : "hidden"}`}}>❌</XBtn>
            </InputWapper>

            <PokemonSelect onChange={(e) => SetSelectValue(e.target.value)}>
                <option value={0}>도감번호 순서</option>
                <option value={"도감번호반대순서"}>도감번호 반대 순서</option>
                <option value={"키큰순서"}>키큰 순서</option>
                <option value={"키작은순서"}>키작은 순서</option>
                <option value={"무거운순서"}>무거운 순서</option>
                <option value={"가벼운순서"}>가벼운 순서</option>
            </PokemonSelect>
        </InputBoxWapper>
    )
}

const PokemonSelect = styled.select`

`;

const InputBoxWapper = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 200px;
`;

const InputWapper = styled.div`
    width: 430px;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
     input{
        padding-left: 15px;
        width: 90%;
        height: 70%;
        font-size: 20px;
        outline: none;
        border: none;
    }
    @media (max-width: 768px) {
    width: 270px;
    height: 40%;
    input{
        padding-left: 5px;
        width: 80%;
        font-size: 14px;
    }
    }
`;

const XBtn = styled.button`
    height: 70%;
    border: none;
    background-color: transparent;
    font-size: 16px;
    outline: none;
    color: gray;
    display: flex;
    cursor: pointer;
`;

export default InputBox;
