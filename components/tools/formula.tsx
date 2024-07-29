import styles from 'components/tools/Formula.module.scss';

const Formula = ({children}) => {

    let elements = []
    elements = Array.from(children);

    const formula = elements.map((element, i) => {
        return isNaN(element as any) 
                ? (/[a-z]/).test(element as any) || element === '+'
                    ? <span key={i.toString()} className={styles.sub}>{element}</span>
                    : element
                : <span key={i.toString()} className={styles.sub}>{element}</span>
    });

    return (
        <span>{ formula }</span>
    )

};

export default Formula;