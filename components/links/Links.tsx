import Link from 'next/link';

import styles from 'components/links/Links.module.scss';

const EL = ({link, children = null}) => {
    return link.label 
        ? <span class={styles.externalLink}><a aria-label={link.label} href={`${link.source}`}>{children}</a></span>
        : <span class={styles.externalLink}><a href={`${link.source}`}>{children}</a></span>
}

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

const IL = ({link, children = null}) => {
    return  <span class={styles.internalLink}>                
                <Link href={`/${link.source}`}>
                    <a href={`/${link.source}`}>{children}</a>
                </Link>
            </span>            
};

const ILBlock = ({link}) => {
    return  <p>
                <span class={styles.internalLink}>                
                    <Link href={`/${link.value}`}>
                        <a href={`/${link.value}`}>{link.text}</a>
                    </Link>
                </span>
            </p>
};

const Home = ({ textAlign = 'left' }) => {
    return (
        <section class={styles.internalLinkBlock}>
        {/* <section class={styles.internalLinkBlock} style={`text-align:${textAlign}`}> */}
            <p class={styles.internalLink}>
                <Link href={'/'}>
                    <a href={'/'}>The PG Home</a>
                </Link>
            </p>
        </section>
    )
};

const RelatedLinks = ({links}) => {

    const list = links.map(link => {        
        return link.value.indexOf('http') > -1
        ? 
        <li class={styles.externalLink}>
            <a href={`${link.value}`}>{link.text}</a>
        </li>
        :
        <li>
            <Link href={`/${link.value}`}>
                <a href={`/${link.value}`}>{link.text}</a>
            </Link>
        </li>
    });

    return (
        <section>
            <p class={styles.internalLink}>
                <h2>Related content</h2>
                <ul class={styles.dashedItemsList}>
                    {list}
                </ul>
            </p>                
        </section>
    )
};

const Links = {    
    EL,
    ExternalLinksList,
    Home,
    RelatedLinks,
    IL,
    ILBlock
};

export default Links;