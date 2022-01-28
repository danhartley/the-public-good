import Links from 'components/links/Links';
import Layout from 'components/layout/layout';

import styles from 'pages/pages.module.scss';

const WritingPledges = () => {

    const corePledges = [
        "We pledge to consider the broader social and environmental impact of our work."
      , "We pledge to have a positive effect on our users and the planet."
      , "We pledge to address conflicts of interest between ourselves and our users."
      , "We pledge not to break a pledge if we are ignorant of the consequences."
      , "We pledge to make our pledges public."
      , "We pledge to come clean if we break a pledge."
  ];

  const roleBasedPledges = [
        "We pledge to develop human resources, not consume them (HR)."
      , "We pledge to write accessible copy because we want to treat all users fairly and equally (Marketing)."
      , "We pledge to provide evidence that we have considered climate change in our accounts (Accounts)."
      , "We pledge to balance the privacy and security of customers with the demands of the business for improved productivity (Business analysis)." 
  ];

  const productPledges = [
        "We pledge to measure success in terms of tonnes of emissions prevented."        
      , "We pledge to present data that support our claims."
      , "We pledge to verify claims made by our partners and third party vendors."
      , "We pledge to expose our methods to external scrutiny."
    //   , "We pledge not to misrepresent content."        
  ];

    return (
        <Layout header="Writing Pledges" title="Writing Pledges" description={'How to write pledges'}> {/* image? */}            
            <section>
            <h3>Core pledges</h3>
                <p>                    
                    What a startup does and what a startup is may appear synonymous but there are differences. As a for-profit company, our founders create a <Links.EL link={{source:"https://www.law.upenn.edu/clinic/entrepreneurship/startupkit/founders-agreement.pdf"}}>Founders' Agreement</Links.EL> (PDF) which sets out, among other things, how they will run the business, and who owns what.
                </p>
                <p>
                    Their core pledges define how they want to behave in the world. This includes their relationship to and responsibility towards future employees, customers, partners, providers of services, and abstract entities such as society and the planet. 
                </p>
                <ul class={styles.bulletList}>
                    {
                        corePledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>          
                <p>
                    These pledges are general and apply to everything the company does. They are in addition to their strategy for achieving equality and diversity.
                </p>
                <p>
                    As others join, they will introduce pledges specific to their profession or job. Role-based pledges are used by individuals and teams to guide their own work and to highlight issues, and risks, not previously considered. It is worth taking time to make sure role-based pledges align with core pledges.
                </p>
                <h4>Role-based pledges</h4>
                <ul class={styles.bulletList}>
                    {
                        roleBasedPledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>

                <h5>Pledges</h5>
                An example of pledges our company founders might use.
                <ul class={styles.bulletList}>
                    {
                        productPledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>
            </section>
        </Layout>
    )

};

export default WritingPledges;