// import { useRouter } from 'next/router';

// import intros from 'pages/intros/intros.json';

// import Link from 'next/link';
// import Layout from 'components/layout/layout';

// import styles from 'pages/intros/Intro.module.scss';

// const Intro = ({intro}) => {

//     const router = useRouter();

//     const query = router.query;

//     return (
//         <Layout title="Intro" description={`${intro}`} header={intro}>            
//             <div class={styles.grid}>intro stuff…</div>            
//         </Layout>
//     )
// };

// export default Intro;

// export const getStaticProps = async ({params}) => {
//     return {
//         props: {
//             intro: params.intro
//         }
//     }
// };

// export const getStaticPaths = async () => {
    
//     const paths = intros.list.map(intro => `/intros/${intro.slug}`);

//     return {
//         paths,
//         fallback: false
//     };
// };