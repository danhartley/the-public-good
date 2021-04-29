import styles from 'components/quiz/Quiz.module.scss';

const Quiz = ({provider = 'the-public-good', title = 'hydrogen-a-singular-atom', inset = false, widget = false, link = ''}) => {

    const src = `https://snapdragon-retrieval.netlify.app/providers/${provider}/lessons/${title}?type=questions&widget=${widget}`;

    return (
        inset 
            ?
                <>
                <h3>How much do your remember?</h3>
                <iframe class={styles.widget} src={src}></iframe>
                </>
            :
                <>
                <h3>How much do your remember?</h3>
                <div class={styles.link}>
                    <a href={src}>{link !== '' ? link : title}</a>
                </div>
                </>

    )
};

export default Quiz;