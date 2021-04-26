import Layout from 'components/layout/layout';
import Accordion from 'components/accordion/accordion';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const externalLinks = [
    {
        "name": "Khan Academy | Carbon, the building block of life",
        "source": "https://www.khanacademy.org/science/biology/properties-of-carbon/carbon/v/carbon-as-a-building-block-of-life"
    },
    {
        "name": "University of Nottingham | Periodic Videos - Carbon",
        "source": "http://www.periodicvideos.com/videos/006.htm"
    },
    {
        "name": "BBC In Our Time | Carbon",
        "source": "https://www.bbc.co.uk/sounds/play/p003c1cj"
    },
    {
        "name": "BBC Frontiers | Graphene",
        "source": "https://www.bbc.co.uk/programmes/b00tgf18"
    },
    {
        "name": "Dr. Edward Murphy, University of Virginia | The Origin of the Elements",
        "source": "https://www.youtube.com/watch?v=ZJQjjBR6PbY&t=19s"
    },
    {
        "name": "Crash Course Biology | Carbon",
        "source": "https://www.youtube.com/watch?v=QnQe0xW_JY4&t=609s"
    },
    {
        "name": "Bozeman Science | The Molecules of Life",
        "source": "https://www.youtube.com/watch?v=QWf2jcznLsY"
    },
    {
        "name": "Khan Academy | The carbon cycle",
        "source": "https://www.khanacademy.org/science/high-school-biology/hs-ecology/hs-biogeochemical-cycles/v/carbon-cycle"
    },
];

const Carbon = () => {
    return (
        <Layout title="Carbon" description={'The ties that bind'} image='https://live.staticflickr.com/65535/51139806123_992c84960d_k.jpg'>
        {/* <Layout title="Carbon" description={'The ties that bind'} image='https://live.staticflickr.com/65535/51139754738_8f40f490e9_z.jpg'> */}
            <section class={styles.card}>
                <h2>Carbon - the ties that bind</h2>

                <div>
                    <div class={styles.bang}><a href="#origins-and-properties">The origins and properties of carbon</a><span class={styles.italic}> 2 minutes</span></div>
                    <div class={styles.bang}><a href="#carbon-compounds">Carbon compounds</a><span class={styles.italic}> 2 minutes</span></div>
                    <div class={styles.bang}><a href="#carbon-and-the-planet">Carbon and the planet</a><span class={styles.italic}> 3 minutes</span></div>
                </div>

                <Accordion header="Carbon properties">
                    <div class={styles.inset}>
                        <span>Symbol <span class={styles.bold}>C</span>; atomic number <span class={styles.bold}>6</span>; atomic mass <span class={styles.bold}>12.011u</span></span>
                        <span>Nonmetal, solid at room temperature.</span>
                        <span>From the Latin <span class={styles.italic}>carbo</span> meaning "charcoal".</span>
                        <span>By mass fourth <span><a href="https://en.wikipedia.org/wiki/Abundance_of_the_chemical_elements"> most abundant</a></span> element in the universe.</span>
                        <div><span><a href="https://pubchem.ncbi.nlm.nih.gov/element/Carbon">National Center for Biotechnology Information</a></span></div>
                    </div>
                </Accordion>

                <h3 id="origins-and-properties">The origins and properties of carbon</h3>

                <h4>(Almost) as old as the stars</h4>

                <p>Carbon atoms are formed in dying stars under extreme and improbable conditions during a set of nuclear fusion reactions known as the <span><a aria-label="Stanford article on the triple-alpha process" href="http://large.stanford.edu/courses/2017/ph241/udit2/">triple-alpha process</a></span>. On collapse of the star, in a supernova, the atoms are blown out, eventually forming new star systems such as our own.</p>
                
                <p>In the first 20 minutes after the Big Bang, protons, neutrons and electrons were created. It took hundreds of thousands of years of further cooling before the average energies of nuclei and electrons were low enough to form stable hydrogen and helium atoms.</p>

                <p>A further 500 million years passed before the first stars formed. In these stars conditions were right for <span><a href="https://en.wikipedia.org/wiki/Nucleosynthesis">nucleosynthesis</a></span>, the process by which elements heavier than boron are created. Carbon was the first of these elements.</p>

                <h4>Allotropes</h4>

                <p>Carbon assumes different structural forms - <span><a href="https://en.wikipedia.org/wiki/Allotropy">allotropes</a></span>. Alternate forms of the same element are created by external forces, such as heat and pressure. There are many <span><a href="https://en.wikipedia.org/wiki/Allotropes_of_carbon">allotropes of carbon</a></span> including those that naturally occur on earth - <span><a href="https://en.wikipedia.org/wiki/Amorphous_carbon">amorphous carbon</a></span>, diamond and graphite - and rarer forms such as <span><a href="https://en.wikipedia.org/wiki/Graphene">graphene</a></span> and <span><a href="https://en.wikipedia.org/wiki/Buckminsterfullerene">buckminsterfullerene</a></span>.</p>

                <h4>Diamond</h4>

                <Accordion header="Covalent bonds">                    
                    <div class={styles.inset}>
                        <div>Electrons are arranged in orbitals about the nucleus of an atom. Electrons in the outermost or valence orbital are able to form a pair with a valence electron from another atom.</div>
                        <div>These <span class={styles.bold}>covalent bonds</span> make atoms both more stable and cause them to be attracted to one another. This attraction equates to energy which is released when the bond is broken through combustion.</div>
                        <div>In diamond, each carbon atom shares electrons with four other carbon atoms, forming 4 single covalent bonds.</div>
                        <div>In carbon dioxide, each carbon atom shares 2 electrons with each oxygen atom, so that 2 double covalent bonds are formed.</div>
                        <div><a href="https://www.khanacademy.org/science/ap-biology/chemistry-of-life/introduction-to-biological-macromolecules/v/covalent-bonds">Covalent bonds | Khan Academy</a></div>
                    </div>
                </Accordion>

                <p>
                    <span>Diamond is arranged in a three dimensional tetrahedral lattice in which every carbon atom is bound to four other carbon atoms, in the form of a <span><a aria-label="Image of tetrahedron" href="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/3-diamond-tetrahedral-molecular-structure-mikkel-juul-jensenscience-photo-library.jpg">tetrahedron</a></span>. The proximity of atoms and the covalent bonds between them make diamond hard; breaking their covalent bonds requires a huge amount of energy</span>
                </p>

                <p>And because there are no free electrons, pure diamond does not conduct electricity.</p>

                <h4>Graphite</h4>

                <p>In graphite atoms form in planes. Each atom is bound to its three nearest neighbours at an angle of 120°. Since only 3 of the 4 electrons are shared, the fourth is free to move; in this way graphite conducts electricity.</p>

                <p>Each of the individual layers of atoms of which graphite is composed is called <span><a href="https://en.wikipedia.org/wiki/Graphene">graphene</a></span>. Graphene may unwittingly be produced by writing or drawing with a pencil; friction causes a layer, or more often hundreds of layers of atoms, to be removed. A single layer is graphene.</p>

                <h3 id="carbon-compounds">Carbon compounds</h3>

                <p>Such is carbon's propensity to form bonds that more compounds contain carbon than not, almost ten million. Organic chemistry is the study of these compounds. Those which contain only carbon and hydrogen are called hydrocarbons. Fossil fuels are hydrocarbons.</p>

                <h4>Hydrocarbons</h4>

                <p>Fossil fuels form when dead plants and animals decompose in the absence of oxygen and are submitted to intense heat and pressure over millions of years.</p>
                
                <p>When hydrocarbons are burnt in air they react with oxygen to release the energy stored in their covalent bonds in the form of light and heat.
                    <div class={styles.inset}>
                        <span>Hydrocarbon + oxygen → carbon dioxide + water + energy (light and heat)</span>
                        <span>e.g. CH<span class={styles.sub}>4</span> + 2O<span class={styles.sub}>2</span> → 2H<span class={styles.sub}>2</span>O + CO<span class={styles.sub}>2</span> + energy</span>
                        <div><a href="https://energyeducation.ca/encyclopedia/Hydrocarbon_combustion">Hydrocarbon combustion</a></div>
                    </div>
                </p>

                <p>The amount of energy released depends on the bonds between atoms in a molecule. Methane, which has 4 single bonds, burns at around 1,950°C in air. Natural gas, tailored for domestic use, is ~90% methane and burns at about 1,100°C.</p>

                <p><span><a href="https://en.wikipedia.org/wiki/Acetylene">Acetylene</a></span> C<span class={styles.sub}>2</span>H<span class={styles.sub}>2</span> burns at around 3,330°C in pure oxygen (oxyacetylene process) making it suitable for welding and cutting metals. The bulk of the energy released from acetylene is derived from the triple bond that exists between the two carbon atoms in each molecule.</p>

                <p>
                    <div class={styles.inset}>
                        <span>CH<span class={styles.sub}>4</span> - methane and C<span class={styles.sub}>8</span>H<span class={styles.sub}>18</span> - octane are the ideal chemical formulae of pure hydrocarbons. </span>
                        <span>Naturally occurring, unrefined fossil fuels, however, contain impurities which are released when they are burnt. These include oxygen - O, nitrogen - N and sulfur - S.</span>
                        <span>Low grade <span class={styles.bold}>bituminous</span> coal has the formula <span class={styles.bold}>C<span class={styles.sub}>137</span>H<span class={styles.sub}>97</span>O<span class={styles.sub}>9</span>NS</span>.</span>
                        <span>High grade <span class={styles.bold}>anthracite</span> has the formula <span class={styles.bold}>C<span class={styles.sub}>240</span>H<span class={styles.sub}>99</span>O<span class={styles.sub}>4</span>NS</span>.</span>
                    </div>
                </p>

                <h4>The sun</h4>

                <p>The energy from fossil fuels is derived from the sun; photons absorbed by chlorophyll excite electrons and thereby enable the processes by which photosynthesis produces organic compounds. Fossil fuels are a concentrated form of this energy.</p>

                <p> Solar and wind power are renewable energy sources because the energy we obtain from them can be replaced immediately (by the sun).</p>

                <p>
                    <div class={styles.inset}>
                        <span>Fossil fuels take ~1 million years to form. They have high energy and power densities.</span>
                        <span>Renewables are constantly replenished by the sun's energy. They have low energy and power densities.</span>
                        <span>In one year we release energy that took a million years to form. <span><a href="https://www.theguardian.com/science/2007/may/22/highereducation.education">Harry Kroto</a></span></span>
                        <div><Links.InternalLink link={{'value': 'facts#energy', 'text': 'Values for energy and power densities'}}></Links.InternalLink></div>
                    </div>
                </p>

                <p>The only energy source not derived from our sun is nuclear which ultimately derives from myriad distant, and now long dead stars.</p>

                <h4>Polymers</h4>

                <p>Because carbon atoms form strong bonds with other carbon atoms as well as the atoms of other elements it is able to form long chains, or polymers. Many of these are critical to life, including RNA , DNA, proteins, and sugars. It is this ability to bind to itself in long chains, form stable compounds with other elements and the proximity of electrons to the nucleus, that makes carbon the best, and perhaps the only, building block of life, not only on this planet, but in the universe.</p>

                <h3 id="carbon-and-the-planet">Carbon and the planet</h3>

                <h4>The Carbon Cycle</h4>

                <p>The carbon cycle regulates the flow of carbon through the earth and the atmosphere. How much carbon is in what part of the atmosphere affects temperature which alters conditions on earth to which all life must adapt.</p>

                <p>The temperature of the seas and the land has varied widely over geologic time. The main driver for the climate is the energy reaching us from the sun, a figure which varies according to the earth's orbit and the state of the sun itself. Temperature is also affected by random events such as meteor strikes and volcanic eruptions.</p>

                <p>When temperature and climate change slowly evolution by natural selection is possible. Sudden disruption is catastrophic, and results in the <span><a aria-label="National Graphic article: What are mass extinctions, and what causes them?" href="https://www.nationalgeographic.com/science/article/mass-extinction">mass extinction</a></span> of huge numbers of species. There have been five such events on earth, including the Permian–Triassic extinction event (the <span><a aria-label="University of St Andrews article: Great Dying – what caused Earth’s biggest mass extinction?" href="https://news.st-andrews.ac.uk/archive/great-dying-what-caused-earths-biggest-mass-extinction/">Great Dying</a></span>) which accounted for 90-96% of all species.</p>

                <p>Species exist when and where conditions are favourable for adaptation and evolution; when they cannot adapt to new conditions, favourable or otherwise, they go extinct.</p>

                <p>Many of the fossil fuels we burn today were laid down when carbon dioxide levels and temperatures were higher than today. The collapse of the Carboniferous rainforest - due to climate change - provided the organic matter that would later become coal.</p>

                <p>By burning that coal, and other fossil fuels, we have begun to change the climate, and because the change is rapid, many species have not, and will not, adapt.</p>

                <h4>Carbon emissions and reserves</h4>

                <p>Cumulative <span><a href="https://ourworldindata.org/co2-emissions">emissions</a></span> of carbon dioxide to date are ~1.5 trillion tonnes.
                    <div class={styles.quote}>
                        <span>Remaining reserves in tonnes:  900 coal, 150 oil, 105 gas, 540 shale gas, etc. = 1.695 trillion.</span>
                        <div>Carbon is also found in methane hydrates in polar regions and under the seas. Various estimates put this carbon between 500Gt and 3,000Gt.</div>
                        <div><a href="https://en.wikipedia.org/wiki/Carbon">Wikipedia</a></div>
                    </div>
                </p>

                <h4>The isotopic signature of anthropogenic warming</h4>

                <p>Isotopes are variants of a chemical element which differ in their number of neutrons. Carbon has 3 isotopes, carbon-12, carbon-13 and carbon-14.</p>

                <h5>How do we know the extra carbon dioxide in the atmosphere is caused by burning fossil fuels?</h5>

                <p>Plants absorb less (heavy) carbon-13 from the atmosphere than (light) carbon-12, and also favour carbon-12 for photosynthesis.</p>

                <p>Therefore when we burn fossil fuels we are releasing carbon that has relatively less carbon-13. This difference can be detected by measuring the relative ratio of carbon isotopes in the atmosphere. The isotopic signature confirms the man-made origin of current climate change.</p>

                <p>NASA has been monitoring the natural carbon cycle using satellites for some time including <span><a href="https://ocov2.jpl.nasa.gov/">Orbiting Carbon Observatory-2</a></span> and <span><a href="https://ocov3.jpl.nasa.gov/">Orbiting Carbon Observatory-3</a>. Around 2025 they will launch Copernicus CO2 Mission, the first operational carbon dioxide monitoring satellite constellation, focused on monitoring human-produced emissions.</span></p>
                
                <h4>They seek him here, they seek him there</h4>

                <p>Carbon is everywhere, including our own bodies where it is the second most abundant element (18%) after oxygen (65%). For a couple of hundred years we have benefited from chemical reactions irreversible in time scales appropriate to our species; the combustion of organic compounds, especially hydrocarbons, to release energy stored over unimaginably vast periods of time, is the foundation of our modern civilisations.</p>

                <p>Will we enjoy an equally profitable relationship with hydrogen?</p>

            </section>
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{href:'facts',title:'Facts'}, {href:'carbonfootprint',title:'Carbon footprint'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Carbon;

{/* <Accordion header="Covalent bonds between carbon and oxygen">
<p>In diamond the bonds are between carbon atoms (carbon-carbon, or C-C). In each molecule of carbon dioxide, two bonds are formed between carbon and oxygen (carbon-oxygen C-O).</p>
    <div class={styles.quote}>
        <div>Atoms have orbitals, or shells, that contain electrons. Only electrons in the outer (valence) shell are involved in bonds with other atoms.</div>
        <div>Carbon has an atomic mass of 6*; 2 electrons in its inner shell, and 4 valence electrons.</div>
        <div>Oxygen has an atomic mass of 8*; 2 electrons in its inner shell, and 6 valence electrons.</div>
        <div>For each atom in carbon dioxide to have 8 electrons in its outer shell, 2 oxygen atoms must share an electron with 1 carbon atom, hence its chemical formula CO<span class={styles.sub}>2</span>. These bonds are called double bonds.</div>
        <div>*The <span><a href="https://cdn.britannica.com/45/7445-050-BB332C27/version-periodic-table-elements.jpg">periodic table</a></span> orders elements by their atomic number, in ascending order: Hydrogen 1, Helium 2,… Carbon 6, Nitrogen 7, Oxygen 8, etc.</div>
        <div><a href="https://en.wikipedia.org/wiki/Carbon_dioxide">Carbon dioxide Wikipedia</a></div>
    </div>
</Accordion>                    
*/}

{/* <p>
    <Accordion header="Structure of diamond crystals">
    <div>These repeat in structures called <span><a href="https://en.wikipedia.org/wiki/Diamond_cubic">diamond cubic</a></span> crystal structures.</div>
        <div class={styles.quote}>                            
            How to calculate the number of carbon atoms (8) in each cube:
            <div>&#8539; of an atom at each of the eight corners; &#189; of an atom on each of the six faces; 4 whole atoms contained within the cube: (&#8539; * 8) + (&#189; * 6) + (1 * 4) = 8
            </div>
            <div>There are no &#8539; or &#189; atoms, 8 is the number of atoms per cube averaged across the structure. Each carbon atom is always connected to exactly four other carbon atoms.</div>
            <span><a aria-label="Image of a unit cell of diamond" href="https://content.bartleby.com/tbms-images/9781133958437/Chapter-21/images/58437-21-21.5e-question-digital_image001.jpg">Unit cell of diamond</a></span> (diagram)
        </div>
    </Accordion>
</p> */}

{/* <p>These bonds which hold the atoms together in diamond are covalent. Each atom forms 4 covalent bonds: each of the 4 electrons orbiting its outer shell is paired with an electron in the outer shell of another carbon atom, to bring the total number of elctrons in its outer shell to 8. These bonds fulfill the <span><a href="https://en.wikipedia.org/wiki/Octet_rule">octet rule</a></span> which states that elements tend to form bonds so that there are 8 electrons in their outer (or valence) shell.</p> */}
