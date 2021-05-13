import { useState } from 'preact/hooks';
import styles from 'components/accordion/Accordion.module.scss';

const Accordion = ({
    header,
    children
}) => {

    const [ state, setState ] = useState(false);

    const toggle = toggledState => {
        console.log('toggledState :', toggledState);        
        setState(toggledState);
    };

    const content = <p>
        <button aria-label={`Toggle view for additional information on ${header}`} onClick={e => toggle(!state)} class={styles.accordionBtn}><span class={state ? styles.down : styles.up}></span><span>{ header }</span></button>
        <div class={state ? styles.show : styles.hide}>
        { children }
        </div>
    </p>

    return (
        <> 
       {content}
        <p>
            <noscript>{content}</noscript>
        </p>
        </>
    )
};

export default Accordion;