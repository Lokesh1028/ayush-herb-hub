
export interface Plant {
  id: string;
  commonName: string;
  botanicalName: string;
  familyName: string;
  imageUrl: string;
  description: string;
  medicinalUses: string[];
  partsUsed: string[];
  ailmentsTreated: string[];
  identificationTips: string[];
}

export const plants: Plant[] = [
  {
    "id": "aloe-vera",
    "commonName": "Aloe Vera",
    "botanicalName": "Aloe barbadensis",
    "familyName": "Asphodelaceae",
    "imageUrl": "/src/data/images/alovera.jpeg",
    "description": "Aloe Vera is a succulent plant species known for its thick, fleshy leaves containing a soothing gel. It has been used for centuries in traditional medicine and skincare.",
    "medicinalUses": [
      "Soothes burns (sunburn, minor thermal burns)",
      "Moisturizes and heals skin",
      "Anti-inflammatory properties",
      "Laxative effect (from latex, use cautiously)",
      "Supports digestive health (inner leaf gel)"
    ],
    "partsUsed": [
      "Inner leaf gel",
      "Leaf latex (Aloin)"
    ],
    "ailmentsTreated": [
      "Minor burns and sunburn",
      "Skin irritation and wounds",
      "Dry skin",
      "Constipation (latex)",
      "Psoriasis patches"
    ],
    "identificationTips": [
      "Succulent with thick, fleshy, green leaves",
      "Leaves grow in a rosette pattern from the base",
      "Leaf edges often have small, soft teeth or serrations",
      "Produces yellow or orange tubular flowers on a tall stalk (infrequent indoors)",
      "Cut leaf reveals clear inner gel and yellowish latex beneath the rind"
    ]
  },
  {
    "id": "ashwagandha",
    "commonName": "Ashwagandha",
    "botanicalName": "Withania somnifera",
    "familyName": "Solanaceae",
    "imageUrl": "/src/data/images/Ashwagandha plant.webp",
    "description": "Ashwagandha, also known as Indian Ginseng or Winter Cherry, is a key adaptogenic herb in Ayurvedic medicine. Its name relates to the scent of its root and its traditional use for strength.",
    "medicinalUses": [
      "Adaptogen for stress reduction",
      "Enhances physical and mental stamina",
      "Improves cognitive function",
      "Supports immune system function",
      "Promotes healthy sleep patterns"
    ],
    "partsUsed": [
      "Root",
      "Leaves",
      "Berries (occasionally)"
    ],
    "ailmentsTreated": [
      "Stress and anxiety",
      "Fatigue and weakness",
      "Insomnia",
      "Cognitive support",
      "Inflammatory conditions"
    ],
    "identificationTips": [
      "Shrub growing 1-4 feet tall",
      "Dull green, ovate leaves (egg-shaped)",
      "Small, bell-shaped, green-yellow flowers",
      "Orange-red berry-like fruits enclosed in papery husks (calyx)",
      "Thick, fleshy, brownish roots"
    ]
  },
  {
    "id": "brahmi",
    "commonName": "Brahmi",
    "botanicalName": "Bacopa monnieri",
    "familyName": "Plantaginaceae",
    "imageUrl": "/src/data/images/Brahmi full.webp",
    "description": "Brahmi (often referring to Bacopa monnieri) is a renowned Ayurvedic herb celebrated for its cognitive-enhancing properties. It's a creeping perennial often found in wet, marshy areas.",
    "medicinalUses": [
      "Enhances memory and learning",
      "Improves concentration and focus",
      "Reduces anxiety",
      "Acts as a nervine tonic",
      "Antioxidant properties"
    ],
    "partsUsed": [
      "Whole plant (leaves and stems primarily)"
    ],
    "ailmentsTreated": [
      "Memory impairment",
      "Anxiety",
      "Cognitive decline",
      "Stress",
      "Attention Deficit Hyperactivity Disorder (ADHD) support"
    ],
    "identificationTips": [
      "Creeping, non-aromatic herb",
      "Small, succulent, oblong leaves arranged oppositely on the stem",
      "Grows in wet, marshy, or aquatic environments",
      "Produces small, white or pale blue/purple flowers with 4-5 petals",
      "Stems are fleshy"
    ]
  },
  {
    "id": "cardamom",
    "commonName": "Cardamom (Green)",
    "botanicalName": "Elettaria cardamomum",
    "familyName": "Zingiberaceae",
    "imageUrl": "/src/data/images/Cardamom full.webp",
    "description": "Cardamom, the 'Queen of Spices,' is a highly aromatic spice derived from the seeds of plants in the ginger family. It's widely used in culinary applications and traditional medicine, especially for digestion.",
    "medicinalUses": [
      "Aids digestion, reduces bloating and gas (carminative)",
      "Freshens breath",
      "Antioxidant and diuretic properties",
      "May help lower blood pressure",
      "Anti-inflammatory effects"
    ],
    "partsUsed": [
      "Seeds (primarily)",
      "Pods (contain seeds, used whole or ground)"
    ],
    "ailmentsTreated": [
      "Indigestion",
      "Bloating and flatulence",
      "Bad breath (halitosis)",
      "Nausea",
      "Loss of appetite"
    ],
    "identificationTips": [
      "Perennial herbaceous plant growing up to 6-10 feet tall",
      "Large, lance-shaped leaves",
      "Flowers grow on separate flowering stalks near the ground",
      "Fruit is a small, spindle-shaped green pod containing small black seeds",
      "Distinctive strong, sweet, slightly pungent aroma"
    ]
  },
  {
    "id": "chamomile",
    "commonName": "Chamomile (German)",
    "botanicalName": "Matricaria chamomilla",
    "familyName": "Asteraceae",
    "imageUrl": "/src/data/images/chamomile-tea.webp",
    "description": "Chamomile refers to several daisy-like plants, most commonly German Chamomile. It's widely known for its calming properties and is frequently consumed as a tea.",
    "medicinalUses": [
      "Promotes relaxation and sleep (mild sedative)",
      "Soothes digestive upset, reduces gas",
      "Anti-inflammatory properties",
      "Reduces anxiety",
      "Skin soothing (topical)"
    ],
    "partsUsed": [
      "Flowers"
    ],
    "ailmentsTreated": [
      "Insomnia",
      "Anxiety and stress",
      "Indigestion, colic, gas",
      "Menstrual cramps",
      "Skin irritation (rashes, eczema - topical)"
    ],
    "identificationTips": [
      "Annual plant, 1-2 feet tall",
      "Fine, feathery, bi-pinnate leaves",
      "Small, daisy-like flowers with white petals surrounding a yellow conical center (receptacle)",
      "Hollow receptacle (distinguishes German from Roman Chamomile)",
      "Sweet, apple-like fragrance"
    ]
  },
  {
    "id": "cinnamon",
    "commonName": "Cinnamon",
    "botanicalName": "Cinnamomum verum (Ceylon) / Cinnamomum cassia (Cassia)",
    "familyName": "Lauraceae",
    "imageUrl": "/src/data/images/Cinnamon full.webp",
    "description": "Cinnamon is a popular spice obtained from the inner bark of several tree species from the genus Cinnamomum. It's known for its warm, sweet flavor and aroma, and various health benefits.",
    "medicinalUses": [
      "Helps regulate blood sugar levels",
      "Potent antioxidant activity",
      "Anti-inflammatory properties",
      "Antimicrobial effects",
      "Warming digestive aid"
    ],
    "partsUsed": [
      "Inner bark (sticks or ground powder)"
    ],
    "ailmentsTreated": [
      "Blood sugar management support (Type 2 Diabetes)",
      "Common cold symptoms",
      "Indigestion",
      "Loss of appetite",
      "Metabolic syndrome support"
    ],
    "identificationTips": [
      "Evergreen tree (source)",
      "Bark is harvested and dried into quills (sticks) or ground",
      "Ceylon cinnamon has thinner, layered quills and a lighter color/milder flavor",
      "Cassia cinnamon has thicker, harder bark, darker color, and stronger flavor",
      "Distinctive sweet, woody, warm aroma"
    ]
  },
  {
    "id": "clove",
    "commonName": "Clove",
    "botanicalName": "Syzygium aromaticum",
    "familyName": "Myrtaceae",
    "imageUrl": "/src/data/images/Clove full.webp",
    "description": "Cloves are the aromatic dried flower buds of an evergreen tree native to Indonesia. They are used as a spice in cooking and have significant medicinal properties, particularly analgesic and antiseptic.",
    "medicinalUses": [
      "Analgesic (pain relief, especially toothache)",
      "Antiseptic and antimicrobial",
      "Anti-inflammatory",
      "Antioxidant",
      "Aids digestion"
    ],
    "partsUsed": [
      "Dried flower buds"
    ],
    "ailmentsTreated": [
      "Toothache",
      "Gum infections",
      "Indigestion",
      "Nausea and vomiting",
      "Respiratory conditions (cough, cold - component of remedies)"
    ],
    "identificationTips": [
      "Evergreen tree (source)",
      "Product is the small, reddish-brown dried flower bud",
      "Nail-like shape with a bulbous top",
      "Strong, pungent, sweet, and warm aroma",
      "Releases oil when pressed"
    ]
  },
  {
    "id": "dandelion",
    "commonName": "Dandelion",
    "botanicalName": "Taraxacum officinale",
    "familyName": "Asteraceae",
    "imageUrl": "/src/data/images/dandelion-roots-with-leaves.webp",
    "description": "Often considered a weed, Dandelion is a highly nutritious plant whose leaves, flowers, and roots have been used in traditional medicine for liver support, digestion, and as a diuretic.",
    "medicinalUses": [
      "Supports liver function and detoxification",
      "Mild diuretic (root and leaf)",
      "Stimulates appetite and aids digestion (bitter)",
      "Rich source of vitamins and minerals",
      "Anti-inflammatory properties"
    ],
    "partsUsed": [
      "Root",
      "Leaves",
      "Flowers"
    ],
    "ailmentsTreated": [
      "Liver congestion",
      "Poor digestion, loss of appetite",
      "Fluid retention (mild)",
      "Constipation",
      "Skin conditions (related to liver function)"
    ],
    "identificationTips": [
      "Perennial herb with a basal rosette of leaves",
      "Deeply toothed, hairless leaves (lion's tooth shape)",
      "Hollow flower stalk bearing a single yellow composite flower head",
      "Flower head closes at night/in rain",
      "Produces characteristic 'puffball' seed head (pappus)" ,
      "Exudes milky latex when broken"
    ]
  },
  {
    "id": "eucalyptus",
    "commonName": "Eucalyptus",
    "botanicalName": "Eucalyptus globulus (Blue Gum) / other species",
    "familyName": "Myrtaceae",
    "imageUrl": "/src/data/images/Eucalyptus fu,ll.webp",
    "description": "Eucalyptus refers to a large genus of trees and shrubs, primarily native to Australia. The leaves, especially from Eucalyptus globulus, yield an oil known for its strong camphoraceous scent and use in respiratory remedies.",
    "medicinalUses": [
      "Decongestant (helps clear nasal passages)",
      "Expectorant (helps loosen phlegm)",
      "Antiseptic and antibacterial",
      "Anti-inflammatory",
      "Analgesic (mild pain relief when applied topically)"
    ],
    "partsUsed": [
      "Leaves (for oil extraction or infusions)",
      "Essential oil"
    ],
    "ailmentsTreated": [
      "Common cold and flu symptoms",
      "Cough and bronchitis",
      "Sinusitis",
      "Asthma support (inhalation)",
      "Muscle aches and pains (topical)"
    ],
    "identificationTips": [
      "Typically tall evergreen trees (some shrub forms)",
      "Leaves often change shape from juvenile (round, blue-grey) to adult (long, sickle-shaped, green)",
      "Distinctive strong, pungent, camphor-like aroma from crushed leaves",
      "Characteristic 'gum nuts' (woody fruit capsules)",
      "Bark can be smooth, fibrous, or rough depending on species"
    ]
  },
  {
    "id": "fenugreek",
    "commonName": "Fenugreek",
    "botanicalName": "Trigonella foenum-graecum",
    "familyName": "Fabaceae",
    "imageUrl": "/src/data/images/Eucalyptus fu,ll.webp",
    "description": "Fenugreek is an annual plant whose seeds and leaves are common ingredients in Indian cuisine. The seeds have a distinct maple-like aroma and taste and are used traditionally for blood sugar control and lactation support.",
    "medicinalUses": [
      "Helps lower blood sugar levels",
      "May help lower cholesterol",
      "Increases milk production in breastfeeding mothers (galactagogue)",
      "Aids digestion",
      "Anti-inflammatory effects"
    ],
    "partsUsed": [
      "Seeds",
      "Leaves (fresh or dried - 'Kasuri Methi')"
    ],
    "ailmentsTreated": [
      "Diabetes management support",
      "High cholesterol support",
      "Low milk supply (lactation)",
      "Loss of appetite",
      "Gastritis and indigestion"
    ],
    "identificationTips": [
      "Annual herb, 1-2 feet tall",
      "Trifoliate leaves (three small ovate to oblong leaflets)",
      "Small, white or yellowish-white pea-like flowers",
      "Produces long, slender, curved pods containing 10-20 seeds",
      "Seeds are small, hard, yellowish-brown, angular, with a groove" ,
      "Distinctive bittersweet aroma/flavor, reminiscent of maple syrup"
    ]
  },
  {
    "id": "garlic",
    "commonName": "Garlic",
    "botanicalName": "Allium sativum",
    "familyName": "Amaryllidaceae",
    "imageUrl": "/src/data/images/Garlic uses.webp",
    "description": "Garlic is a species in the onion genus, Allium, widely used worldwide as a flavoring agent and traditional medicine. It's known for its pungent aroma and potent health benefits, particularly for cardiovascular health.",
    "medicinalUses": [
      "Supports cardiovascular health (blood pressure, cholesterol)",
      "Potent antimicrobial (antibacterial, antiviral, antifungal)",
      "Boosts immune system function",
      "Antioxidant properties",
      "Anti-inflammatory effects"
    ],
    "partsUsed": [
      "Bulb (cloves)"
    ],
    "ailmentsTreated": [
      "High blood pressure support",
      "High cholesterol support",
      "Common cold and infections",
      "Fungal infections (e.g., Athlete's foot - topical)",
      "Atherosclerosis prevention support"
    ],
    "identificationTips": [
      "Perennial plant grown as annual",
      "Produces a composite bulb made up of individual sections called cloves",
      "Bulb covered in papery tunic (skin)",
      "Long, flat, green leaves",
      "Produces a tall flower stalk (scape) with pinkish or whitish flowers (often removed)",
      "Strong, pungent sulfurous odor when crushed or cut"
    ]
  },
  {
    "id": "ginger",
    "commonName": "Ginger",
    "botanicalName": "Zingiber officinale",
    "familyName": "Zingiberaceae",
    "imageUrl": "/src/data/images/Ginger full.webp",
    "description": "Ginger is a flowering plant whose rhizome (underground stem) is widely used as a spice and folk medicine. It has a pungent, spicy-sweet flavor and aroma, and is well-known for its anti-nausea and digestive properties.",
    "medicinalUses": [
      "Anti-nausea (motion sickness, morning sickness, chemotherapy-induced)",
      "Aids digestion, reduces gas and bloating",
      "Potent anti-inflammatory",
      "Antioxidant properties",
      "Circulation stimulant, warming"
    ],
    "partsUsed": [
      "Rhizome (fresh or dried)"
    ],
    "ailmentsTreated": [
      "Nausea and vomiting",
      "Motion sickness",
      "Indigestion",
      "Arthritis and inflammatory pain",
      "Common cold and flu symptoms"
    ],
    "identificationTips": [
      "Tropical perennial herb (source of rhizome)",
      "Grows leafy stems 2-4 feet tall",
      "Narrow, lance-shaped leaves",
      "Produces cone-like spikes of pale yellow/green flowers (less common in cultivation)",
      "Rhizome is knobby, branched, light brown skin, yellowish fibrous flesh",
      "Pungent, spicy aroma and taste"
    ]
  },
  {
    "id": "guduchi-giloy",
    "commonName": "Guduchi (Giloy)",
    "botanicalName": "Tinospora cordifolia",
    "familyName": "Menispermaceae",
    "imageUrl": "/src/data/images/Guduchi (Giloy) leaf.webp",
    "description": "Guduchi, also known as Giloy or Amrita ('Nectar of Immortality'), is a large climbing shrub highly revered in Ayurveda as a potent immunomodulator and rejuvenator.",
    "medicinalUses": [
      "Boosts immune system function (immunomodulator)",
      "Reduces fever (antipyretic)",
      "Supports liver detoxification",
      "Anti-inflammatory properties",
      "Adaptogenic, helps manage stress"
    ],
    "partsUsed": [
      "Stem (primarily)",
      "Leaves",
      "Root"
    ],
    "ailmentsTreated": [
      "Fevers (especially chronic)",
      "Infections",
      "Allergies (e.g., hay fever)",
      "Liver disorders",
      "Arthritis and gout" ,
      "General debility"
    ],
    "identificationTips": [
      "Large, deciduous climbing shrub",
      "Heart-shaped leaves (cordifolia means heart-leaved)",
      "Stems are succulent, greenish-grey, often with warty dots (lenticels)",
      "Mature stems develop a corky bark",
      "Produces long, slender aerial roots",
      "Small yellowish flowers in clusters; produces red berry-like drupes"
    ]
  },
  {
    "id": "lemon-grass",
    "commonName": "Lemon Grass",
    "botanicalName": "Cymbopogon citratus / Cymbopogon flexuosus",
    "familyName": "Poaceae",
    "imageUrl": "/src/data/images/lemongrass-full.webp",
    "description": "Lemon Grass is a tropical grass known for its distinct lemon fragrance and flavor. It's widely used in Southeast Asian cuisine and traditional medicine, particularly for digestion and fever.",
    "medicinalUses": [
      "Aids digestion, relieves stomach cramps",
      "Reduces fever (mild diaphoretic)",
      "Antimicrobial and antifungal properties",
      "Anti-inflammatory effects",
      "Mild sedative, may reduce anxiety"
    ],
    "partsUsed": [
      "Stalks (lower part)",
      "Leaves"
    ],
    "ailmentsTreated": [
      "Indigestion, bloating, gas",
      "Fever",
      "Common cold symptoms",
      "Anxiety and nervousness",
      "Muscle cramps"
    ],
    "identificationTips": [
      "Tall perennial grass, grows in dense clumps (3-6 feet)",
      "Long, sharp-edged, linear leaves, greyish-green color",
      "Stems (culms) are thick and fleshy at the base",
      "Strong lemon scent when leaves or stalks are crushed",
      "Flowers (infrequent in cultivation) are borne on long panicles"
    ]
  },
  {
    "id": "licorice-mulethi",
    "commonName": "Licorice (Mulethi)",
    "botanicalName": "Glycyrrhiza glabra",
    "familyName": "Fabaceae",
    "imageUrl": "/src/data/images/Licorice (Mulethi) full.webp",
    "description": "Licorice is a perennial plant whose root is known for its characteristic sweetness (much sweeter than sugar). It has a long history of use in traditional medicine, especially for respiratory and digestive issues.",
    "medicinalUses": [
      "Soothes sore throats and coughs (demulcent, expectorant)",
      "Supports adrenal gland function",
      "Anti-inflammatory properties",
      "Heals stomach ulcers and soothes gastritis",
      "Antiviral activity"
    ],
    "partsUsed": [
      "Root and rhizome"
    ],
    "ailmentsTreated": [
      "Sore throat, cough, bronchitis",
      "Adrenal fatigue support",
      "Peptic ulcers, heartburn, gastritis",
      "Eczema (topical)",
      "Viral infections (e.g., herpes support)"
    ],
    "identificationTips": [
      "Herbaceous perennial, 3-5 feet tall",
      "Pinnately compound leaves (multiple leaflets off a central stem)",
      "Produces spikes of purple to pale blue pea-like flowers",
      "Develops pods containing several seeds",
      "Root system is extensive, with long main roots and rhizomes",
      "Dried root is fibrous, yellowish inside, with characteristic sweet taste"
    ]
  },
  {
    "id": "neem",
    "commonName": "Neem",
    "botanicalName": "Azadirachta indica",
    "familyName": "Meliaceae",
    "imageUrl": "/src/data/images/neem full.webp",
    "description": "Neem is a fast-growing evergreen tree native to the Indian subcontinent, revered as the 'village pharmacy'. Nearly all parts of the tree are used in traditional medicine for their potent antimicrobial and purifying properties.",
    "medicinalUses": [
      "Potent antimicrobial (antibacterial, antifungal, antiviral)",
      "Blood purifier",
      "Supports skin health",
      "Anti-inflammatory",
      "Used in dental hygiene (twigs)" ,
      "Insecticidal properties"
    ],
    "partsUsed": [
      "Leaves",
      "Bark",
      "Seeds (oil)",
      "Flowers",
      "Twigs"
    ],
    "ailmentsTreated": [
      "Skin diseases (acne, eczema, psoriasis)",
      "Fungal infections",
      "Dental plaque and gingivitis",
      "Malaria support (traditional)",
      "Diabetes support"
    ],
    "identificationTips": [
      "Medium to large evergreen tree",
      "Pinnately compound leaves with many pointed, serrated leaflets",
      "Produces clusters of small, white, fragrant flowers",
      "Fruit is a small, yellow-green, olive-like drupe",
      "Bark is greyish-brown, rough and fissured",
      "Leaves have a very bitter taste"
    ]
  },
  {
    "id": "shatavari",
    "commonName": "Shatavari",
    "botanicalName": "Asparagus racemosus",
    "familyName": "Asparagaceae",
    "imageUrl": "/src/data/images/Shatavari full.webp",
    "description": "Shatavari, meaning 'she who possesses a hundred husbands,' is a species of asparagus renowned in Ayurveda as a primary female reproductive tonic and adaptogen.",
    "medicinalUses": [
      "Supports female reproductive health",
      "Balances hormones",
      "Adaptogen, helps body cope with stress",
      "Supports lactation",
      "Soothes digestive tract (demulcent)",
      "Boosts immunity"
    ],
    "partsUsed": [
      "Root"
    ],
    "ailmentsTreated": [
      "Menstrual irregularities",
      "Menopausal symptoms",
      "Infertility support",
      "Low milk supply",
      "Gastric ulcers, hyperacidity" ,
      "Stress and fatigue"
    ],
    "identificationTips": [
      "Climbing perennial plant with woody stems",
      "Small, needle-like 'leaves' (actually cladodes - modified stems)",
      "Produces small, white, fragrant flowers in clusters",
      "Develops small, red berries",
      "Root system consists of numerous tuberous, finger-like roots (the part used)",
      "Roots are whitish-brown, tapering at ends"
    ]
  },
  {
    "id": "tulsi",
    "commonName": "Tulsi (Holy Basil)",
    "botanicalName": "Ocimum tenuiflorum / Ocimum sanctum",
    "familyName": "Lamiaceae",
    "imageUrl": "/src/data/images/tulsi full.webp",
    "description": "Tulsi, or Holy Basil, is a sacred aromatic plant in Hinduism and widely used in Ayurveda. It's considered an adaptogen with numerous benefits for immunity, stress, and respiratory health.",
    "medicinalUses": [
      "Adaptogen, helps manage stress",
      "Boosts immunity",
      "Supports respiratory health (expectorant, decongestant)",
      "Antimicrobial (antibacterial, antiviral)",
      "Antioxidant and anti-inflammatory"
    ],
    "partsUsed": [
      "Leaves",
      "Seeds",
      "Flowers"
    ],
    "ailmentsTreated": [
      "Stress and anxiety",
      "Common cold, cough, flu",
      "Asthma and bronchitis support",
      "Fever",
      "Headaches"
    ],
    "identificationTips": [
      "Aromatic, erect, multi-branched sub-shrub (1-2 feet tall)",
      "Leaves are typically green or purple, ovate, slightly toothed, and hairy",
      "Stems are often hairy",
      "Produces small purple or white flowers in elongated spikes (racemes)",
      "Distinctive strong, clove-like or peppery aroma (varies by cultivar)"
    ]
  },
  {
    "id": "turmeric",
    "commonName": "Turmeric",
    "botanicalName": "Curcuma longa",
    "familyName": "Zingiberaceae",
    "imageUrl": "/src/data/images/turmeric plant.webp",
    "description": "Turmeric is a flowering plant of the ginger family, best known for its bright yellow-orange rhizome. It's a staple spice in South Asian cuisine and a cornerstone of Ayurvedic medicine, prized for its potent anti-inflammatory compound, curcumin.",
    "medicinalUses": [
      "Potent anti-inflammatory",
      "Strong antioxidant",
      "Supports joint health",
      "Aids digestion",
      "Supports liver function",
      "May improve brain function"
    ],
    "partsUsed": [
      "Rhizome (fresh or dried and powdered)"
    ],
    "ailmentsTreated": [
      "Arthritis and joint pain",
      "Inflammatory conditions",
      "Digestive disorders",
      "Liver support",
      "Skin conditions (e.g., acne, eczema - internal & topical)" ,
      "Depression support"
    ],
    "identificationTips": [
      "Perennial herbaceous plant (source of rhizome)",
      "Grows large, oblong green leaves from the base (similar to Canna lily)",
      "Produces a flower spike with pale yellow or whitish bracts and flowers (less common when grown for rhizomes)",
      "Rhizome is knobby, finger-like, with rough brown skin",
      "Inside of rhizome is bright yellow-orange",
      "Distinct earthy, slightly bitter, peppery flavor"
    ]
  }
];

export const getPlantById = (id: string): Plant | undefined => {
  return plants.find(plant => plant.id === id);
};

export const searchPlantsByName = (query: string): Plant[] => {
  const lowerCaseQuery = query.toLowerCase().trim();
  return plants.filter(plant => 
    plant.commonName.toLowerCase().includes(lowerCaseQuery) || 
    plant.botanicalName.toLowerCase().includes(lowerCaseQuery)
  );
};

export const searchPlantsByAilment = (query: string): Plant[] => {
  const lowerCaseQuery = query.toLowerCase().trim();
  return plants.filter(plant => 
    plant.ailmentsTreated.some(ailment => 
      ailment.toLowerCase().includes(lowerCaseQuery)
    )
  );
};
