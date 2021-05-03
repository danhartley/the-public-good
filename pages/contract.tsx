import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const Contract = () => {

    const externalLinks = [
        {
            "name": "Smashing Magazine | Using Ethics In Web Design 2018",
            "source": "https://www.smashingmagazine.com/2018/03/using-ethics-in-web-design/"
        },
    ]

    return (
        <Layout header="The contract" title="Contract" description={'Public contract between The Public Good and the Public'}>
            
            <section class={styles.card}>

                <p>
                    <h2>The contract for the-public-good.com</h2>

                    <p>

                        <h3>Terms</h3>

                        <ul class={styles.unorderedList}>
                            <li>
                                <div>The site will satisfy Web Content Accessibility Guidelines <a href="https://webaim.org/resources/contrastchecker/">WCAG Level AAA</a>.</div>
                            </li>
                            <li>
                                <div>The site will score at least 95% for Performance, Accessibility, Best Practices and SEO on <a href="https://developers.google.com/web/tools/lighthouse">Lighthouse</a>, on both Desktop and Mobile.</div>
                            </li>
                            <li>
                                <div>The site will score 'Cleaner than 85% of pages tested' using <a href="https://www.websitecarbon.com/">Website Carbon</a>.</div>
                            </li>
                            <li>
                                <div>This site will contain no advertising.</div>
                            </li>
                            <li>
                                <div>This site will not use cookies to track you.</div>
                            </li>
                            <li>
                                <div>It will use local storage variable 'is-dark-mode' to store your preference for light or dark mode.</div>
                            </li>
                            <li>
                                <div>Support for  IE11 and all modern browsers (Edge, Firefox, Chrome, Safari, Opera, et al) based on <a href="https://nextjs.org/docs/basic-features/supported-browsers-features">Next.js support</a></div>
                            </li>
                            <li>
                                <div>Content or pages that are freely accessible will remain freely accessible in perpetuity.</div>
                            </li>
                        </ul>

                        <h3>Transparency</h3>

                        <ul class={styles.unorderedList}>
                            <li>                                
                                <div>Any breach or contravention of the terms of this contract will be put right in a timely fashion.</div>
                            </li>
                            <li>
                                <div>Breaches or contraventions of the terms of this contract, including their length and severity, will be published here with the date of the breach and the date when it was addressed.</div>
                            </li>
                            <li>
                                <div>Reasonable criticism relating to the terms of this contract will be addressed and published here with the date of the criticism and the date when it was addressed.</div>
                            </li>
                            <li>
                                <div>Any changes to this contract will be documented so that the original wording is maintained, and will be accompanied by an explanation of the reasons for the change.</div>
                            </li>
                        </ul>
                    </p>
                </p>
            </section>
       
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
       
       </Layout>       
    )
};

export default Contract;