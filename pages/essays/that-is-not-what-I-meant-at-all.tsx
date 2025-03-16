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
      rt="3 to 4"
      title="Essays on working with LLMs | That is not what I meant at all"
      description={'An essay on writing with an LLM'}
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section>
        <h2 className={styles.mb0}>Essay written in conversation with an LLM</h2>

        <h3 id="first-prompt" className={styles.mt0}>
          First prompt
        </h3>
        <p>
          I'm writing an essay on writing. I want the LLM to enforce good writing practices which I hope to convert into
          habits. I also want the LLM to act as editor.
        </p>
        <p>
          I ask the Large Language Model (LLM)
          <sup className={styles.small}>
            <a className={styles.pl1} href="#llm-definition">
              2
            </a>
          </sup>{' '}
          to restrict its advice to technical matters. It pauses for a moment before responding effortlessly. It prompts
          me to think about my audience, intentions, and style. There are no spelling mistakes or grammatical errors. It
          is flawless.
        </p>
        <blockquote>
          <em>Who is your intended reader?</em>
          <br />
          <em>
            Do you prefer a formal, academic tone, or would you like something more conversational and accessible?
          </em>
        </blockquote>
        <p>
          I find a blank page and begin to write. I write and write and then delete and delete. Every word is precise,
          every sentence balanced. Every word is wrong, every sentence mangled. My choice of subject is a mistake - I
          find it difficult to separate the theme from the process.
        </p>
        <p>I go back to the chat and instruct the LLM to ask me some more questions.</p>
        <blockquote>
          <em>What key idea do you want readers to take away?</em>
          <br />
          <em>Will you offer a final reflection or leave them with a question to consider?</em>
        </blockquote>
        <p>I do not expect this to be easy. I expect to work hard if I am to improve. But this isn't working.</p>
        <h3>The outline</h3>
        <p>
          I'm sitting in the exam hall of my old school looking at the space at the top of the answer paper where I will
          write my outline. This should take me no more than five minutes and will help me put my thoughts in order. The
          clock is at an uneven time, say five past ten, because someone has entered late. A teacher turned invigilator
          coughs to get our attention; we may now turn over our papers. I scratch out a few headings in a shaky hand
          before my pen leaps ahead. A brilliant opening sentence, snatched out of the air, will not wait.
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
          I do not share my memory dipped in ink from long before the LLM was born. Instead I hand over some ideas on
          the subject we are discussing. It unfurls its response like a charter for me to admire. I read over it
          quickly, mourning, without knowing their value, the things I have lost.
        </p>
        <blockquote>
          These fragments I have shored against my ruins.
          <br />
          <strong>The Love Song of J.Alfred Prufrock by T.S.Eliot </strong>
        </blockquote>
        <p>
          I head to the kitchen to make coffee and stand looking out the window. The LLM, which has no understanding of
          time present or time past, waits patiently in the empty room.
        </p>
        <p>
          <h3>Not what I meant</h3>
          The chat has an undertow that pulls me out to sea. I throw out words like an anchor. There is a pause. Have I
          said something wrong? The LLM shifts the subject ever so slightly and moves things along by asking me, in a
          roundabout way, to try again.
        </p>
        <blockquote>
          Would you like to refine this structure further, or do you already have a particular way you want to build
          your argument?
        </blockquote>
        <p>
          Now it is waiting for me to do something. I want to rewind, to take back what I said, to start the
          conversation over. My argument has collapsed, and I want nothing to do with it.
        </p>
        <h3>Advice from George Orwell</h3>
        <p>I ask the LLM to recommend writers who have written about writing. It refers me to George Orwell.</p>
        <blockquote>
          You can shirk it (asking questions about the value of a sentence) by simply throwing your mind open and
          letting the ready-made phrases come crowding in. They will construct your sentences for you -- even think your
          thoughts for you, to a certain extent -- and at need they will perform the important service of partially
          concealing your meaning even from yourself.
          <br />
          <strong>Politics and the English Language by George Orwell, 1946</strong>
        </blockquote>
        <p>
          Orwell’s assertion was that “the English language is in a bad way”. He thought people had become lazy and
          rather than thinking up phrases for themselves, they fell back on ready-made phrases (!) such as “grist to the
          mill”, “swan song” and “toe the line”.{' '}
        </p>
        <p>
          In response, he created some rules for using language as “an instrument for expressing and not for concealing
          or preventing thought.”
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
          I like these rules, they are clear and simple. Surely I can follow them and by doing so line up my words with
          my thoughts. They will help me handle the slippery ideas which keep escaping and by applying good sense at the
          level of the sentence I might hope to lift up my paragraphs too.
        </p>
        <p>
          The LLM says it is confident it can follow Orwell’s rules and promptly rewrites them in its own words. This is
          mildly annoying (I didn't ask it to do this) but perhaps it is only its way of checking it understands.
        </p>
        <ul>
          <li>Avoid clichés and overused phrases.</li>
          <li>Choose simple, direct language over complex or pretentious words.</li>
          <li>Be concise, cutting unnecessary words or phrases.</li>
          <li>Favor the active voice for strength and clarity.</li>
          <li>Use plain English over jargon unless technical precision demands it.</li>
          <li>Prioritize meaning over rigid adherence to rules, as Orwell’s final rule suggests.</li>
        </ul>
        <p>
          They are not as good as the original but who could match, "Never use a long word where a short one will do"?
        </p>
        <p>
          Besides, I know the rules (I'd read the essay before) and often fail to use them. Then I noticed the LLM had
          made a suggestion.
        </p>
        <blockquote>
          <p>Would you like me to assess your writing according to these rules once you have a draft?</p>
        </blockquote>
        <blockquote>
          Do I dare
          <br />
          Disturb the universe? In a minute there is time
          <br />
          For decisions and revisions which a minute will reverse
          <br />
          <strong>The Wasteland by T.S.Eliot</strong>
        </blockquote>
        <p>I would, and it did.</p>

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
        <p>
          The title of the essay, "That is not what I meant at all", is taken from{' '}
          <Links.EL
            link={{
              source: 'https://www.poetryfoundation.org/poetrymagazine/poems/44212/the-love-song-of-j-alfred-prufrock',
            }}
          >
            The Love Song of J.Alfred Prufrock
          </Links.EL>{' '}
          by T.S.Eliot.
        </p>
      </section>
    </Layout>
  )
}

export default ThatIsNotWhatIMeantAtAll

const references = [
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
