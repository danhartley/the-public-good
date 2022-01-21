import styles from 'pages/pages.module.scss';

const DecisionMatrix = () => {

    return (
        <div class={styles.decisionMatrix}>
            <table>
                <thead>
                    <tr>
                        <td>#</td><td>Requirement</td><td><div>Google Analytics</div><span>Score</span></td><td><div>Plausible</div><span>Score</span></td>                    
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
                        <td>3</td><td>Full control over data</td><td>0</td><td>33</td>
                    </tr>
                    <tr>
                        <td>4</td><td>GDPR compliant (no cookies)</td><td>0</td><td>25</td>
                    </tr>
                    <tr>
                        <td>…</td><td>…</td><td>…</td><td>…</td>
                    </tr>                    
                </tbody>
                <tfoot>
                    <tr>
                        <td></td><td>Score</td><td>188</td><td>267</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default DecisionMatrix;