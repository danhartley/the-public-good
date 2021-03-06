import Link from 'next/link';

import styles from 'components/links/Links.module.scss';

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
        <ul class={styles.unorderedList}>{list}</ul>
    )
};

const Home = ({ textAlign = 'left' }) => {
    return (
        <section class={styles.card} style={`text-align:${textAlign}` as React.CSSProperties}>
            <p class={styles.internalLink}>
                <Link href={'/'}>
                    <a>The PG Home</a>
                </Link>
            </p>
        </section>
    )
};

export const Links = {    
    InternalLinksList,    
    ExternalLinksList,
    Home
}