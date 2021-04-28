import styles from 'components/tools/Formula.module.scss';

const Formula = ({children}) => {

    const elements = Array.from(children);

    const formula = elements.map(element => {
        return isNaN(element as any) 
                ? (/[a-z]/).test(element as any) || element === '+'
                    ? <span class={styles.sub}>{element}</span>
                    : element
                : <span class={styles.sub}>{element}</span>
    });

    return (
        <span>{formula}</span>
    )

};

export default Formula;