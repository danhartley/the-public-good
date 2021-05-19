import { useState } from 'preact/hooks';
import styles from 'components/accordion/Accordion.module.scss';

// https://www.w3.org/TR/wai-aria-practices-1.2/examples/accordion/accordion.html

const Accordion = ({
    header,
    children
}) => {

    const [ state, setState ] = useState(false);

    const toggle = toggledState => {     
        setState(toggledState);
    };

    const content = <p>
        <button type="button" id="accordionBtn" aria-controls="accordionContent" aria-expanded={state} aria-label={`Toggle view for additional information on ${header}`} onClick={e => toggle(!state)} class={styles.accordionBtn}><span class={state ? styles.down : styles.up}></span><span>{ header }</span></button>
        <div id="accordionContent" role="region" aria-labelledby="accordionBtn" class={state ? styles.show : styles.hide}>
        { children }
        </div>
    </p>

    return (
        <> 
       {content}
        <p>
            <noscript>{children}</noscript>
        </p>
        </>
    )
};

export default Accordion;