import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';

const ChallengeToolbox = () => {
    return (
        <Layout header="Challenge toolbox" rt="4 to 5" title="Challenge toolbox" description={'Challenge toolbox.'} discussions='/categories/pledge-works'> {/* image? */}            
            <section>
                <Top></Top>                
            </section>
            <Appendix></Appendix>
        </Layout>            

    )
};

export default ChallengeToolbox;