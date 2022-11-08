import { NextPage } from 'next';
import styled from "@emotion/styled";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PokeListSortAtom, searchValueAtom } from '../../Util/recoil/state';

const InputBox:NextPage = () => {
    const [value , setValue] = useRecoilState(searchValueAtom);
    const setSortValue = useSetRecoilState(PokeListSortAtom);

    return (
        <InputBoxWapper>
            <InputWapper>
            <input placeholder='포켓몬이름을 입력하세요'  onChange={(e) =>  setValue(e.target.value)} value={value}/>
            <XBtn onClick={() => setValue("")} style={{visibility:`${value ? "visible" : "hidden"}`}}>❌</XBtn>
            </InputWapper>

            <PokemonSelect onChange={(e) => setSortValue(e.target.value)}>
                <option value={"도감번호 순서"}>도감번호 순서</option>
                <option value={"도감번호반대순서"}>도감번호 반대 순서</option>
                <option value={"키큰순서"}>키큰 순서</option>
                <option value={"키작은순서"}>키작은 순서</option>
                <option value={"무거운순서"}>무거운 순서</option>
                <option value={"가벼운순서"}>가벼운 순서</option>
                <option value={"가나다순"}>가나다순</option>
                <option value={"가나다역순"}>가나다역순</option>
            </PokemonSelect>
        </InputBoxWapper>
    )
}

const PokemonSelect = styled.select`
     width: 350px;
     height: 50%;

    cursor: pointer;
    border: none;
    outline:none;
    font-size: 15px;
    font-family: S-CoreDream-3Light;
    padding-left: 20px;
    border-radius: 10px;
    background-color: white;
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
