import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import Appendix from 'pages/ethics/pledge-works/appendix';

import styles from 'pages/pages.module.scss';

const pwLinks = [
    {
        "name": "Pledge Works for The Public Good",
        "source": "ethics/pledge-works/case-study-the-public-good"
    },
    {
        "name": "Pledge Works for Startups",
        "source": "ethics/pledge-works/case-study-startup"
    },
    {
        "name": "Pledge Works Inventory",
        "source": "ethics/pledge-works/inventory"
    },
    {
        "name": "Pledges",
        "source": "ethics/pledge-works/pledges"
    },
    {
        "name": "Ethics",
        "source": "ethics"
    },
];

const PledgeWorks = () => {
    return (
        <Layout header="Pledge Works" title="Pledge Works" description={'A practical tool that invites you to write pledges for better outcomes as part of your existing product development processes.'} image='https://live.staticflickr.com/65535/51895028558_9130a3402b_q_d.jpg'>                
            <section>
                <p>
                    For an introduction to the open source project, please go to <Links.EL link={{source:"https://responsibletech.work/tools/development/pledge-works/"}}>Pledge Works</Links.EL>.                    
                </p>
                <p>If you are interested in how I use Pledge Works at The Public Good, see below.</p>
                <ul class={styles.dashedItemsList}>
                    {
                        pwLinks.map(link => {
                            return <li><Links.IL link={{source:link.source}}>{link.name}</Links.IL> </li>
                        })
                    }  
                </ul>
            </section>
            <Appendix></Appendix>
        </Layout>
    )
};

export default PledgeWorks;