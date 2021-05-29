import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';

const Trees2 = () => {

    const references = [
        {
            name: "The Conversation | There aren’t enough trees in the world | Bonnie Waring",
            source: "https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181"
        }
    ];

    return (
        <Layout header="Carbon capture and storage in trees - part II" title="carbon-capture-and-storage-in-trees-part-two" description={'Trees'}>

        <section>

            <h2></h2>

            <h3>What does our average tree look like?</h3>

            <p>UK forest carbon.</p>

            <dl>
                <dt><strong>Leaves, branches, trunk</strong></dt><dd>17%</dd>
                <dt><strong>Surface litter</strong></dt><dd>5%</dd>
                <dt><strong>Dead wood</strong></dt><dd><1%</dd>
                <dt><strong>Roots</strong></dt><dd>6%</dd>
                <dt><strong>Soil</strong></dt><dd>72%</dd>
                <dt>Source</dt><dd><Links.EL link={{ source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>What role can forests play in tackling climate change?</Links.EL> (PDF)</dd>
            </dl>

        </section>

        </Layout>

    )

};

export default Trees2