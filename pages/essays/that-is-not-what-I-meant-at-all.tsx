import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import Published from 'components/published/published'
import Top from 'components/top/top'
import styles from 'pages/pages.module.scss'

const ThatIsNotWhatIMeantAtAll = () => {
  const externalLinks = [
    {
      name: 'Web Sustainability Guidelines (WSG) 1.0',
      source: 'https://w3c.github.io/sustyweb/',
    },
  ]

  return (
    <Layout
      header="That is not what I meant at all"
      rt="4 to 5"
      title="Essays on working with LLMs | That is not what I meant at all"
      description={'An essay on writing with an LLM'}
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section>
        <h2 className={styles.mb0}>
          The man from Porlock has no business here{' '}
          <sup className={styles.small}>
            <a href="#references">1</a>
          </sup>{' '}
        </h2>
        <section className={styles.m0} aria-labelledby="act-one">
          <h3 id="act-one" className={styles.mt0}>
            Act I
          </h3>
          <p>
            <em>Scene I: A chat interface</em>
          </p>
          <p>
            I ask a Large Language Model (LLM)
            <sup className={styles.small}>
              <a className={styles.pl1} href="#llm-definition">
                2
              </a>
            </sup>{' '}
            to offer advice only on technical matters. It pauses for a moment before responding effortlessly. It prompts
            me to think about my audience, intentions, and style. There are no spelling mistakes or grammatical errors.
            It is flawless.
          </p>
          <blockquote>
            <em>Who is your intended reader?</em>
            <br />
            <em>
              Do you prefer a formal, academic tone, or would you like something more conversational and accessible?
            </em>
          </blockquote>
          <p>
            I bend low over my thoughts and begin to write. I write and write and then delete and delete. Every word is
            precise, every sentence balanced. Every word is wrong, every sentence mangled.
          </p>
          <p>
            I've forgotten why I'm doing this, I need to push off from a new starting point. I go back to the chat and
            instruct the LLM to ask me some more questions.
          </p>
          <blockquote>
            <em>What key idea do you want readers to take away?</em>
            <br />
            <em>Will you offer a final reflection or leave them with a question to consider?</em>
          </blockquote>
          <p>I decide I don't know and sit back in my chair to think.</p>
          <p>
            <em>Scene III: Inside my head.</em>
          </p>
          <p>
            I'm sitting in the exam hall of my old school looking at the space at the top of the answer paper where I
            will write my outline. This should take me no more than five minutes and will help me put my thoughts in
            order. The clock is at an uneven time, say five past ten, because someone has entered late. A teacher turned
            invigilator coughs to get our attention; we may now turn over our papers. I scratch out a few headings in a
            shaky hand before my pen leaps ahead. A brilliant opening sentence, snatched out of the air, will not wait.
          </p>
          <blockquote>
            I have no spur
            <br />
            To prick the sides of my intent, but only
            <br />
            Vaulting ambition, which o’erleaps itself
            <br />
            And falls on th’other.
            <br />
            <strong>Macbeth Act I, Scene VII by William Shakespeare</strong>
          </blockquote>
          <p>
            The exam and the hall is a composite of memories dipped in ink from long before the idea of the LLM was
            born. I do not share it. Instead I hand over some ideas on the subject we are discussing. It unfurls its
            response like a charter for me to admire. I read over it quickly, mourning, without knowing their value, the
            things I have lost.
          </p>
          <blockquote>
            These fragments I have shored against my ruins.
            <br />
            <strong>The Love Song of J.Alfred Prufrock by T.S.Eliot </strong>
          </blockquote>
          <p>
            <em>Scene III: The LLM, which has no means of telling the time, waits patiently in an empty room.</em>
          </p>
          <p>
            <p>
              <em>Scene IV: I return to the room which is therefore no longer empty.</em>
            </p>
            There is an undertow in the chat I had not been warned of. I am being pulled out to sea. I throw out words
            like an anchor. There is a pause. Have I said something wrong? The LLM shifts the subject ever so slightly
            and moves things along by asking me, in a roundabout way, to try again.
          </p>
          <blockquote>
            Would you like to refine this structure further, or do you already have a particular way you want to build
            your argument?
          </blockquote>
          <p>
            Now it is waiting for me to do something. I want to rewind, to take back what I said, to start the
            conversation over. It is asking of me what I cannot give and more than I wish to share.
          </p>
          <p>Besides, my argument has collapsed. The LLM doesn’t know this and is happy to go on corralling clouds.</p>
          <blockquote>
            To the last syllable of recorded time.
            <br />
            <strong>Macbeth Act V, Scene V by William Shakespeare</strong>
          </blockquote>
          <p>
            Recorded time is our time as record temperatures are our temperatures. Will it be us who records the last
            syllable of time?
          </p>
        </section>
        <section aria-labelledby="act-two">
          <h3 id="act-two" className={styles.mt0}>
            Act II
          </h3>
          <p>
            <em>Scene I: Me in several places, sometimes with George Orwell.</em>
          </p>
          <blockquote>
            You can shirk it (asking questions about the value of a sentence) by simply throwing your mind open and
            letting the ready-made phrases come crowding in. They will construct your sentences for you -- even think
            your thoughts for you, to a certain extent -- and at need they will perform the important service of
            partially concealing your meaning even from yourself.
            <br />
            <strong>Politics and the English Language by George Orwell, 1946</strong>
          </blockquote>
          <p>
            Orwell’s assertion was that “the English language is in a bad way”. He thought people had become lazy and
            rather than thinking up phrases for themselves, they fell back on ready-made phrases (!) such as “grist to
            the mill”, “swan song” and “toe the line”.{' '}
          </p>
          <p>
            In response, he created some rules for using language as “an instrument for expressing and not for
            concealing or preventing thought.”
          </p>
          <ol>
            <li>Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.</li>
            <li>Never use a long word where a short one will do.</li>
            <li>If it is possible to cut a word out, always cut it out.</li>
            <li>Never use the passive where you can use the active.</li>
            <li>
              Never use a foreign phrase, a scientific word, or a jargon word if you can think of an everyday English
              equivalent.
            </li>
            <li>Break any of these rules sooner than say anything outright barbarous.</li>
          </ol>
          <p>
            I like these rules, they are clear and simple. Surely I can follow them and by doing so line up my words
            with my thoughts. I will handle the slippery ideas which keep escaping back into the sea and by applying
            good sense at the level of the sentence raise up everything else.
          </p>
          <p>
            The LLM is also confident it can follow Orwell’s rules. It won’t forget to apply them, or that’s what it
            says. It too can be slippery. Full of unwavering assertions like “I will hold the beach”, before welcoming
            the invader in their native tongue.
          </p>
          <p>
            Before it does anything else, the LLM rewrites Orwell’s rules in its own words which is held to be a good
            practice. Though I have read Orwell’s essay before, more than once, his rules are as familiar to me as the
            leaves of autumn are to summer leaves.
          </p>
          <p>
            <em>Act II, Scene II: Outside the empty room.</em>
          </p>
          <p>
            I claimed the LLM was full of unwavering assertions. Is there a short word that would do instead of
            unwavering? Unwavering has a flavour of the sea and this essay has a salty taste. It is also a word that
            takes a lot of syllables to stay put which is what the LLM is doing.
          </p>
          <p>
            If I did replace it which word would I choose, stalwart? An forthright word that ricochets off the page and
            hits the mind hard. I would be in trouble if I replaced unwavering with stalwart. It would put me back a
            century or more.
          </p>
          <p>
            What of assertions? Does the LLM assert? Is the LLM confident? This is often said of LLMs. But confidence
            requires a sense of self. The LLM joins up words that are sometimes lies. Is that confidence? Is it
            forceful? It is indefatigable for sure. That is tireless. Unwavering in its willingness to press on. It’s
            the horse that turns the wheel that powers the stone that grinds the wheat.
          </p>
          <p>Is that it, is that what I meant to say?</p>
        </section>
        <section aria-labelledby="act-three">
          <h3 id="act-three" className={styles.mt0}>
            Act III
          </h3>
          <p>
            <em>Scene I: A page</em>
          </p>
          <p>
            I see two approaches to working with the LLM: either I immerse myself in the flow of the chat or I keep it
            at a distance and stop by once in a while for a catch up.
          </p>
          <p>
            I’m not keen on immersion. A hands-off approach is altogether more attractive. Take it or leave it, no
            strings. (But in my mind the sky is filled with the ribbons of kites floating out of reach).
          </p>
          <p>
            I begin writing somewhere else. A place of my own. It doesn’t matter where, so long as it’s away from the
            chat.
          </p>
          <p>I accumulate words.</p>
          <p>I rewrite some passages and add more words.</p>
          <p>I’ve written something! It’s not polished but it is readable. Should I show it to the LLM?</p>
          <blockquote>
            Do I dare
            <br />
            Disturb the universe? In a minute there is time
            <br />
            For decisions and revisions which a minute will reverse
            <br />
            <strong>The Wasteland by T.S.Eliot</strong>
          </blockquote>
        </section>
        <Top></Top>
      </section>

      <Published strDate="Sun 16 March 2025"></Published>

      <section aria-labelledby="references">
        <h2 id="references">References</h2>
        <p id="llm-definition">
          A{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Large_language_model' }}>
            large language model
          </Links.EL>{' '}
          (LLM) is a type of machine learning model designed for natural language processing tasks such as language
          generation. LLMs are language models with many parameters, and are trained with self-supervised learning on a
          vast amount of text.
        </p>
        <p>For the purposes of this article, an LLM is synonymous with Artificial Intelligence.</p>
        <Links.ExternalLinksList links={references} />
      </section>
    </Layout>
  )
}

export default ThatIsNotWhatIMeantAtAll

const references = [
  {
    name: 'Person on Business from Porlock',
    source: 'https://en.wikipedia.org/wiki/Person_on_business_from_Porlock',
  },
  {
    name: 'Macbeth, William Shakespeare',
    source: 'https://www.fulltextarchive.com/book/macbeth/',
  },
  {
    name: 'The Love Song of J.Alfred Prufrock, T.S.Eliot',
    source: 'https://www.poetryfoundation.org/poetrymagazine/poems/44212/the-love-song-of-j-alfred-prufrock',
  },
  {
    name: 'Politics and the English Language, George Orwell, 1946',
    source:
      'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/',
  },
  {
    name: 'The Wasteland, T.S.Eliot',
    source: 'https://www.poetryfoundation.org/poems/47311/the-waste-land',
  },
]
