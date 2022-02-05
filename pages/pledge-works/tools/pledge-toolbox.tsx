import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';

const PledgeToolbox = () => {
    return (
        <Layout header="Pledge toolbox" rt="4 to 5" title="Pledge toolbox" description={'Pledge toolbox.'} discussions='/categories/pledge-works'> {/* image? */}            
            <section>
                <h2>Ho hum.</h2>
                <Top></Top>
            </section>
            <Appendix></Appendix>
        </Layout>
    )
};

export default PledgeToolbox;