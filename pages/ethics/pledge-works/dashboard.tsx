import { useEffect, useState } from 'preact/hooks';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Appendix from 'pages/ethics/pledge-works/appendix';

import DashboardFeaturesTable from 'components/pdd/dashboard-features-table';
import DashboardValuesTable from 'components/pdd/dashboard-values-table';
import DashboardControls from 'components/pdd/dashboard-controls';

import { Source } from 'components/pdd/enums';

import api from 'components/pdd/api';

import styles from 'components/dashboard/Dashboard.module.scss';

const ResponsibilityDashboard = () => {

    const [featuresData, setFeaturesData] = useState(null);
    const [ValuesData, setValuesData] = useState(null);
    const [activeSnapShot, setActiveSnapShot] = useState('');

    const getData = async () => {
        console.log(activeSnapShot)
        const features = await api.getPledgesByFeatures({source:Source.Test, snapShot: activeSnapShot});
        const featuresView = await api.getDashboardData({data:features});
        setFeaturesData(featuresView);
        const values = await api.getPledgesByValues({source:Source.Test});
        const valuesView = await api.getDashboardData({data:values});
        setValuesData(valuesView);        
    }

    useEffect(() => {
        getData();
    }, [activeSnapShot]);

    return (        
        <>
            <div class={styles.wrapper}>
                <Layout header="Responsibility Dashboard" title="Responsibility Dashboard" description={''} discussions='/categories/pledge-works'>
                    <section>
                        <h2>Trustworthy AI</h2>                        
                        <figure class={styles.boxed}>
                            {
                                !featuresData ? null :
                                <>
                                <DashboardFeaturesTable data={featuresData.items}></DashboardFeaturesTable>
                                <DashboardControls snapShot={featuresData.snapShot} snapShots={featuresData.snapShots} setActiveSnapShot={setActiveSnapShot}></DashboardControls>
                                <figcaption><em>{featuresData.source} Pledges By Feature</em></figcaption>
                                </>
                            }
                        </figure>
                        <figure class={styles.boxed}>
                            {
                                !ValuesData ? null :
                                <>
                                <DashboardValuesTable data={ValuesData.items}></DashboardValuesTable>
                                {/* <DashboardControls></DashboardControls> */}
                                <figcaption><em>{ValuesData.source} Pledges By Values</em></figcaption>
                                </>
                            }                            
                        </figure> 
                    </section>
                    <Appendix></Appendix>
                    <Links.RelatedLinks links={[{value:"https://responsibletech.work/", text:"Pledge Works Introduction (on RTW)"},{value:'pledge-works/case-study-pledge-works',text:'Pledge Works for Pledge Works'}, {value:'pledge-works/case-study-startup', text:'Pledge Works for Startups'}, {value:'pledge-works/inventory', text:'Pledge Works Inventory'}, {value:'pledge-works/pledges', text:'Pledges'}]}></Links.RelatedLinks>
                </Layout>
            </div>
        </>
    )
};

export default ResponsibilityDashboard;
