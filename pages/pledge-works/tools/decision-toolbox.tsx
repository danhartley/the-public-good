import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';

const DecisionToolbox = () => {
    return (
        <Layout header="Decision toolbox" rt="4 to 5" title="Decision toolbox" description={'Decision toolbox.'} discussions='/categories/pledge-works'> {/* image? */}            
            <section>
                <h2>Tools for making decisions.</h2>
                <h3>The decision matrix</h3>
                <p>What it is and how to use it.</p>
                <h3>The pledge checklist</h3>
                <p>What it is and how to use it.</p>
                <Top></Top>
            </section>
            <Appendix></Appendix>
        </Layout>            

    )
};

export default DecisionToolbox;