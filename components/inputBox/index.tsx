import { NextPage } from 'next';
import styled from "@emotion/styled";
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
    width: 100%;
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
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
     input{
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
        width: 80%;
        font-size: 14px;
    }
    }
`;

export default InputBox;
