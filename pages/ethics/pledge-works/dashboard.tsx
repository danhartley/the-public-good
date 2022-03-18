import { useEffect, useState } from 'preact/hooks';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Appendix from 'pages/ethics/pledge-works/appendix';

import DashboardTable from 'components/pdd/dashboard-table';
import DashboardPledgesByValueTable from 'components/pdd/dashboard-pledges-by-value-table';
import DashboardControls from 'components/pdd/dashboard-controls';

import api from 'components/pdd/api';

import styles from 'components/dashboard/Dashboard.module.scss';

const ResponsibilityDashboard = () => {

    const [data, setData] = useState(null);
    const [brokenPledgesData, setBrokenPledgesData] = useState(null);

    const getData = async () => {
        const _localData = await api.getInMemoryData();
        const _data = await api.getDashboardData({data:_localData});
        setData(_data);
        const _localValuesData = await api.getInMemoryPledgesByValueData();
        const _valuesData = await api.getDashboardData({data:_localValuesData.values});
        setBrokenPledgesData(_valuesData);
    }

    useEffect(() => {
        getData();
    }, []);

    return (        
        <>
            <div class={styles.wrapper}>
                <Layout header="PDD Dashboard" title="PDD Dashboard" description={''} discussions='/categories/pledge-works'>
                    <section>
                        <h2>Public data</h2>                        
                        <figure class={styles.boxed}>
                            <DashboardTable data={data}></DashboardTable>
                            <DashboardControls></DashboardControls>
                            <figcaption><em>Summary of Dashboard Requirements Progress</em></figcaption>
                        </figure>
                        <figure class={styles.boxed}>
                            <DashboardPledgesByValueTable data={brokenPledgesData}></DashboardPledgesByValueTable>
                            <DashboardControls></DashboardControls>
                            <figcaption><em>Summary of Pledges by Value</em></figcaption>
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
