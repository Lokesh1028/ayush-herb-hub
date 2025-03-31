
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
    id: "ashwagandha",
    commonName: "Ashwagandha",
    botanicalName: "Withania somnifera",
    familyName: "Solanaceae",
    imageUrl: "/ashwagandha.jpg",
    description: "Ashwagandha, also known as Indian Ginseng or Winter Cherry, is one of the most important herbs in Ayurvedic medicine. The name Ashwagandha means 'smell of horse,' which refers to both the unique smell of the herb and the traditional belief that consuming it provides the strength and virility of a horse.",
    medicinalUses: [
      "Adaptogen for stress reduction",
      "Enhances physical and mental stamina",
      "Improves cognitive function",
      "Supports immune system function",
      "Promotes healthy sleep patterns"
    ],
    partsUsed: [
      "Root",
      "Leaves",
      "Berries (occasionally)"
    ],
    ailmentsTreated: [
      "Stress and anxiety",
      "Fatigue and weakness",
      "Insomnia",
      "Neurodegenerative conditions",
      "Inflammatory conditions"
    ],
    identificationTips: [
      "Shrub growing 2-3 feet tall",
      "Dull green ovate leaves",
      "Small green-yellow flowers",
      "Red berry-like fruits enclosed in papery husks",
      "Thick, brownish-yellow roots"
    ]
  },
  {
    id: "tulsi",
    commonName: "Tulsi (Holy Basil)",
    botanicalName: "Ocimum sanctum",
    familyName: "Lamiaceae",
    imageUrl: "/tulsi.jpg",
    description: "Tulsi, or Holy Basil, is considered the most sacred herb in Ayurvedic medicine. Often planted around Hindu shrines, it is known as 'The Incomparable One' and 'Mother Medicine of Nature.' It has been used for thousands of years for its diverse healing properties.",
    medicinalUses: [
      "Adaptogen for stress management",
      "Respiratory system support",
      "Digestive health",
      "Blood purifier",
      "Antimicrobial properties"
    ],
    partsUsed: [
      "Leaves",
      "Seeds",
      "Flowers",
      "Stems"
    ],
    ailmentsTreated: [
      "Common cold and flu",
      "Digestive disorders",
      "Respiratory conditions",
      "Stress-related disorders",
      "Skin infections"
    ],
    identificationTips: [
      "Aromatic shrub growing 1-2 feet tall",
      "Purple or green stems",
      "Oval-shaped serrated leaves with strong aroma",
      "Purple or white flowers on terminal spikes",
      "Three varieties: Rama, Krishna, and Vana Tulsi"
    ]
  },
  {
    id: "amla",
    commonName: "Amla (Indian Gooseberry)",
    botanicalName: "Phyllanthus emblica",
    familyName: "Phyllanthaceae",
    imageUrl: "/amla.jpg",
    description: "Amla, or Indian Gooseberry, is one of the most important medicinal plants in Ayurveda. Known as the 'fruit of immortality,' it's prized for its extremely high vitamin C content, which remains stable even through processing. It's mentioned in ancient Ayurvedic texts dating back thousands of years.",
    medicinalUses: [
      "Potent antioxidant",
      "Digestive system support",
      "Immune system enhancement",
      "Liver detoxification",
      "Promotes longevity"
    ],
    partsUsed: [
      "Fruit",
      "Seeds",
      "Leaves",
      "Bark",
      "Root"
    ],
    ailmentsTreated: [
      "Vitamin C deficiency",
      "Digestive disorders",
      "Liver conditions",
      "Diabetes",
      "Skin and hair problems"
    ],
    identificationTips: [
      "Deciduous tree growing up to 60 feet tall",
      "Feathery pinnate leaves with small leaflets",
      "Light green-yellow flowers",
      "Round, light green fruits with six vertical stripes",
      "Sour, astringent taste of fruits"
    ]
  },
  {
    id: "turmeric",
    commonName: "Turmeric",
    botanicalName: "Curcuma longa",
    familyName: "Zingiberaceae",
    imageUrl: "/turmeric.jpg",
    description: "Turmeric has been used in India for thousands of years as both a spice and medicinal herb. Known as the 'Golden Spice,' it contains curcumin, a compound with powerful anti-inflammatory and antioxidant properties. It holds a central place in Ayurvedic medicine and traditional Indian culture.",
    medicinalUses: [
      "Anti-inflammatory",
      "Antioxidant",
      "Digestive aid",
      "Blood purifier",
      "Joint health support"
    ],
    partsUsed: [
      "Rhizome (root)",
      "Leaves (occasionally)"
    ],
    ailmentsTreated: [
      "Inflammatory conditions",
      "Arthritis",
      "Digestive disorders",
      "Skin conditions",
      "Metabolic syndrome"
    ],
    identificationTips: [
      "Perennial herb growing up to 3 feet tall",
      "Large oblong leaves with prominent veins",
      "Pink-white flowers in cone-shaped spikes",
      "Orange-yellow rhizomes when cut",
      "Distinct earthy, bitter aroma"
    ]
  },
  {
    id: "brahmi",
    commonName: "Brahmi",
    botanicalName: "Bacopa monnieri",
    familyName: "Plantaginaceae",
    imageUrl: "/brahmi.jpg",
    description: "Brahmi is one of the most powerful herbs in Ayurvedic medicine, especially renowned for its effects on the brain and nervous system. Named after Lord Brahma, the creator of the universe in Hindu mythology, it has been used for centuries to enhance memory, learning, and concentration.",
    medicinalUses: [
      "Cognitive enhancement",
      "Memory improvement",
      "Adaptogen for stress relief",
      "Nervous system support",
      "Anti-anxiety properties"
    ],
    partsUsed: [
      "Whole plant",
      "Leaves"
    ],
    ailmentsTreated: [
      "Cognitive decline",
      "Anxiety and stress",
      "ADHD symptoms",
      "Epilepsy",
      "Memory disorders"
    ],
    identificationTips: [
      "Creeping herb with succulent leaves",
      "Small white or light purple flowers",
      "Grows in wet, marshy areas",
      "Fleshy, oblong leaves with smooth edges",
      "Spreads horizontally along ground"
    ]
  },
  {
    id: "neem",
    commonName: "Neem",
    botanicalName: "Azadirachta indica",
    familyName: "Meliaceae",
    imageUrl: "/neem.jpg",
    description: "Neem is known as the 'village pharmacy' in India due to its remarkable range of medicinal properties. Virtually every part of the tree has been used in traditional Ayurvedic medicine for thousands of years. It's especially known for its antibacterial, antifungal, and blood-purifying properties.",
    medicinalUses: [
      "Antimicrobial",
      "Blood purifier",
      "Skin treatment",
      "Dental care",
      "Pest repellent"
    ],
    partsUsed: [
      "Leaves",
      "Bark",
      "Seeds",
      "Oil",
      "Flowers"
    ],
    ailmentsTreated: [
      "Skin disorders",
      "Infections",
      "Dental problems",
      "Diabetes",
      "Parasitic infections"
    ],
    identificationTips: [
      "Evergreen tree growing up to 100 feet tall",
      "Compound leaves with serrated leaflets",
      "Small white fragrant flowers",
      "Olive-like fruits changing from green to yellow when ripe",
      "Bitter taste in all parts"
    ]
  },
  {
    id: "shatavari",
    commonName: "Shatavari",
    botanicalName: "Asparagus racemosus",
    familyName: "Asparagaceae",
    imageUrl: "/shatavari.jpg",
    description: "Shatavari, which means 'she who possesses a hundred husbands,' is one of the most important herbs in Ayurvedic medicine for women's health. It has been used for centuries as a female reproductive tonic and is considered to be the main rejuvenative tonic for the female reproductive system.",
    medicinalUses: [
      "Female reproductive tonic",
      "Galactagogue (promotes lactation)",
      "Adaptogen for stress management",
      "Digestive support",
      "Immune system enhancement"
    ],
    partsUsed: [
      "Roots",
      "Rhizomes"
    ],
    ailmentsTreated: [
      "Female reproductive disorders",
      "Menopausal symptoms",
      "Lactation issues",
      "Digestive disorders",
      "General debility"
    ],
    identificationTips: [
      "Climbing plant with thorny stems",
      "Small white flowers",
      "Needle-like cladodes (modified stems)",
      "Red berries when ripe",
      "Distinctive tuberous roots with finger-like projections"
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
