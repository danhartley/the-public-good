import styles from 'components/lists/Lists.module.scss';

const ExternalLinksList = ({links}) => {
    const list = links.map(link => {
        return <li>
            <a target="_blank" href={`${link.source}`} rel="noreferrer noopener">{link.name}</a>
        </li>
    });

    return (
        <ul>{list}</ul>
    )
};

const InternalLinksList = ({links}) => {
    const list = links.map(link => {
        return <li>
            <a href={`${link.source}`}>{link.name}</a>
        </li>
    });

    return (
        <ul class={styles.linkList}>{list}</ul>
    )
};

export const Lists = {    
    InternalLinksList,    
    ExternalLinksList    
}