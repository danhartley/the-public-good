import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';

const BetterOutcomes = () => {
    return (
        <>
            <Layout header="Better outcomes"  rt="4 to 5" title="Better outcomes" description={'Better outcomes: What they are and how to get them.'} discussions='/categories/pledge-works'> {/* image? */}
                <section>
                    <h2>Simply better.</h2>
                    <p>Pldege Works encourages an ethical approach to product design and development. It takes effort to examine a problem from an ethical perspective. Discovering hidden consequences takes time and thought. There are two broad benefits.</p>
                    <p>Avoiding doing harm.</p>
                    <p>Making a better product.</p>
                    <h3>Accessibility</h3>
                    <p></p>
                    <Top></Top>
                </section> 
                <Appendix></Appendix>
                <Links.RelatedLinks links={[{value:'pledge-works/introduction',text:'Introduction to Pledge Works'}, {value:'pledge-works/inventory', text:'Pledge Works Inventory'}]}></Links.RelatedLinks>
            </Layout>           
        </>
    );
};

export default BetterOutcomes;