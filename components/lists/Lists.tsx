import styles from 'components/lists/Lists.module.scss';

const ExternalLink = link => {
    return (
        <li>
            <a target="_blank" href={`${link.source}`} rel="noreferrer noopener">{link.name}</a>
        </li>
    )
};

const ExternalLinksList = ({links}) => {
    const list = links.map(link => {
        return <ExternalLink link={link} />
    });

    return (
        <ul>{list}</ul>
    )
};

const InternalLink = link => {
    return (
        <li>
            <a href={`${link.source}`}>{link.name}</a>
        </li>
    )
};

const InternalLinksList = ({links}) => {
    const list = links.map(link => {
        return <InternalLink link={link} />
    });

    return (
        <ul class={styles.linkList}>{list}</ul>
    )
};

export const Lists = {    
    InternalLinksList,    
    ExternalLinksList    
}