import styles from 'components/dashboard/Dashboard.module.scss';
import Slider from 'components/pdd/dashboard-controls-slider';

const DashboardControls = ({snapShots, snapShot, setActiveSnapShot}) => {

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

    const handleDisplayOptionChange = e => {
        e.disabled = true;
    }

    return (
        <nav id="display">
            <ul className={styles.unorderedHorizontalList}>
                {
                    options.map(o => {
                        const classes = o.active ? 'tab active' :  'tab';                                            
                        return <li className={classes}><button className={styles.btn} onClick={handleDisplayOptionChange}>{o.text}</button></li>
                    })
                }
            </ul>
            <p>
                <div>
                    <Slider intialState={snapShot} range={snapShots} onChange={setActiveSnapShot}></Slider>    
                </div>           
            </p>
        </nav>
    )

};

export default DashboardControls;