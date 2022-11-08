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
                <option value={"도감번호순서"}>도감번호 순서</option>
                <option value={"도감번호반대순서"}>도감번호 반대 순서</option>
                <option value={"가나다순서"}>가나다 순서</option>
                <option value={"가나다역순서"}>가나다 역순서</option>
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
    border-radius: 8px;
    background-color: white;

    -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }

    :focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
    }

    :disabled {
    opacity: 0.5;
    }

    @media (max-width: 768px) {
    width: 200px;
    height: 30%;
    font-size: 12px;
    }
`;

const InputBoxWapper = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 200px;

    @media (max-width: 768px) {
    height: 130px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;

    gap: 20px;
}


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
