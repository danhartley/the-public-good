import styles from 'components/quiz/Quiz.module.scss';

const Quiz = ({provider = 'the-public-good', title = 'hydrogen-a-singular-atom', inset = false, widget = false, link = ''}) => {

    const src = `https://snapdragon-retrieval.netlify.app/providers/${provider}/lessons/${title}?type=questions&widget=${widget}`;

    return (
        inset 
            ?
                <>
                <h2>How much do your remember?</h2>
                <iframe title='quiz' className={styles.widget} src={src}></iframe>
                </>
            :
                <>
                <h2>How much do your remember?</h2>
                <div className={styles.externalLink}>
                    <a href={src}>{link !== '' ? link : title}</a>
                </div>
                </>

    )
};

export default Quiz;