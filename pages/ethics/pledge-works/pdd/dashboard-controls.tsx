import { useState } from 'preact/hooks';

import styles from 'components/dashboard/Dashboard.module.scss';

const DashboardControls = () => {

    const options = [
        {
            text: 'Table',
            active: true
        },
        {
            text: 'Chart',
            active: false
        },
        {
            text: 'Download',
            active: false
        },
    ];

    const [activeTab, setActiveTab] = useState(options[0]);

    const handleDisplayOptionChange = e => {
        console.log(e.target.innerText)
        e.disabled = true;
    }

    return (
        <nav id="display">
            <ul class={styles.unorderedHorizontalList}>
                {
                    options.map(o => {
                        const classes = o.active ? 'tab active' :  'tab';                                            
                        return <li class={classes}><button class={styles.btn} onClick={handleDisplayOptionChange}>{o.text}</button></li>
                    })
                }
            </ul>
        </nav>
    )

};

export default DashboardControls;