import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';

const references = [
    {
        name: "IPCC SPECIAL REPORT: GLOBAL WARMING OF 1.5ºC",
        source: "https://www.ipcc.ch/sr15/chapter/spm/"
    },
];

const NCSPartOne = () => {
    return (
        <Layout header="Natural climate solutions I" title="natural-climate-solutions-part-one" description={'Trees'}>
            <section>
                <h2>How far can we rely on trees to remove the excess carbon dioxide we are emitting?</h2>
                <p></p>
            </section>
            <section>   
                <h2>References</h2>
                <Links.ExternalLinksList links={references} />
            </section>
            <Links.RelatedLinks links={[{value:'climate-crisis/carbon-capture-and-storage-in-trees-part-two',text:'Carbon capture and storage in trees - part II'},{value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}, {value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default NCSPartOne;