/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import Image from "next/image";
import styled from "@emotion/styled";

const Loading: NextPage = () => {  

  return (
    <>
       <ImgWapper>
            <Image width={100} height={100} src={'/pokemonrun.gif'}  />
       </ImgWapper>
    </>
  )
}

const ImgWapper = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Loading
