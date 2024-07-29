import styles from 'components/published/Published.module.scss';

const Published = ({strDate, edited = null}) => {

    const updates = Array.isArray(edited)
                        ? edited.map(e => {
                                return <div className={styles.published}>Edited: {e.text === undefined ? '' : e.text} {new Date(e.strDate).toDateString()}</div>
                            })
                        : null;

    return (
        <section>
            <p className={styles.published}>
                <div>
                    <div>Published: {new Date(strDate).toDateString()}</div>
                    {updates}
                </div>
            </p>
        </section>
    )
};

export default Published;