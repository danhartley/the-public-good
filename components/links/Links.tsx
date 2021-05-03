import Link from 'next/link';

import styles from 'components/links/Links.module.scss';

const ExternalLinksList = ({links}) => {
    const list = links.map(link => {
        return <li class={styles.externalLink}>
            <a href={`${link.source}`}>{link.name}</a>
        </li>
    });

    return (
        <ul class={styles.unorderedList}>{list}</ul>
    )
};

const InternalLink = ({link}) => {
    return  <span class={styles.internalLink}>                
                <Link href={`/${link.value}`}>
                    <a>{link.text}</a>
                </Link>
            </span>            
};

const InternalLinkBlock = ({link}) => {
    return  <p class={styles.internalLinkBlock}>
                <span class={styles.internalLink}>                
                    <Link href={`/${link.value}`}>
                        <a>{link.text}</a>
                    </Link>
                </span>
            </p>
};

const Home = ({ textAlign = 'left' }) => {
    return (
        <section class={styles.internalLinkBlock} style={`text-align:${textAlign}` as React.CSSProperties}>
            <p class={styles.internalLink}>
                <Link href={'/'}>
                    <a>The PG Home</a>
                </Link>
            </p>
        </section>
    )
};

const RelatedLinks = ({links}) => {

    const list = links.map(link => {
        return <li>
            <Link href={`/${link.href}`}>
                <a>{link.title}</a>
            </Link>
        </li>
    });

    return (
        <section class={styles.related}>
            <p class={styles.internalLink}>
                <h2>Related</h2>
                <ul class={styles.list}>
                    {list}
                </ul>
            </p>                
        </section>
    )
};

const Links = {    
    ExternalLinksList,
    Home,
    RelatedLinks,
    InternalLink,
    InternalLinkBlock
};

export default Links;