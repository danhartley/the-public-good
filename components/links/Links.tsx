import Link from 'next/link';

import styles from 'components/links/Links.module.scss';

const EL = ({link, children = null}) => {
    return link.label 
        ? <span className={styles.externalLink}><a aria-label={link.label} href={`${link.source}`}>{children}</a></span>
        : <span className={styles.externalLink}><a href={`${link.source}`}>{children}</a></span>
}

const ExternalLinksList = ({links}) => {
    const list = links.map(link => {
        return <li className={styles.externalLink}>
            <a href={`${link.source}`}>{link.name}</a>
        </li>
    });

    return (
        <ul className={styles.unorderedList}>{list}</ul>
    )
};

const IL = ({link, children = null}) => {
    return  <span className={styles.internalLink}>                
                <Link href={`/${link.source}`}>
                    {children}
                </Link>
            </span>            
};

const ILBlock = ({link}) => {
    return  <p>
                <span className={styles.internalLink}>                
                    <Link href={`/${link.value}`}>
                        {link.text}
                    </Link>
                </span>
            </p>
};

const Home = ({ textAlign = 'left' }) => {
    return (
        <section className={styles.internalLinkBlock}>
            <p className={styles.internalLink}>
                <Link href={'/'}>
                    The PG Home
                </Link>
            </p>
        </section>
    )
};

const RelatedLinks = ({links}) => {

    const list = links.map((link, i) => {        
        return link.value.indexOf('http') > -1
        ? 
        <li key={i.toString()} className={styles.externalLink}>
            <a href={`${link.value}`}>{link.text}</a>
        </li>
        :
        <li>
            <Link key={i.toString()} href={`/${link.value}`}>
            {link.text}
            </Link>
        </li>
    });

    return (
        <section>
            <h2>Related content</h2>
            <p className={styles.internalLink}>
                <ul className={styles.dashedItemsList}>
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