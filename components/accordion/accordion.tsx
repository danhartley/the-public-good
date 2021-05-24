import { useState } from 'preact/hooks';
import styles from 'components/accordion/Accordion.module.scss';

// https://www.w3.org/TR/wai-aria-practices-1.2/examples/accordion/accordion.html

const Accordion = ({
    header,
    children
}) => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = toggledState => {     
        setIsOpen(toggledState);
    };

    const id = Array.from(header).reduce((str:string,x:string) => x !== ' ' ? str+x : str) as string;
    const contentId = 'content' + id;

    const content = <p>
        <div class={styles.accordion}>
            <span class={isOpen ? styles.open : styles.closed}></span><button type="button" id={id} aria-controls={contentId} aria-label={`Toggle view for additional information on ${header}`} onClick={e => toggle(!isOpen)}><span>{ header }</span></button>
        </div>
        <noscript /> 
        <div id={contentId} role="region" aria-labelledby={id} class={isOpen ? styles.show : styles.hide}>
        { children }
        </div>
    </p>

    return (
        <> 
       {content}
        </>
    )
};

export default Accordion;