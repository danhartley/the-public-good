import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const links = [
    {
        "name": "WAVE Web Accessibility Evaluation Tool",
        "source": "https://wave.webaim.org/"
    },
    {
        "name": "axe - Web Accessibility Testing Chrome extension",
        "source": "https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"
    },
    {
        "name": "GreenIT-Analysis - Web Accessibility Testing Chrome extension",
        "source": "https://chrome.google.com/webstore/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad?hl=en"
    },
    {
        "name": "Color Contrast Accessibility Validator",
        "source": "https://color.a11y.com/"
    },
];

const Accessibility = () => {
    return (
        <Layout header="Accessibility" title="Web accessibility" description={'Web accessibility'}>
            <section class={styles.card}>

                <h2>Tools</h2>
                <Links.ExternalLinksList links={links} />
            
                <p>
                    <h2>Colour contrast</h2>
                    Not everyone has perfect eyesight, especially in poor light. Poor contrast can be tested, together with other accessibility issues, using the web accessibility evaluation tool, <a href="https://wave.webaim.org/">WAVE</a>, or by inspecting an element using browser tools.
                    <p>A summary of WAVE's <a href="https://webaim.org/resources/contrastchecker/">explanation of the WCAG</a> (Web Content Accessibility Guidelines):</p>
                    <dl class={styles.dataTable}>
                        <dt>WCAG Level AAA</dt><dd>A contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.</dd>
                        <dt>WCAG 2.0 level AA</dt><dd>A contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.</dd>
                        <dt>WCAG 2.1</dt><dd>A contrast ratio of at least 3:1 for graphics and user interface components.</dd>
                    </dl>
                </p>
                <p><span class={styles.published}>Last updated: {new Date('Fri 19 March 2021').toDateString()}</span></p>
            </section>
            <Links.RelatedLinks links={[{value:'architecture',text:'Architecture'},{value:'performance',text:'Performance'},{value:'sustainability',text:'Sustainability'},{value:'performance',text:'Performance'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Accessibility;