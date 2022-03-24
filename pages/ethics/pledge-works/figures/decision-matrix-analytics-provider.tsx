import styles from 'pages/pages.module.scss';

const AnalyticsProvider = () => {

    return (
        <div class={styles.decisionMatrix}>
            <table>
                <thead>
                    <tr>
                        <td>Rank</td><td>Criteria</td><td class={styles.centredText}><div>Google Analytics</div><span>Weighted score</span></td><td><div>Plausible</div><span>Weighted score</span></td>                    
                    </tr>                
                </thead>
                <tbody>
                    <tr>
                        <td>1</td><td>Free or cheap (&lt; 10€/month) hosted</td><td>100</td><td>100</td>
                    </tr>
                    <tr>
                        <td>2</td><td>Free limited plan</td><td>50</td><td>0</td>
                    </tr>
                    <tr>
                        <td>3</td><td><em>No cross-site or cross-device tracking</em></td><td>0</td><td>33</td>
                    </tr>
                    <tr>
                        <td>4</td><td><em>GDPR compliant</em></td><td>0</td><td>25</td>
                    </tr>
                    <tr>
                        <td>…</td><td>…</td><td>…</td><td>…</td>
                    </tr>                    
                </tbody>
                <tfoot>
                    <tr>
                        <td></td><td>Total score</td><td>188</td><td>267</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default AnalyticsProvider;
