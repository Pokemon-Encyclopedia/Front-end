import { NextPage } from 'next';
import { getPoketmonIdType } from '../types';
import { useQuery } from '@apollo/client';
import { getPokemon } from '../gql';
import Layout from '../components/Phead';
import { useRouter } from 'next/router';
import PokectDetail from '../components/PoketDetail';
import Loading from '../components/loading';
import { pokectName } from '../metadata/pokectName';

const PokectDetailPage:NextPage = () => {
    const router = useRouter();
    const { data , loading } = useQuery<getPoketmonIdType>(
        getPokemon,{
            variables: {
                name: router.query.name,
            },
        }
    );
    const PoketmonName = pokectName[ data?.pokemon.id ?? 0];


    if (loading) {return <Loading />}
    return (
        <>
        <Layout seoTitle={"상세페이지"} />
            <PokectDetail data={data} />
        </>
    )
}

export default PokectDetailPage;
