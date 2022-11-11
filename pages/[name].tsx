import { NextPage } from 'next';
import { getPoketmonIdType, PokectmonListType } from '../types';
import { useQuery } from '@apollo/client';
import { getPokemon } from '../gql';
import Layout from '../components/Phead';
import { useRouter } from 'next/router';
import PokectDetail from '../components/PoketDetail';
import Loading from '../components/loading';
import { pokectName } from '../metadata/pokectName';
import { useRecoilState } from 'recoil';
import { MainPoketmonList } from '../Util/recoil/state';

const PokectDetailPage:NextPage = () => {
    const router = useRouter();
    const QueryName = router.query.name;
    const [ MainPokemonList , ] = useRecoilState<PokectmonListType[]>(MainPoketmonList);
    const { data , loading } = useQuery<getPoketmonIdType>(
        getPokemon,{
            variables: {
                name: QueryName,
            },
        }
    );
    if (loading) {return <Loading />}
    const { id } = MainPokemonList.find(ary => ary.name === QueryName)         

    return (
        <>
        <Layout seoTitle={"상세페이지"} />
            <PokectDetail data={data} prevPokemon={MainPokemonList[id-2]} nextPokemon={MainPokemonList[id]} />
        </>
    )
}

export default PokectDetailPage;
