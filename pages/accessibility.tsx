import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';
import Published from 'components/published/published';
import { FunctionalComponent } from 'preact';

const links = [
    {
        "name": "W3C Markup Validation Service",
        "source": "https://validator.w3.org/"
    },
    {
        "name": "WAVE Web Accessibility Evaluation Tool",
        "source": "https://wave.webaim.org/"
    },
    {
        "name": "axe - Web Accessibility Testing Chrome extension",
        "source": "https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"
    },
    {
        "name": "GreenIT-Analysis - Web Accessibility Testing (Chrome extension)",
        "source": "https://chrome.google.com/webstore/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad?hl=en"
    },
    {
        "name": "Accessibility Insights (Chrome extension)",
        "source": "https://accessibilityinsights.io/en/"
    },
    {
        "name": "Color Contrast Accessibility Validator",
        "source": "https://color.a11y.com/"
    },
    {
        "name": "NoCoffee vision simulator (Firefox)",
        "source": "https://addons.mozilla.org/en-US/firefox/addon/nocoffee/"
    },
    {
        "name": "axe Accessibility Linter | Deque",
        "source": "https://www.deque.com/blog/shift-further-left-with-deques-axe-linter-for-vs-code/"
    },
    {
        "name": "Assistant RGAA | Chrome | French",
        "source": "https://chrome.google.com/webstore/detail/assistant-rgaa/cgpmofepeeiaaljkcclfldhaalfpcand/related?hl=fr"
    },
    {
        "name": "Assistant RGAA | Firefox | French",
        "source": "https://addons.mozilla.org/fr/firefox/addon/assistant-rgaa/"
    },
    {
        "name": "Siteimprove | Dutch | Requires email | Stores user data",
        "source": "https://siteimprove.com/"
    },
    {
        "name": "Tenon.io | Limited free service | Stores user data",
        "source": "https://tenon.io/"
    },
    {
        "name": "Accessibility Checker (multiple pages) | EXPERTE.com",
        "source": "https://www.experte.com/accessibility"
    },
    {
        "name": "Lighthouse",
        "source": "https://developers.google.com/web/tools/lighthouse"
    },
    {
        "name": "AccessLint | GitHub App",
        "source": "https://accesslint.com/"
    },
    {
        "name": "Accessibility for Teams | US Govt.",
        "source": "https://accessibility.digital.gov/"
    },
    {
        "name": "Accessibility | React",
        "source": "https://reactjs.org/docs/accessibility.html"
    },
    {
        "name": "Reach UI | React-based design",
        "source": "https://reach.tech/"
    },
];

const Accessibility: FunctionalComponent = () => {

    return (
        <Layout header="Accessibility" title="Web accessibility" description={'Web accessibility'}>
            <section>

                <h2>Tools</h2>
                <Links.ExternalLinksList links={links} />                
                <p>
                    <h2>Colour contrast</h2>
                    Not everyone has perfect eyesight, especially in poor light. Poor contrast can be tested, together with other accessibility issues, using the web accessibility evaluation tool, <Links.EL link={{source:'https://wave.webaim.org/'}}>WAVE</Links.EL>, or by inspecting an element using browser tools.
                    <p>A summary of WAVE's <Links.EL link={{source:'https://webaim.org/resources/contrastchecker/explanation'}}>of the WCAG</Links.EL> (Web Content Accessibility Guidelines):</p>
                    <dl class={styles.dataTable}>
                        <dt><strong>WCAG Level AAA</strong></dt><dd>A contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.</dd>
                        <dt><strong>WCAG 2.0 level AA</strong></dt><dd>A contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.</dd>
                        <dt><strong>WCAG 2.1</strong></dt><dd>A contrast ratio of at least 3:1 for graphics and user interface components.</dd>
                    </dl>
                </p>
                <h3>Practice</h3>
                <p>I use Deque's <Links.EL link={{source:"https://www.deque.com/blog/shift-further-left-with-deques-axe-linter-for-vs-code/"}}>axe linter</Links.EL>  to catch mistakes as I make them. It is available as a VS Code extension and checks React (or Preact), Vue, HTML, and Markdown files. Support for more frameworks is being considered.</p>
                <p><Links.EL link={{source:"https://developers.google.com/web/tools/lighthouse"}}>Lighthouse</Links.EL> can be run in a number of environments. The accessibility score is unaffected by other activity so it is not necessary to run it in incognito mode.</p>
                <p>If you want to check accessibility across your site, I recommend EXPERTE.com's <Links.EL link={{source:"https://www.experte.com/accessibility"}}>accessibility checker</Links.EL>. It is based on Lighthouse but will crawl up to a maximum of 500 pages. It is ideal for a small site, such as this one, made up of HTML pages created   by a static site generator (Next.js).</p>
            </section>
            <Published strDate='Thu 10 Feb 2021' edited={[{strDate:'Fri 19 March 2021'},{strDate:'Fri 25 February 2022'}]}></Published>
            <Links.RelatedLinks links={[{value:'architecture',text:'Architecture'},{value:'performance',text:'Performance'},{value:'sustainability',text:'Sustainability'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Accessibility;