import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/ethics/pledge-works/appendix';

import styles from 'pages/pages.module.scss';

const BDD = () => {

    const externalLinks = [
        {
            "name": "Expanding the ‘3 Lenses’: beyond viability, feasibility & desirability",
            "source": "https://uxdesign.cc/expanding-the-three-lenses-the-case-for-innovation-frameworks-that-look-beyond-viability-12701e2c234a"
        },
    ];

    return (
        <>
            <Layout header="BDD"  rt="4 to 5" title="BDD" description={'BDD'} discussions='/categories/pledge-works'> {/* image? */}
                <section></section>
                <section>
                    <h2>External Links</h2>
                    <Links.ExternalLinksList links={externalLinks} />
                </section>
            </Layout>
        </>
    )
};

export default BDD;