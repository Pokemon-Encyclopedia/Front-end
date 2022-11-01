import { NextPage } from 'next';
import { getPoketmonIdType } from '../types';
import { useQuery } from '@apollo/client';
import { getPokemon } from '../gql';
import Layout from '../components/Phead';
import { useRouter } from 'next/router';
import PokectDetail from '../components/PoketDetail';
import Loading from '../components/loading';

// const PokectDetail:NextPage<{data:PokectmonListType}> = ({data}) => {
const PokectDetailPage:NextPage = () => {
    const router = useRouter();
    const { data , loading } = useQuery<getPoketmonIdType>(
        getPokemon,{
            variables: {
                name: router.query.name,
            },
        }
    );
    if (loading) {return <Loading />}
    return (
        <>
        <Layout seoTitle={"포켓몬 상세페이지"} />
            <PokectDetail data={data} />
        </>
    )
}
// export const getStaticPaths:GetStaticPaths = () => {
//     // const InitPoketmonList = useRecoilValue(initPoketmonList);
//     // const ids =  InitPoketmonList.map((poket) => {
//     //   return { params: { id: poket.id.toString() } };
//     // });
//     return {
//         paths: [],
//         fallback: "blocking",
//     };
//   }


// export const getStaticProps:GetStaticProps = async(ctx) => {
//     if (!ctx?.params?.id) {
//         return {
//         props: {},
//         };
//     }
//     const { data:POKETMON , loading, error } = useQuery<PokectmonListType>(
//         GET_POKETMON,{
//             variables: {
//                 poketId: ctx.params?.id,
//             },
//         }
//     );
//     if (loading) {return <h2>Loading...</h2>}
//     if (error) {return <h1>에러 발생</h1>}

//     return {
//         props: {
//         data:POKETMON
//         },
//     };
// };

export default PokectDetailPage;
