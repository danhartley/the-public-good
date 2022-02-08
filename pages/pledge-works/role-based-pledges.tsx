import Links from 'components/links/Links';
import Layout from 'components/layout/layout';

import styles from 'pages/pages.module.scss';

const RoleBasedPledges = () => {

  const roleBasedPledges = [
        "We pledge to develop human resources, not consume them (HR)."
      , "We pledge to write accessible copy because we want to treat all users fairly and equally (Marketing)."
      , "We pledge to provide evidence that we have considered climate change in our accounts (Accounts)."
      , "We pledge to balance the privacy and security of customers with the demands of the business for improved productivity (Business analysis)." 
  ];

    return (
        <Layout header="Role-based Pledges" title="Role-based Pledges" description={'How to write role-based pledges'} discussions='/categories/pledge-works'> {/* image? */}            
            <section>

                <p>They are bla bla bla…</p>
            
                <ul>
                    {
                        roleBasedPledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>

            </section>
        </Layout>
    )

};

export default RoleBasedPledges;