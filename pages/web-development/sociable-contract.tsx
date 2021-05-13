import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const Contract = () => {

    const externalLinks = [
        {
            "name": "Smashing Magazine | Using Ethics In Web Design 2018",
            "source": "https://www.smashingmagazine.com/2018/03/using-ethics-in-web-design/"
        },
        {
            "name": "European Digital Rights (EDRi) | EthicalWebDev – guide for ethical website development and maintenance (PDF)",
            "source": "https://edri.org/wp-content/uploads/2020/11/ethical_web_dev_web.pdf"
        },
        {
            "name": "PRISM BREAK",
            "source": "https://prism-break.org/en/"
        },
    ]

    return (
        <Layout header="The sociable contract" title="Web development | the sociable contract" description={'Where Daniel Hartley introduces the sociable contract; a set of promises intended to keep this site user-friendly.'}>
            
            <section class={styles.card}>

            <p>Where I introduce the sociable contract; a set of promises intended to keep this site user-friendly.</p>

            <h2>Between The Public Good & the Public</h2>
            <p>

                        <h3>Terms</h3>

                        <ul class={styles.dashedItemsList}>
                            <li>
                            <span>The site will satisfy Web Content Accessibility Guidelines <a href="https://webaim.org/resources/contrastchecker/">WCAG Level AAA</a> in light mode; WCAG Level AA in datk more, Level AA for larger text.</span>
                            <div class={styles.italic}><a href="https://wave.webaim.org/report#/https://www.the-public-good.com/">Check</a> if this is true.</div>
                            </li>
                            <li>
                            The site will score at least 95% for Performance, Accessibility, Best Practices and SEO on <a href="https://developers.google.com/web/tools/lighthouse">Lighthouse</a>, on both Desktop and Mobile.
                            <div class={styles.italic}>Find out how to use <Links.InternalLink link={{'value': 'performance#howTo', 'text': 'Lighthouse'}}></Links.InternalLink> to check these scores.</div>
                            </li>
                            <li>
                            The site will score 'Cleaner than 85% of pages tested' using <a href="https://www.websitecarbon.com/">Website Carbon</a>.
                            </li>
                            <li>
                            This site will contain no advertising.
                            </li>
                            <li>
                            This site will not use cookies to track you.
                            </li>
                            <li>
                            It will use local storage variable 'is-dark-mode' to store your preference for light or dark mode.
                            </li>
                            <li>
                            Support IE11 and all modern browsers (Edge, Firefox, Chrome, Safari, Opera, et al) based on <a href="https://nextjs.org/docs/basic-features/supported-browsers-features">Next.js support</a>
                            </li>
                            <li>
                            Content or pages that are freely accessible will remain freely accessible in perpetuity.
                            </li>
                        </ul>

                        <h3>Fulfilment</h3>

                        <ul class={styles.dashedItemsList}>
                            <li>                                
                            Any breach or contravention of the terms of this contract will be put right in a timely fashion.
                            </li>
                            <li>
                            Breaches or contraventions of the terms of this contract, including their length and severity, will be published here with the date of the breach and the date when it was addressed.
                            </li>
                            <li>
                            Reasonable criticism relating to the terms of this contract will be addressed and published here with the date of the criticism and the date when it was addressed.
                            </li>
                            <li>
                            Any changes to this contract will be documented so that the original wording is maintained, and will be accompanied by an explanation of the reasons for the change.
                            </li>
                        </ul>
                    </p>
            </section>
       
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'services',text:'Services'}]}></Links.RelatedLinks>
       </Layout>       
    )
};

export default Contract;