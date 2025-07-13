
import { Product, Material, Amulet, MaterialDetail, BlogPost, AmberColorDetail, Metal, BeadSize, AmberSpectrumDetail, NavLink, ShopCategory } from './types';

export const BACKGROUND_IMAGES = [
  'https://i.postimg.cc/Xq6LWZ0y/Vicky-Amber-Gems-background-001.jpg',
  'https://i.postimg.cc/YSjbzK3j/Vicky-Amber-Gems-background-0010.jpg',
  'https://i.postimg.cc/JzppX4j9/Vicky-Amber-Gems-background-0011.jpg',
  'https://i.postimg.cc/L89yhZgt/Vicky-Amber-Gems-background-0012.jpg',
  'https://i.postimg.cc/7YMsxNhP/Vicky-Amber-Gems-background-0013.jpg',
  'https://i.postimg.cc/pXtcbS21/Vicky-Amber-Gems-background-0014.jpg',
  'https://i.postimg.cc/BZF7z3GK/Vicky-Amber-Gems-background-0015.jpg',
  'https://i.postimg.cc/cCfDtRcm/Vicky-Amber-Gems-background-0016.jpg',
  'https://i.postimg.cc/Twz7P7n1/Vicky-Amber-Gems-background-0017.jpg',
  'https://i.postimg.cc/fLtqDnt1/Vicky-Amber-Gems-background-0018.jpg',
  'https://i.postimg.cc/KYsp6vzn/Vicky-Amber-Gems-background-0019.jpg',
  'https://i.postimg.cc/Bn7C6703/Vicky-Amber-Gems-background-002.jpg',
  'https://i.postimg.cc/XvvD1yVj/Vicky-Amber-Gems-background-0020.jpg',
  'https://i.postimg.cc/vZhNvvw2/Vicky-Amber-Gems-background-0021.jpg',
  'https://i.postimg.cc/cL0zYb28/Vicky-Amber-Gems-background-0022.jpg',
  'https://i.postimg.cc/L6z7JpCp/Vicky-Amber-Gems-background-0023.jpg',
  'https://i.postimg.cc/15x2RtKB/Vicky-Amber-Gems-background-0024.jpg',
  'https://i.postimg.cc/59QDMv8j/Vicky-Amber-Gems-background-0025.jpg',
  'https://i.postimg.cc/4yc0bkXp/Vicky-Amber-Gems-background-0026.jpg',
  'https://i.postimg.cc/j5m97dYs/Vicky-Amber-Gems-background-0027.jpg',
  'https://i.postimg.cc/vBckTxjq/Vicky-Amber-Gems-background-0028.jpg',
  'https://i.postimg.cc/1zWbyrWV/Vicky-Amber-Gems-background-0029.jpg',
  'https://i.postimg.cc/8zzHTQxw/Vicky-Amber-Gems-background-003.jpg',
  'https://i.postimg.cc/ZqY1kMLh/Vicky-Amber-Gems-background-0030.jpg',
  'https://i.postimg.cc/3xFPcTmB/Vicky-Amber-Gems-background-0031.jpg',
  'https://i.postimg.cc/g2WCsJXj/Vicky-Amber-Gems-background-0032.jpg',
  'https://i.postimg.cc/gcfFw4Gv/Vicky-Amber-Gems-background-0033.jpg',
  'https://i.postimg.cc/ZY9zKXzb/Vicky-Amber-Gems-background-0034.jpg',
  'https://i.postimg.cc/hvQsW9wn/Vicky-Amber-Gems-background-0035.jpg',
  'https://i.postimg.cc/6Ts098Jv/Vicky-Amber-Gems-background-0036.jpg',
  'https://i.postimg.cc/SsvdvZgV/Vicky-Amber-Gems-background-0037.jpg',
  'https://i.postimg.cc/j55vvV4L/Vicky-Amber-Gems-background-0038.jpg',
  'https://i.postimg.cc/nLn3j9sK/Vicky-Amber-Gems-background-0039.jpg',
  'https://i.postimg.cc/hPrsFPZf/Vicky-Amber-Gems-background-004.jpg',
  'https://i.postimg.cc/bwx6w9vN/Vicky-Amber-Gems-background-0040.jpg',
  'https://i.postimg.cc/s2KwpfSk/Vicky-Amber-Gems-background-0041.jpg',
  'https://i.postimg.cc/4xkLGSsS/Vicky-Amber-Gems-background-0042.jpg',
  'https://i.postimg.cc/L5JC4dJr/Vicky-Amber-Gems-background-0043.jpg',
  'https://i.postimg.cc/Vv27d7M5/Vicky-Amber-Gems-background-0044.jpg',
  'https://i.postimg.cc/DybjtTkG/Vicky-Amber-Gems-background-0045.jpg',
  'https://i.postimg.cc/G3fg7pNr/Vicky-Amber-Gems-background-0046.jpg',
  'https://i.postimg.cc/TYG0HW9z/Vicky-Amber-Gems-background-005.jpg',
  'https://i.postimg.cc/3r29BZgj/Vicky-Amber-Gems-background-006.jpg',
  'https://i.postimg.cc/Vv9RkYYZ/Vicky-Amber-Gems-background-007.jpg',
  'https://i.postimg.cc/XJCLtftb/Vicky-Amber-Gems-background-008.jpg',
  'https://i.postimg.cc/yN5nfQQj/Vicky-Amber-Gems-background-009.jpg',
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { 
    name: 'About Us & Policies',
    submenus: [
      { name: 'Our Story', path: '/about' },
      { name: 'Our Guarantee', path: '/our-guarantee' },
      { name: 'How to Take Care', path: '/policies/care-guide' },
      { name: 'Pre-Order Policy', path: '/policies/pre-order' },
      { name: 'Shipping & Delivery Policy', path: '/policies/shipping' },
      { name: 'Warranty Policy', path: '/policies/warranty' },
      { name: 'Return Policy', path: '/policies/returns' },
      { name: 'Privacy Policy', path: '/policies/privacy' },
    ]
  },
  {
    name: 'All About Burmese Amber',
    submenus: [
        { name: 'History of Burmese Amber', path: '/amber-guide/history' },
        { name: 'Where Burmese Amber is Found', path: '/amber-guide/location' },
        { name: 'Why Oldest Amber is in Myanmar', path: '/amber-guide/uniqueness' },
        { name: 'How Burmese Amber is Formed', path: '/amber-guide/formation' },
        { name: 'Physical & Chemical Properties', path: '/amber-guide/properties' },
        { name: 'Authenticate Burmese Amber', path: '/amber-guide/authentication' },
        { name: 'The Different Types of Amber', path: '/amber-colors' },
        { name: 'The Variety of Colors & Tones', path: '/policies/colors-and-tones' },
        { name: 'Use in the Gems Industry', path: '/amber-guide/industry-use' },
        { name: 'Comparisons to Other Ambers', path: '/amber-guide/comparison-ambers' },
        { name: 'Comparisons to Other Minerals', path: '/amber-guide/comparison-minerals' },
        { name: 'Current Availability', path: '/amber-guide/availability' },
        { name: 'Mining Regulations & Restrictions', path: '/amber-guide/regulations' },
        { name: 'Future Trends', path: '/amber-guide/future-trends' },
        { name: 'Future Tech & Amber', path: '/amber-guide/future-tech' },
        { name: 'Roles in Current Markets', path: '/amber-guide/markets' },
        { name: 'Roles in Religious Practice', path: '/amber-guide/religion' },
    ]
  },
  { name: 'Blogs', path: '/blog' },
  { name: 'Shop', path: '/collection' },
  { name: 'Get to Know GIT', path: '/git-info' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact Us', path: '/contact' }
];

export const SHOP_CATEGORIES: ShopCategory[] = [
    { name: 'Bracelets', slug: 'bracelets' },
    { 
        name: 'Prayer Beads', 
        slug: 'prayer-beads',
        subCategories: [
            { name: '27 Beads', slug: 'prayer-beads-27' },
            { name: '54 Beads', slug: 'prayer-beads-54' },
            { name: '108 Beads', slug: 'prayer-beads-108' },
        ]
    },
    { name: 'Amber Pendants', slug: 'pendants' },
    { name: 'Amber Rings', slug: 'rings' },
    { name: 'Amber Necklaces', slug: 'necklaces' },
    { 
        name: 'Decorative Stones', 
        slug: 'decorative-stones',
        subCategories: [
            { name: 'Fossil Coral', slug: 'decorative-stones-fossil-coral' },
            { name: 'Agate', slug: 'decorative-stones-agate' },
            { name: 'Jade', slug: 'decorative-stones-jade' },
        ]
    },
];

const generateBeadSpecs = (): { size: BeadSize; weight: number }[] => {
    const specs = [];
    const density = 1.08; // g/cm³ for Burmese Amber

    for (let size_mm = 8; size_mm <= 14; size_mm += 0.25) {
        // Convert diameter in mm to radius in cm
        const radius_cm = (size_mm / 10) / 2;
        // Calculate volume of a sphere in cm³: V = (4/3) * PI * r^3
        const volume_cm3 = (4 / 3) * Math.PI * Math.pow(radius_cm, 3);
        // Calculate weight in grams: Weight = Volume * Density
        const weight_g = volume_cm3 * density;
        
        specs.push({
            size: size_mm,
            weight: parseFloat(weight_g.toFixed(4)) // Round to 4 decimal places for precision
        });
    }
    return specs;
};

export const BEAD_SPECS: { size: BeadSize; weight: number }[] = generateBeadSpecs();


export const PRODUCTS: Product[] = [
  {
    id: 'p1-mila-108',
    sku: 'VAG-MLA-8-108',
    name: "Emperor's Gold 'Mila' Mala",
    category: 'prayer-beads-108',
    material: Material.Amber,
    price: 259200, // 3000/g * 0.8g/bead * 108 beads
    bestseller: true,
    isNewArrival: true,
    story: 'Crafted from the rarest Mila amber, this 108-bead mala embodies imperial elegance. Its semi-liquid, semi-solid texture creates a dimension of unparalleled richness, making it a highly collectible, investment-grade piece.',
    energyProperties: ['Prosperity', 'Enlightenment', 'Royal Power'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/C8A97E/2a2a2a?text=Mila+Amber',
      gallery: ['https://placehold.co/600x600/C8A97E/2a2a2a?text=Mila+Amber+View+1', 'https://placehold.co/600x600/C8A97E/2a2a2a?text=Mila+Amber+View+2', 'https://placehold.co/600x600/FBF9F6/2a2a2a?text=On+Display']
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 108,
      totalWeight_grams: 86.4,
      clarityLevel: "Premium Grade - High Clarity",
      patterns: "Contains distinctive 3D 'Swirl Cloud' patterns.",
      finish: "Machine-rounded and precisely cut.",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIA',
      certificateNumber: 'GIA-123456789'
    },
    amberDetails: {
      colorTier: "Mila (Emperor Gold)",
      colorSlug: "mila",
      description: "A luxurious golden candle-like color, with a semi-liquid and semi-solid texture blended in one piece.",
      rarity: "Extremely rare and visually stunning.",
      specialNote: "Highly collectible grade.",
      basePricePerGram: 3000,
      richnessScore: 9, // High tier
    },
    tierExplanations: {
      "Mila": "This piece exhibits the coveted 'Mila' characteristic—a semi-liquid and semi-solid texture blended into one, giving it unparalleled depth. This is a sign of its extreme rarity."
    },
    inventory: {
      stock: 2,
      isAvailable: true
    }
  },
   {
    id: 'p3-spinel-bracelet',
    sku: 'VAG-SPN-BR-8',
    name: 'Spinel Guardian Bracelet',
    category: 'bracelets',
    material: Material.Spinel,
    price: 6615,
    bestseller: true,
    story: 'Spinel is a powerful protective stone, historically mistaken for ruby. This bracelet features dark, shimmering beads used to ward off negative energy and ground the spirit.',
    energyProperties: ['Protection', 'Grounding', 'Clarity'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/3D4054/FBF9F6?text=Spinel',
      gallery: []
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 27,
      totalWeight_grams: 29.7,
      clarityLevel: "A Grade",
      finish: "Machine-rounded and polished.",
      origin: 'Pein Pyit, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'In-house'
    },
    inventory: {
      stock: 8,
      isAvailable: true
    }
  },
  {
    id: 'new-red-brown-bracelet',
    sku: 'VAG-RDB-10-27',
    name: 'Red-Brown Amber Bracelet',
    category: 'bracelets',
    material: Material.Amber,
    price: 9720,
    isNewArrival: true,
    story: 'This bracelet features a rich, earthy red-brown amber, combining the grounding properties of brown amber with the vitality of red. A stone of stability and strength.',
    energyProperties: ['Stability', 'Strength', 'Grounding'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/9F5C46/FBF9F6?text=Red-Brown+Amber',
      gallery: []
    },
    specifications: {
      beadSize_mm: 10,
      beadCount: 27,
      totalWeight_grams: 32.4,
      clarityLevel: "A Grade",
      finish: "Machine-rounded and polished.",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'In-house'
    },
    amberDetails: {
      colorTier: 'Red-Brown Amber',
      colorSlug: 'red_brown',
      description: 'A deep, warm blend of red and brown tones.',
      rarity: 'Uncommon',
      specialNote: 'Rich, earthy coloration.',
      basePricePerGram: 300,
    },
    inventory: {
      stock: 10,
      isAvailable: true
    }
  },
  {
    id: 'new-multicolor-necklace',
    sku: 'VAG-MLT-N-1',
    name: 'Multicolor Burmese Amber Necklace',
    category: 'necklaces',
    material: Material.Amber,
    price: 65000,
    isNewArrival: true,
    story: 'A celebration of diversity, this necklace showcases a spectrum of natural Burmese amber colors, from light honey to deep cherry red. Each bead is a unique piece of history.',
    energyProperties: ['Harmony', 'Balance', 'Joy'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/C8A97E/2a2a2a?text=Multicolor+Amber',
      gallery: []
    },
    specifications: {
      beadSize_mm: 10,
      totalWeight_grams: 65,
      clarityLevel: "Mixed Grades",
      finish: "Machine-rounded and polished.",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: false,
    },
    amberDetails: {
      colorTier: 'Multicolor Amber',
      colorSlug: 'multicolor',
      description: 'A collection of various natural amber colors.',
      rarity: 'Varies per bead',
      specialNote: 'Highlights the natural diversity of Burmite.',
      basePricePerGram: 1000,
    },
    inventory: {
      stock: 3,
      isAvailable: true
    }
  },
    {
    id: 'new-root-amber-pendant',
    sku: 'VAG-ROOT-P-1',
    name: 'Root Amber Pendant with Silver Setting',
    category: 'pendants',
    material: Material.Amber,
    price: 37300,
    isNewArrival: true,
    story: 'This one-of-a-kind pendant features a stunning piece of Root Amber, known for its wood-like organic patterns. Set in 925 Sterling Silver.',
    energyProperties: ['Grounding', 'Connection to Nature', 'Stability'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/6B4F3A/FBF9F6?text=Root+Pendant',
      gallery: []
    },
    specifications: {
      pendantMetal: Metal.Silver,
      totalWeight_grams: 25,
      finish: "Polished cabochon",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'In-house'
    },
    amberDetails: {
      colorTier: 'Root Amber',
      colorSlug: 'root',
      description: 'Opaque amber with wood-like patterns.',
      rarity: 'Uncommon',
      specialNote: 'Pattern is unique to each piece.',
      basePricePerGram: 1500,
    },
    inventory: {
      stock: 7,
      isAvailable: true
    }
  },
  {
    id: 'new-cherry-ring',
    sku: 'VAG-CHY-R-1',
    name: 'Pure Cherry Red Amber Ring',
    category: 'rings',
    material: Material.Amber,
    price: 21500,
    isNewArrival: false,
    story: 'Carved from a single piece of rare, translucent Cherry Red amber, this ring is a statement of pure, vibrant energy. Its glassy clarity is truly exceptional.',
    energyProperties: ['Passion', 'Joy', 'Artistic Inspiration'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/941C20/FBF9F6?text=Cherry+Ring',
      gallery: []
    },
    specifications: {
      ringSize: 'US 7 (customizable)',
      totalWeight_grams: 10,
      finish: "Polished",
      origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIT'
    },
    amberDetails: {
      colorTier: 'Cherry Red Amber',
      colorSlug: 'cherry',
      description: 'Translucent, cherry-like red.',
      rarity: 'Very Rare',
      specialNote: 'Carved from a solid piece.',
      basePricePerGram: 2150,
    },
    inventory: {
      stock: 4,
      isAvailable: true
    }
  },
    {
    id: 'decorative-fossil-coral',
    sku: 'VAG-DFC-1',
    name: 'Fossil Coral Decorative Sphere',
    category: 'decorative-stones-fossil-coral',
    material: Material.FossilCoral,
    price: 8500,
    isNewArrival: true,
    story: 'A beautiful decorative sphere polished from fossil coral, showcasing ancient marine life patterns. A perfect piece for adding natural elegance to any space.',
    energyProperties: ['Grounding', 'Change', 'Peace'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/D1CFCB/4C433C?text=Fossil+Coral',
      gallery: []
    },
    specifications: {
      totalWeight_grams: 350,
      finish: "Polished Sphere",
      origin: 'Indonesia'
    },
    certification: {
      isCertified: false
    },
    inventory: {
      stock: 10,
      isAvailable: true
    }
  },
    {
    id: 'decorative-agate-slice',
    sku: 'VAG-DAS-1',
    name: 'Banded Agate Decorative Slice',
    category: 'decorative-stones-agate',
    material: Material.Agate,
    price: 4200,
    isNewArrival: false,
    story: 'A stunning, polished slice of banded agate on a custom stand. Its intricate layers reveal a story of geological time, bringing balance and harmony.',
    energyProperties: ['Balance', 'Harmony', 'Stability'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/7E6B64/FBF9F6?text=Agate+Slice',
      gallery: []
    },
    specifications: {
      totalWeight_grams: 500,
      finish: "Polished Slice",
      origin: 'Brazil'
    },
    certification: {
      isCertified: false
    },
    inventory: {
      stock: 12,
      isAvailable: true
    }
  },
  {
    id: 'p5-black-108',
    sku: 'VAG-BLK-10-108',
    name: 'Midnight Purity Black Amber Mala',
    category: 'prayer-beads-108',
    material: Material.Amber,
    price: 356400, // 2750/g * 1.2g/bead * 108 beads
    bestseller: false,
    story: 'Sourced from an exceptionally rare portion of a larger amber piece, this Black Amber mala is a testament to natural scarcity. Its deep, pure color provides a profound sense of grounding and protection.',
    energyProperties: ['Grounding', 'Protection', 'Serenity'],
    media: {
        mainImageUrl: 'https://placehold.co/600x600/2a2a2a/FBF9F6?text=Black+Amber',
        gallery: []
    },
    specifications: {
        beadSize_mm: 10,
        beadCount: 108,
        totalWeight_grams: 129.6,
        clarityLevel: "Opaque - High Grade",
        finish: "Machine-rounded and precisely polished.",
        origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
        isCertified: true,
        authority: 'In-house'
    },
    amberDetails: {
        colorTier: "Black Amber",
        colorSlug: "black",
        description: "Very dark brown to black.",
        rarity: "Exceptionally rare in large amber chunks.",
        specialNote: "Extremely limited quantity.",
        basePricePerGram: 2750,
        purityLevel: 'Deep Black' // High Tier
    },
    inventory: {
        stock: 1,
        isAvailable: true
    }
  },
  {
    id: 'p2-ruby-54',
    sku: 'VAG-RBY-8-54',
    name: 'Mogok Ruby Vitality Prayer Beads',
    category: 'prayer-beads-54',
    material: Material.Ruby,
    price: 18900,
    bestseller: true,
    story: 'Known as the "Valley of Rubies," Mogok produces gemstones of unparalleled color. This 54-bead mala is believed to invigorate the life force, promoting courage and passion.',
    energyProperties: ['Vitality', 'Courage', 'Passion'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/A72643/FBF9F6?text=Mogok+Ruby',
      gallery: []
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 54,
      totalWeight_grams: 54.0,
      clarityLevel: "A+ Grade",
      finish: "Machine-rounded and polished.",
      origin: 'Mogok, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIT'
    },
    inventory: {
      stock: 15,
      isAvailable: true
    }
  },
  {
    id: 'p4-sapphire-108',
    sku: 'VAG-SPH-8-108',
    name: 'Celestial Sapphire Wisdom Mala',
    category: 'prayer-beads-108',
    material: Material.Sapphire,
    price: 94500,
    bestseller: false,
    story: 'Prized by royalty for centuries, the blue sapphire is a symbol of wisdom and divine favor. These beads are ideal for deepening spiritual practice and seeking higher knowledge.',
    energyProperties: ['Wisdom', 'Spirituality', 'Prosperity'],
    media: {
      mainImageUrl: 'https://placehold.co/600x600/2A4C88/FBF9F6?text=Sapphire',
      gallery: []
    },
    specifications: {
      beadSize_mm: 8,
      beadCount: 108,
      totalWeight_grams: 151.2,
      clarityLevel: "A+ Grade",
      finish: "Faceted and polished.",
      origin: 'Mogok, Myanmar'
    },
    certification: {
      isCertified: true,
      authority: 'GIA'
    },
    inventory: {
      stock: 5,
      isAvailable: true
    }
  },
   {
    id: 'p7-dark-honey-27',
    sku: 'VAG-DHK-12-27',
    name: 'Classic Dark Honey Amber Hand Mala',
    category: 'prayer-beads-27',
    material: Material.Amber,
    price: 5589,
    bestseller: false,
    story: 'A beautiful and classic example of Burmese amber, this 27-bead hand mala showcases the desirable "cloud swirl" patterns. A perfect piece for daily mindfulness practice.',
    energyProperties: ['Grounding', 'Warmth', 'Balance'],
    media: {
        mainImageUrl: 'https://placehold.co/600x600/B27732/FBF9F6?text=Dark+Honey',
        gallery: []
    },
    specifications: {
        beadSize_mm: 12,
        beadCount: 27,
        totalWeight_grams: 48.6,
        clarityLevel: "B Grade (visible inclusions)",
        finish: "Machine-rounded and precisely polished.",
        origin: 'Hukawng Valley, Myanmar'
    },
    certification: {
        isCertified: true,
        authority: 'In-house'
    },
    amberDetails: {
        colorTier: "Dark Honey Amber (Cognac)",
        colorSlug: "dark_honey",
        description: 'Deep golden-brown, commonly referred to as “Mekhong Whisky” color in Thailand.',
        rarity: "Very Common",
        specialNote: "Hand-selected for clarity and beautiful swirl patterns.",
        basePricePerGram: 115,
    },
    inventory: {
        stock: 20,
        isAvailable: true
    }
  }
];

export const AMBER_COLOR_DETAILS: AmberColorDetail[] = [
    {
        id: 'mila',
        name: 'Mila Amber (Milky)',
        priceRange: '฿2,000 – ฿4,000 per gram',
        description: 'A luxurious golden candle-like color, with a semi-liquid and semi-solid texture blended in one piece. Rich in dimension.',
        rarity: 'Extremely rare and visually stunning.',
        specialNote: 'Highly collectible grade.',
        imageUrl: 'https://placehold.co/400x300/C8A97E/2a2a2a?text=Mila+Amber',
        basePricePerGram: 3000
    },
    {
        id: 'black',
        name: 'Black Amber',
        priceRange: '฿2,500 – ฿3,000 per gram',
        description: 'Very dark brown to black.',
        rarity: 'Exceptionally rare in large amber chunks—only a small portion of a large brown amber piece may be black.',
        cuttingYield: 'Sometimes yields only 1–2 round beads from 10+ minutes of cutting.',
        specialNote: 'Extremely limited quantity due to natural scarcity.',
        imageUrl: 'https://placehold.co/400x300/2a2a2a/FBF9F6?text=Black+Amber',
        basePricePerGram: 2750
    },
    {
        id: 'cherry',
        name: 'Cherry Red Amber',
        priceRange: '฿1,800 – ฿2,500 per gram',
        description: 'Translucent, cherry-like red. Even, pure tone without black undertones.',
        rarity: 'Very Rare',
        appearance: 'Glassy clarity resembling red marbles or young cherries.',
        specialNote: 'Considered one of the purest red ambers.',
        imageUrl: 'https://placehold.co/400x300/941C20/FBF9F6?text=Cherry+Red+Amber',
        basePricePerGram: 2150
    },
    {
        id: 'pigeon',
        name: 'Pigeon Blood Red',
        priceRange: '฿800 – ฿1,200 per gram',
        description: 'Transparent red with black hues.',
        rarity: 'Uncommon',
        appearance: 'Similar to the gemstone *pigeon blood ruby*.',
        specialNote: 'Gem-like tone, dramatic elegance.',
        imageUrl: 'https://placehold.co/400x300/6A1121/FBF9F6?text=Pigeon+Blood+Red',
        basePricePerGram: 1000
    },
    {
        id: 'orange',
        name: 'Orange Amber',
        priceRange: '฿600 – ฿800 per gram',
        description: 'Vivid orange, brighter than golden amber.',
        rarity: 'One of the rarer Burmese amber colors.',
        specialNote: 'Striking and vibrant.',
        imageUrl: 'https://placehold.co/400x300/F4A261/2a2a2a?text=Orange+Amber',
        basePricePerGram: 700
    },
    {
        id: 'golden',
        name: 'Golden Yellow Amber',
        priceRange: '฿400 – ฿600 per gram',
        description: 'Radiant gold with brilliant shine under sunlight.',
        rarity: 'Common',
        qualityNote: 'Price increases based on clarity and lack of impurities.',
        specialNote: 'Classic Burmese amber tone.',
        imageUrl: 'https://placehold.co/400x300/FFC72C/2a2a2a?text=Golden+Yellow',
        basePricePerGram: 500
    },
    {
        id: 'light_honey',
        name: 'Light Honey Amber',
        priceRange: '฿180 – ฿250 per gram',
        description: 'A blend between orange and golden yellow hues.',
        rarity: 'Common',
        qualityNote: 'The clearer and purer the piece, the higher the price.',
        specialNote: 'Smooth color spectrum, elegant lightness.',
        imageUrl: 'https://placehold.co/400x300/F3B64F/2a2a2a?text=Light+Honey',
        basePricePerGram: 215
    },
    {
        id: 'dark_honey',
        name: 'Deep Honey Amber',
        priceRange: '฿80 – ฿150 per gram',
        description: 'Deep golden-brown, commonly referred to as “Mekhong Whisky” color in Thailand.',
        rarity: 'Very Common',
        selectionCriteria: 'Only pieces with no internal cracks and distinct “cloud swirl” patterns are selected.',
        specialNote: 'Though widely available, this filtered grade is hand-selected for clarity and beauty.',
        imageUrl: 'https://placehold.co/400x300/B27732/FBF9F6?text=Dark+Honey',
        basePricePerGram: 115
    },
    {
        id: 'root',
        name: 'Root Amber (Wood-like Pattern)',
        priceRange: '฿1,500 per gram',
        description: 'An opaque amber with wood-like patterns and textures, created by tree resin mixing with soil and plant debris.',
        rarity: 'Uncommon',
        specialNote: 'Highly prized for its unique organic patterns.',
        imageUrl: 'https://placehold.co/400x300/6B4F3A/FBF9F6?text=Root+Amber',
        basePricePerGram: 1500,
    }
];

export const AMULETS: Amulet[] = [
  { id: 'a1', name: 'Golden stupa', price: 1750, material: 'Gold-plated brass', imageUrl: 'https://placehold.co/200/C8A97E/2a2a2a?text=Stupa' },
  { id: 'a2', name: 'Silver Dharma Wheel', price: 1575, material: '925 Sterling Silver', imageUrl: 'https://placehold.co/200/BDC3C7/2a2a2a?text=Dharma+Wheel' },
  { id: 'a3', name: 'Carved Jade Buddha', price: 4200, material: 'Natural Jadeite', imageUrl: 'https://placehold.co/200/90B89C/2a2a2a?text=Jade+Buddha' }
];

export const METAL_PRICES: { [key in Metal]: number } = {
  [Metal.None]: 0,
  [Metal.Gold]: 7000,
  [Metal.Silver]: 2800,
  [Metal.Gold18K]: 5600,
  [Metal.Gold14K]: 4200,
  [Metal.Gold9K]: 3150,
  [Metal.Copper]: 700,
  [Metal.Brass]: 525,
};

export const BLESSING_PRICE = 875;

export const MATERIAL_DETAILS: MaterialDetail[] = [
    {
        name: Material.Amber,
        description: "Burmese Amber, or Burmite, is a rare fossilized resin over 99 million years old. Its immense age connects it to the primordial energy of the Earth, making it a vessel of ancient wisdom. It feels warm to the touch and is remarkably lightweight.",
        significance: "A symbol of ancient wisdom, natural healing, and protection. In many traditions, it is believed to calm the mind, clarify thoughts, and aid in achieving a meditative state by dispelling negativity.",
        imageUrl: "https://placehold.co/800x600/C8A97E/2a2a2a?text=Burmese+Amber"
    },
    {
        name: Material.Ruby,
        description: "Known as the 'King of Gems', ruby from the famed Mogok Valley in Myanmar is prized for its deep, vibrant red hue. It is a variety of the mineral corundum and is one of the four traditional precious gemstones.",
        significance: "Represents vitality, passion, and protection. It stimulates the root and heart chakras, boosting life-force energy (prana), courage, and a zest for life. It is believed to protect the wearer from misfortune.",
        imageUrl: "https://placehold.co/800x600/A72643/FBF9F6?text=Mogok+Ruby"
    },
    {
        name: Material.Sapphire,
        description: "A precious gemstone, typically blue, but also occurring in other colors. Like ruby, it is a variety of corundum. Sapphires from Myanmar are known for their rich, velvety blue tones.",
        significance: "A stone of wisdom, clarity, and divine connection. It is believed to calm the mind, release unwanted thoughts, and bring peace and serenity. Sapphire is associated with the throat and third-eye chakras, enhancing spiritual insight.",
        imageUrl: "https://placehold.co/800x600/2A4C88/FBF9F6?text=Burmese+Sapphire"
    }
];


export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'article-1',
        category: 'Soul',
        title: "The 100-Million-Year Journey of Burmite Amber",
        summary: "Delve into the ancient history of Burmese Amber, from prehistoric resin in the Cretaceous period to a treasured gemstone today. Discover the timeline of this incredible natural wonder.",
        author: "Vicky Sinchoury",
        date: "October 12, 2023",
        featuredImage: "https://placehold.co/1200x675/8A5E3C/FBF9F6?text=Amber's+Journey",
        readingTime: 6
    },
    {
        id: 'article-2',
        category: 'Science',
        title: "A Buyer's Guide: 3 Methods to Identify Fake Amber",
        summary: "In a market flooded with imitations, knowing how to spot real Burmite is essential. Learn simple, lab-proven tests you can perform, from the saltwater method to observing its unique fluorescence under UV light.",
        author: "Vicky Sinchoury",
        date: "October 05, 2023",
        featuredImage: "https://placehold.co/1200x675/88929B/FFFFFF?text=Amber+Authentication",
        readingTime: 8
    },
    {
        id: 'article-3',
        category: 'Soul',
        title: "Mindful Objects: Using Amber in Modern Wellness",
        summary: "Color and texture are energy, and the properties of your gemstone can profoundly influence your practice. Discover how the warmth and ancient history of amber can ground your modern wellness journey.",
        author: "Vicky Sinchoury",
        date: "September 28, 2023",
        featuredImage: "https://placehold.co/1200x675/C8A97E/2a2a2a?text=Mindful+Objects",
        readingTime: 5
    },
    {
        id: 'article-4',
        category: 'Science',
        title: "Inside the Lab: How We Certify Our Burmese Amber",
        summary: "Transparency is key to trust. This article details the scientific processes we use, including spectroscopy and microscopic analysis, to verify the authenticity and origin of every piece of amber we sell.",
        author: "Vicky Sinchoury",
        date: "September 20, 2023",
        featuredImage: "https://placehold.co/1200x675/88929B/FFFFFF?text=Lab+Certification",
        readingTime: 7
    },
    {
        id: 'article-5',
        category: 'Science',
        title: "Gemstone Identification | Burmese Amber & Gemological Tools",
        summary: "Explore how Burmese amber and gemstones are identified using gemological tools like FTIR, UV light, and Raman spectroscopy. Learn more about authentic testing techniques.",
        author: "Vicky Sinchoury",
        date: "October 20, 2023",
        featuredImage: "https://placehold.co/1200x675/2a2a2a/FBF9F6?text=Gemological+Tools",
        readingTime: 12
    }
];

export const AMBER_SPECTRUM_DATA: AmberSpectrumDetail[] = [
    {
        id: 'mila',
        title: 'Mila Amber (Milky)',
        subtitle: 'The Royal Flame of Spiritual Power',
        visual: 'A luxurious golden hue resembling semi-melted wax—bright, luminous, and complex in texture. Its three-dimensional glow seems to shift between liquid and solid.',
        science: 'Formed under shallow burial with a precise balance of oxidation and tree oil preservation, this amber maintains its honey-golden essence without darkening over time.',
        rarity: 'Ultra-rare; often referred to as the "King’s Amber" due to its regal appearance.',
        symbolism: 'Royalty, enlightenment, divine clarity. Traditionally worn by monks, sages, and high priests.',
        suits: 'Those on a spiritual journey, leaders with a sense of responsibility, and individuals seeking clarity in moral decisions.',
        element: 'Fire & Air / Leo, Sagittarius, Libra',
        why: 'It is ideal for individuals seeking deep insight, radiance in leadership, and connection to higher wisdom. Mila amber doesn’t just decorate—it inspires reverence.',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-400',
        imageUrl: 'https://placehold.co/600x450/C8A97E/2a2a2a?text=Mila+Amber'
    },
    {
        id: 'black',
        title: 'Black Amber',
        subtitle: 'The Silent Guardian of the Soul',
        visual: 'Opaque black to very dark brown, with dense color and sometimes a metallic sheen.',
        science: 'Created at great depths and high pressures, black amber is rich in carbonized materials, with almost no translucency. It’s among the rarest due to its formation conditions.',
        rarity: 'Extremely Rare',
        symbolism: 'Protection, mystery, depth, and psychic shielding.',
        suits: 'Empaths, introverts, mystics, and those undergoing healing from trauma or seeking solitude.',
        element: 'Earth / Scorpio, Capricorn, Virgo',
        why: 'It grounds scattered energy, shields from negativity, and is often used in Buddhist and shamanic rituals for spiritual detoxification and protection.',
        bgColor: 'bg-[#3E2723] text-[#F7F1E5]',
        borderColor: 'border-amber-900/50',
        textColor: 'text-[#F7F1E5]/90',
        imageUrl: 'https://placehold.co/600x450/2a2a2a/FBF9F6?text=Black+Amber'
    },
    {
        id: 'cherry',
        title: 'Cherry Red Amber',
        subtitle: 'The Pure Flame of Youth and Vitality',
        visual: 'Vibrant, ruby-like transparency with a juicy cherry hue. Glassy and evenly colored.',
        science: 'A result of stable oxygen-rich resin oxidation over time. The rich red tones are preserved due to a rare balance in environmental exposure.',
        rarity: 'Very Rare',
        symbolism: 'Passion, youth, joy, artistic inspiration.',
        suits: 'Artists, performers, those drawn to romance, beauty, and emotional growth.',
        element: 'Fire / Aries, Gemini, Libra',
        why: 'For anyone wishing to reconnect with their inner fire, explore their sensuality, or express themselves freely, this amber is an energetic match.',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-400',
        imageUrl: 'https://placehold.co/600x450/941C20/FBF9F6?text=Cherry+Red+Amber'
    },
    {
        id: 'pigeon',
        title: 'Pigeon Blood Red',
        subtitle: 'The Warrior’s Heart – Deep Love and Loyalty',
        visual: 'A darker red with deep maroon undertones, resembling the shade of fine pigeon blood rubies.',
        science: 'Formed from partially oxidized resin with natural iron impurities, giving it its distinctive richness and complexity.',
        rarity: 'Uncommon',
        symbolism: 'Devotion, courage, strength through emotional intensity.',
        suits: 'Loyal partners, spiritual protectors, warriors of love and faith.',
        element: 'Fire & Water / Cancer, Scorpio, Aries',
        why: 'It resonates with emotional resilience, spiritual strength, and devotion. Excellent for those who serve others or guard spiritual communities.',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-400',
        imageUrl: 'https://placehold.co/600x450/6A1121/FBF9F6?text=Pigeon+Blood+Red'
    },
    {
        id: 'orange',
        title: 'Orange Amber',
        subtitle: 'The Spark of Creative Fire',
        visual: 'Bold, warm orange hue with radiant clarity and playful light reflections.',
        science: 'Derived from resin with a balanced oil content, stabilized under mild heat and pressure, which preserves its bright tone.',
        rarity: 'Uncommon',
        symbolism: 'Creativity, enthusiasm, spontaneity.',
        suits: 'Innovators, entrepreneurs, expressive personalities.',
        element: 'Fire / Leo, Sagittarius, Gemini',
        why: 'It inspires action, joy, and fresh ideas. Orange amber is excellent for breaking through emotional stagnation and launching new beginnings.',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-400',
        imageUrl: 'https://placehold.co/600x450/F4A261/2a2a2a?text=Orange+Amber'
    },
    {
        id: 'golden',
        title: 'Golden Yellow Amber',
        subtitle: 'The Light of Inner Riches',
        visual: 'Glowing golden color with radiant, almost sunlight-like brilliance. High clarity.',
        science: 'Fossilized in stable, low-heat, low-pressure environments. Its warm glow comes from preserved terpenes and resin oils.',
        rarity: 'Common',
        symbolism: 'Prosperity, confidence, balance.',
        suits: 'Thinkers, teachers, peacemakers, those seeking harmony and success.',
        element: 'Air / Taurus, Virgo, Libra',
        why: 'It promotes peace of mind, balance in relationships, and magnetism in social or business settings.',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-400',
        imageUrl: 'https://placehold.co/600x450/FFC72C/2a2a2a?text=Golden+Yellow'
    },
    {
        id: 'light_honey',
        title: 'Light Honey Amber',
        subtitle: 'The Gentle Healer of the Heart',
        visual: 'A blend of golden and light orange tones. Translucent, soft, and fluid in appearance.',
        science: 'Developed under partial exposure to oxidation with slow molecular changes, allowing for a semi-clear, warm tone.',
        rarity: 'Common',
        symbolism: 'Nurturing, emotional healing, family energy.',
        suits: 'Caregivers, empaths, family-oriented individuals, and teachers.',
        element: 'Earth & Water / Pisces, Cancer, Taurus',
        why: 'It comforts the spirit and balances emotional imbalances. A perfect gift for those going through transition or building meaningful relationships.',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-300',
        imageUrl: 'https://placehold.co/600x450/F3B64F/2a2a2a?text=Light+Honey'
    },
    {
        id: 'dark_honey',
        title: 'Deep Honey Amber',
        subtitle: 'The Ancient Memory Keeper',
        visual: 'Deep amber-brown color, resembling aged cognac or Mekhong liquor. Rich with internal "swirl cloud" textures.',
        science: 'Highly matured resin subjected to a long aging process, often containing micro-fragments of ancient plant life.',
        rarity: 'Very Common',
        symbolism: 'Wisdom, maturity, ancestral connection.',
        suits: 'Elders, philosophers, people working with heritage or legacy.',
        element: 'Earth / Aquarius, Capricorn, Sagittarius',
        why: 'This is the amber of reflection and maturity. It helps access inner wisdom, supports memory, and is often used in ancestral rituals.',
        bgColor: 'bg-yellow-900/10',
        borderColor: 'border-yellow-800/20',
        imageUrl: 'https://placehold.co/600x450/B27732/FBF9F6?text=Dark+Honey'
    },
    {
        id: 'root',
        title: 'Root Amber (Wood-like Pattern)',
        subtitle: 'The Earth’s Tapestry',
        visual: 'Opaque amber featuring organic, wood-like patterns and swirling textures of brown, tan, and cream.',
        science: 'Formed when tree resin mixed with soil, plant debris, and other organic matter before fossilizing. Its unique patterns are a direct record of the forest floor.',
        rarity: 'Uncommon',
        symbolism: 'Grounding, stability, connection to nature.',
        suits: 'Nature lovers, those seeking stability, and individuals who appreciate organic, one-of-a-kind patterns.',
        element: 'Earth / Taurus, Virgo, Capricorn',
        why: 'It connects the wearer to the raw, untamed energy of the earth. Its patterns are a reminder of the beauty in natural imperfections.',
        bgColor: 'bg-yellow-900/10',
        borderColor: 'border-yellow-800/20',
        imageUrl: 'https://placehold.co/600x450/6B4F3A/FBF9F6?text=Root+Amber'
    }
];

/** @deprecated Use BLOG_POSTS instead */
export const KNOWLEDGE_ARTICLES = BLOG_POSTS;
