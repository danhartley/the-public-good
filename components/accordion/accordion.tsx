import { useState } from 'preact/hooks';
import styles from 'components/accordion/Accordion.module.scss';

const Accordion = ({
    header,
    children
}) => {

    const [ state, setState ] = useState(false);

    const toggle = e => {
        setState(!state);
    };

    return (
        <> 
        <p>
            <button onClick={toggle} class={styles.btn}><span class={state ? styles.down : styles.up}></span><span>{ header }</span></button>
            <div class={state ? styles.show : styles.hide}>
            { children }
            </div>
        </p>       
        <p>
            <noscript>JavaScript is disabled, please turn on!</noscript>
        </p>
        </>
    )
};

export default Accordion;