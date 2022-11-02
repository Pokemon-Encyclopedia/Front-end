import { NextPage } from 'next';
import styled from "@emotion/styled";
import Pokect from './Pokect';
import { PokectmonListType } from '../../types';
import { useRecoilState } from 'recoil';
import { searchValueAtom } from '../../Util/recoil/state';
import { pokectName } from '../../metadata/pokectName';

const PokectList:NextPage<{data: PokectmonListType[] | undefined}> = ({data}) => {
    const searchValue = useRecoilState(searchValueAtom);
    
    const AddKoreanNameList = data?.map((i) => ({...i , pokectmonName : pokectName[i.id]} ))  
    const filterPoketList = AddKoreanNameList?.filter((data) => data.pokectmonName.includes(searchValue[0].toLocaleString()))


    return (
        <PoketListWapper>
         {AddKoreanNameList && filterPoketList && searchValue ? filterPoketList?.map(i => (
          <Pokect key={i.id} id={i.id} Kname={i.pokectmonName} name={i.name} image={i.image}  />
        )) : AddKoreanNameList?.map(i => (
            <Pokect key={i.id} id={i.id} Kname={i.pokectmonName} name={i.name} image={i.image}
            />
          ))}
        </PoketListWapper>
    )
}

const PoketListWapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 27px 30px 3.2vw;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    @media (max-width: 768px) {
    width: 500px;
    padding: 10px;
    margin: 0 auto;
  }
`;

export default PokectList;
