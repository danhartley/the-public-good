import { useState } from 'preact/hooks';

import styles from 'components/dashboard/Dashboard.module.scss';

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

    const Slider = ({snapShot, snapShots}) => {

        const _snapShots = snapShots.map((s,i) => {
            return {
                value: i,
                text: s
            }
        });

        const _snapShot = _snapShots.find(ss => ss.text === snapShot);

        const handleHistorySlider = e => {
            setActiveSnapShot(_snapShots.find(ss => ss.value === parseInt(e.target.value)).text);
        };

        return (    
            <>
            { 
                !snapShots ? <></> :
                <>
                <input type="range" id="history" name="history" min={_snapShots[0].value} onChange={handleHistorySlider} max={_snapShots[_snapShots.length - 1].value} value={_snapShot.value} />
                <label htmlFor="history">{_snapShot.text}</label>
                </>
            }
            </>
        )
    };
    
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
            <p>
                <div>
                    <Slider snapShot={snapShot} snapShots={snapShots}></Slider>    
                </div>           
            </p>
        </nav>
    )

};

export default DashboardControls;