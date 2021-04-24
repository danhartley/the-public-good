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
        <Layout title="Carbon" description={'Carbon'}>
            <section class={styles.card}>
                <h2>Carbon</h2>

                <Accordion header="Carbon properties">
                    <div class={styles.inset}>
                        <span>Symbol <span class={styles.bold}>C</span></span>
                        <span>Atomic number <span class={styles.bold}>6</span></span>
                        <span>Atomic mass <span class={styles.bold}>12.011u</span></span>
                        <span>Nonmetal, solid at room temperature.</span>
                        <span>From the Latin <span class={styles.italic}>carbo</span> meaning "charcoal".</span>
                        <span>By mass fourth <span><a href="https://en.wikipedia.org/wiki/Abundance_of_the_chemical_elements"> most abundant</a></span> element in the universe.</span>
                        <div><span><a href="https://pubchem.ncbi.nlm.nih.gov/element/Carbon">National Center for Biotechnology Information</a></span></div>
                    </div>
                </Accordion>

                <h3>The origins and properties of carbon</h3>

                <h4>(Almost) as old as the stars</h4>

                <p>Carbon atoms are formed in dying stars under extreme and improbable conditions during a set of nuclear fusion reactions known as the <span><a aria-label="Stanford article on the triple-alpha process" href="http://large.stanford.edu/courses/2017/ph241/udit2/">triple-alpha process</a></span>. On collapse of the star, in a supernova, the atoms are blown out, eventually forming new star systems such as our own.</p>
                
                <p>In the first 20 minutes after the Big Bang, protons, neutrons and electrons were created. It took hundreds of thousands of years of further cooling until the average energies of nuclei and electrons were low enough to form stable hydrogen and helium atoms.</p>

                <p>A further 500 million years passed before the first stars formed, in which the conditions were right for <span><a href="https://en.wikipedia.org/wiki/Nucleosynthesis">nucleosynthesis</a></span>, the process by which elements heavier than boron are created. Carbon was the first of these elements.</p>

                <h4>Allotropes, the same but different</h4>

                <p>Carbon assumes different structural forms, <span><a href="https://en.wikipedia.org/wiki/Allotropy">allotropes</a></span>. Alternate forms of the same element are created by external forces, such as heat and pressure. There are many <span><a href="https://en.wikipedia.org/wiki/Allotropes_of_carbon">allotropes of carbon</a></span> including those that naturally occur on earth - <span><a href="https://en.wikipedia.org/wiki/Amorphous_carbon">amorphous carbon</a></span>, diamond and graphite - and rarer forms such as <span><a href="https://en.wikipedia.org/wiki/Graphene">graphene</a></span> and <span><a href="https://en.wikipedia.org/wiki/Buckminsterfullerene">buckminsterfullerene</a></span>.</p>

                <h4>Diamond</h4>

                <Accordion header="Covalent bonds">                    
                    <div class={styles.inset}>
                        <div>Electrons are arranged in orbitals about the nucleus of an atom. Electrons in the outermost or valence orbital are able to form a pair with a valence electron from another atom.</div>
                        <div>These covalent bonds make the atoms both more stable and cause them to be attracted to one another. This attraction equates to energy which is released when the bond is broken through combustion.</div>
                        <div>In diamond, each carbon atom shares electrons with four other carbon atoms, forming 4 single covalent bonds.</div>
                        <div>In carbon dioxide, each carbon atom forms shares 2 electrons with each oxygen, forming 2 double covalent bonds.</div>
                        <div><a href="https://www.khanacademy.org/science/ap-biology/chemistry-of-life/introduction-to-biological-macromolecules/v/covalent-bonds">Covalent bonds | Khan Academy</a></div>
                    </div>
                </Accordion>

                <p>
                    <span>Diamond is arranged in a three dimensional tetrahedral lattice in which every carbon atom is bound to four other carbon atoms, in the form of a <span><a aria-label="Image of tetrahedron" href="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/3-diamond-tetrahedral-molecular-structure-mikkel-juul-jensenscience-photo-library.jpg">tetrahedron</a></span>. The proximity of atoms and the covalent bonds between them make diamond hard.</span>
                </p>

                <p>Because there are no free electrons, pure diamond does not conduct electricity.</p>

                <h4>Graphite</h4>

                <p>In graphite atoms form in planes. Each atom is bound to its three nearest neighbours at an angle of 120°. Since only 3 of the 4 electrons are shared, the fourth is free to move; in this way graphite conducts electricity.</p>

                <p>Each of the individual layers of atoms of which graphite is composed is called <span><a href="https://en.wikipedia.org/wiki/Graphene">graphene</a></span>. Graphene may unknowingly be produced by using a pencil where friction causes a layer, or more often hundreds of layers of atoms, to be removed.</p>

                <h3>Properties of carbon</h3>

                <p>Such is carbon's propensity to form bonds that more compounds contain carbon than not, almost ten million. Organic chemistry is the study of these compounds. Those which contain only carbon and hydrogen are called hydrocarbons; we also know them as fossil fuels.</p>

                <h4>Hydrocarbons</h4>

                <p>Fossil fuels form when dead plants and animals decompose in the absence of oxygen and are then submitted to intense heat and pressure over millions of years.</p>
                
                <p>When hydrocarbons are burnt in air they react with oxygen to release the energy stored in their covalent bonds in the form of light and heat.
                    <div class={styles.inset}>
                        <span>Hydrocarbon + oxygen → carbon dioxide + water + energy (light and heat)</span>
                        <span>e.g. CH<span class={styles.sub}>4</span> + 2O<span class={styles.sub}>2</span> → 2H<span class={styles.sub}>2</span>O + CO<span class={styles.sub}>2</span> + energy</span>
                        <div><a href="https://energyeducation.ca/encyclopedia/Hydrocarbon_combustion">Hydrocarbon combustion</a></div>
                    </div>
                </p>

                <p>The amount of energy released depends on the bonds between atoms in a molecule. Methane, which has 4 single bonds, burns at around 1,950°C in air. Natural gas, tailored for domestic use, is ~90% methane and burns at about 1,100°C.</p>

                <p><span><a href="https://en.wikipedia.org/wiki/Acetylene">Acetylene</a></span> C<span class={styles.sub}>2</span>H<span class={styles.sub}>2</span> burns at around 3,330°C in pure oxygen (oxyacetylene process) making it suitable for welding and cutting metals. The bulk of the energy released from acetylene is derived from the triple bond that exists between the two carbon atoms in each molecule.</p>

                <h4>The sun</h4>

                <p>The energy from fossil fuels is derived from the sun; photons absorbed by chlorophyll excite electrons and thereby enable the processes by which photosynthesis produces organic compounds. Fossil fuels are a concentrated form of this energy.</p>

                <p> Solar and wind power are renewable energy sources because the energy we obtain from them can be replaced immediately (by the sun).</p>

                <p>
                    <div class={styles.inset}>
                        <span>Fossil fuels take ~1 million years to form. They have high energy and power densities.</span>
                        <span>Renewables are constantly replenished by the sun's energy. They have low energy and power densities.</span>
                        <span>In one year we release energy that took a million years to form.</span>
                        <div><Links.InternalLink link={{'value': 'facts#energy', 'text': 'Energy and power densities'}}></Links.InternalLink></div>
                    </div>
                </p>

                <p>The only energy source not derived from our sun is nuclear which ultimately derives from myriad distant, and now long dead stars.</p>

                <h4>Polymers</h4>

                <p>Because carbon atoms form strong bonds with other carbon atoms as well as the atoms of other elements it is able to form long chains, or polymers. Many of these are critical to life, including RNA , DNA, proteins, lipids and sugars. It is this ability to bind to itself in long chains, form stable compounds with other elements, the proximity of electrons to the nucleus, that makes carbon the best, and perhaps the only, building block of life.</p>

                <h3>CO<span class={styles.sub}>2</span> and the planet</h3>

                <h4>The Carbon Cycle</h4>

                <p>The carbon cycle regulates the flow of carbon through the earth and the atmosphere. How much carbon is in what part of the atmosphere affects temperature which alters conditions on earth to which all life must adapt.</p>

                <p>There is no thermostat which can be set to an ideal temperature, and indeed the temperature of the seas and the land has varied widely over geologic time. The main driver for the climate is the energy reaching us from the sun, a figure which varies according to the earth's orbit and the state of the sun itself . Temperature is also affected by random events such as meteor strikes and volcanic eruptions.</p>

                <p>The climate changes sufficiently slowly that evolution by natural selection is possible. Sudden disruption is catastrophic, and results in the <span><a href="https://en.wikipedia.org/wiki/Extinction_event"></a>mass extinction</span> of huge numbers of species. There have been five such events on earth, including the Permian–Triassic extinction event (the Great Dying) which accounted for 90-96% of all species.</p>

                <p>Species exist when and where conditions are favourable by adaptation and evolution; when they cannot adapt to new conditions, favourable or otherwise, they go extinct.</p>

                <p>Many of the fossil fuels we burn today where laid down when carbon dioxide levels and temperatures were higher than today. The collapse of the Carboniferous rainforest - due to climate change - provided the organic matter that would later become coal.</p>

                <p>By burning that coal, and other fossil fuels, we have begun to change the climate, and because the change is rapid, many species have not, and will not adapt.</p>

                <h4>Carbon emissions and reserves</h4>

                <p>Cumulative <span><a href="https://ourworldindata.org/co2-emissions">emissions</a></span> of carbon dioxide to date are ~1.5 trillion tonnes.
                    <div class={styles.quote}>
                        <span>Remaining reserves in tonnes:  900 coal, 150 oil, 105 gas, 540 shale gas, etc. = 1.695 trillion.</span>
                        <div>Carbon is also found in methane hydrates in polar regions and under the seas. Various estimates put this carbon between 500Gt and 3,000Gt.</div>
                        <div><a href="https://en.wikipedia.org/wiki/Carbon">Wikipedia</a></div>
                    </div>
                </p>

                <h4>The isotopic signature of anthropogenic warming</h4>

                <p>Isotopes are variants of a chemical elment which differ in their number of neutrons. Carbon has 3 isotopes, carbon-12, carbon-13 and carbon-14.</p>

                <h5>How do we know the extra carbon dioxide in the atmosphere is caused by burning fossil fuels?</h5>

                <p>Plants absorb less (heavy) carbon-13 from the atmosphere than (light) carbon-12, and also favour carbon-12 for photosynthesis.</p>

                <p>Therefore when we burn fossil fuels we are releasing carbon that has relatively less carbon-13. This difference can be detected by measuring the relative ratio of carbon isotopes in the atmosphere. The isotopic signature confirms the man-made orgin of current climate change.</p>

                <p>NASA has been monitoring the natural carbon cycle using satellites for some time including <span><a href="https://ocov2.jpl.nasa.gov/">Orbiting Carbon Observatory-2</a></span> and <span><a href="https://ocov3.jpl.nasa.gov/">Orbiting Carbon Observatory-3</a>. Around 2025 they will launch Copernicus CO2 Mission, the first operational carbon dioxide monitoring satellite constellation, focused on monitoring human-produced emissions.</span></p>
                
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
            </section>
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{href:'facts',title:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Carbon;

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
