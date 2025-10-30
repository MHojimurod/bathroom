import type { NavLink, HeroSlide, Achievement, ProductCategory, Product } from './types';

export const TELEGRAM_BOT_TOKEN = '7755094571:AAEezeM41_YaLdYIPubxruqan6Fu5DG62Y0';
export const TELEGRAM_CHAT_ID = '-1002832678850';


export const NAV_LINKS: NavLink[] = [
  { label: 'Bosh Sahifa', path: '/' },
  { label: 'Maxsulotlar', path: '/products' },
  { label: 'Biz Haqimizda', path: '/about' },
  { label: 'Aloqa', path: '/contact' },
  { label: 'Hamkorlik', path: '/partnership' },
];

export const MAIN_HERO_SLIDES: HeroSlide[] = [
  {
    image: '/images/slide1.jpg',
    headline: 'Taqqoslanmas nafislikni his eting',
    subHeadline: '',
    ctaText: 'Kolleksiyamiz bilan tanishing',
    ctaLink: '/products',
  },
  {
    image: '/images/slide2.jpg',
    headline: '',
    subHeadline: '',
    ctaText: '',
    ctaLink: '',
  },
  {
    image: '/images/slide3.webp',
    headline: 'Innovating Your Everyday Rituals',
    subHeadline: 'Smart Solutions for Modern Living.',
    ctaText: 'View Smart Collections',
    ctaLink: '/products',
  },
];

export const PRODUCTS_HERO_SLIDES: HeroSlide[] = [
  {
    image: 'https://picsum.photos/1920/1080?random=4',
    headline: 'Explore Our Extensive Collections',
    subHeadline: 'Uncover the perfect pieces to complete your dream bathroom.',
    ctaText: 'View All Categories',
    ctaLink: '#categories',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: 250, label: 'Mahsulotlar' },
  { value: 10000, label: 'Foydalanuvchilar' },
  { value: 150, label: 'Hamkrorlar' },
  { value: 25, label: 'Filiallar' },
];

export const WHAT_WE_SELL = [
    { name: 'Hashamatli vannalar', image: '/images/photo1.png' },
    { name: 'Innovatsion dushlar', image: '/images/photo2.png' },
    { name: 'Qulay rakvinalar', image: '/images/photo3.png' },
    { name: 'Aqlli hojatxonalar', image: '/images/photo4.png' },
]

const ALL_PRODUCTS_LIST: Omit<Product, 'image' | 'gallery'>[] = [
  { id: 'p1', name: 'The Serenity Freestanding Tub', description: 'Experience ultimate relaxation with our ergonomic, high-gloss acrylic tub.', longDescription: 'The Serenity Freestanding Tub is the epitome of modern elegance and comfort. Its minimalist design and gracefully curved lines create a stunning centerpiece for any bathroom. Crafted from high-grade, non-porous acrylic for easy cleaning and superior heat retention.', category: 'Bathtubs', subcategory: 'Freestanding', price: "€1,890", features: ['Ergonomic Design', 'High-Gloss Acrylic', 'Excellent Heat Retention', 'Stain-Resistant Surface'], specifications: [{name: 'Material', value: 'Acrylic'}, {name: 'Dimensions', value: '1700 x 800 x 580 mm'}, {name: 'Capacity', value: '250 Liters'}]},
  { id: 'p2', name: 'AquaFlow Rain Shower System', description: 'Immerse yourself in a refreshing cascade with multiple spray settings.', longDescription: 'Transform your daily shower into a spa-like experience. The AquaFlow system features an oversized rain showerhead, a versatile hand shower, and thermostatic controls for precise temperature management. Finished in polished chrome for a sleek, modern look.', category: 'Showers', subcategory: 'Shower Systems', price: "€750", features: ['Thermostatic Valve', 'Anti-Scald Technology', 'Silicone Nozzles', 'Multiple Spray Patterns'], specifications: [{name: 'Finish', value: 'Polished Chrome'}, {name: 'Head Size', value: '300mm Diameter'}, {name: 'Hose Length', value: '1.5m'}]},
  { id: 'p3', name: 'Elegance Wall-Mounted Vanity', description: 'Maximizing space with minimalist design and premium solid wood construction.', longDescription: 'The Elegance vanity combines functionality with a floating, minimalist aesthetic. It features two soft-close drawers for ample storage and is constructed from sustainably sourced solid oak with a water-resistant finish.', category: 'Vanity Units', subcategory: 'Single', price: "€1,150", features: ['Soft-Close Drawers', 'Solid Oak Construction', 'Water-Resistant Finish', 'Integrated Basin Option'], specifications: [{name: 'Material', value: 'Solid Oak'}, {name: 'Dimensions', value: '800 x 480 x 500 mm'}, {name: 'Mounting', value: 'Wall-Hung'}]},
  { id: 'p4', name: 'SmartFlush Intelligent Toilet', description: 'Innovative features for hygiene and comfort, controlled effortlessly.', longDescription: 'Experience the future of personal hygiene with the SmartFlush toilet. It offers a heated seat, automatic flushing, integrated bidet with adjustable settings, and a warm air dryer, all controlled via a sleek remote.', category: 'Toilets', subcategory: 'Smart Toilets', price: "€2,200", features: ['Heated Seat', 'Automatic Open/Close & Flush', 'Integrated Bidet', 'Remote Control'], specifications: [{name: 'Material', value: 'Vitreous China'}, {name: 'Flush System', value: 'Tornado Flush'}, {name: 'Power', value: '220-240V'}]},
  { id: 'p5', name: 'LuxeTouch Mixer Faucet', description: 'Precision engineering meets contemporary style for your basin.', longDescription: 'The LuxeTouch faucet is a statement of refined taste. Its single-lever control allows for effortless temperature and flow adjustment, while the solid brass construction ensures durability. The ceramic disc cartridge prevents drips for life.', category: 'Faucets & Mixers', subcategory: 'Basin Mixers', price: "€350", features: ['Solid Brass Body', 'Ceramic Disc Cartridge', 'Eco-Flow Aerator', 'Easy Installation'], specifications: [{name: 'Finish', value: 'Brushed Nickel'}, {name: 'Height', value: '160mm'}, {name: 'Spout Reach', value: '120mm'}]},
  { id: 'p6', name: 'Zenith Shower Enclosure', description: 'Frameless design with crystal-clear tempered glass for a spacious feel.', longDescription: 'The Zenith enclosure creates an open, airy feel in your bathroom. It features 8mm toughened safety glass with an easy-clean coating, robust stainless steel hardware, and a smooth-gliding door mechanism for a touch of luxury.', category: 'Showers', subcategory: 'Enclosures', price: "€980", features: ['8mm Safety Glass', 'Frameless Design', 'Easy-Clean Coating', 'Reversible Door'], specifications: [{name: 'Glass Thickness', value: '8mm'}, {name: 'Dimensions', value: '1200 x 900 x 2000 mm'}, {name: 'Hardware', value: 'Stainless Steel'}]},
  { id: 'p7', name: 'Artisan Ceramic Basin', description: 'Hand-finished ceramic basin, a centerpiece for any premium bathroom.', longDescription: 'Each Artisan basin is a unique work of art, hand-finished to perfection. Its countertop design makes it a striking focal point, while the high-quality ceramic ensures a durable, non-porous, and easy-to-clean surface.', category: 'Sinks & Basins', subcategory: 'Vessel Sinks', price: "€420", features: ['Hand-Finished', 'High-Grade Ceramic', 'Countertop Installation', 'Scratch Resistant'], specifications: [{name: 'Material', value: 'Ceramic'}, {name: 'Shape', value: 'Round'}, {name: 'Dimensions', value: '420mm Diameter, 150mm Height'}]},
  { id: 'p8', name: 'Radiant Floor Heating System', description: 'Step onto warmth and comfort with our energy-efficient underfloor heating.', longDescription: 'Enjoy the ultimate comfort of a warm floor with our Radiant system. It provides even, gentle heat, is energy-efficient, and is compatible with most floor types including tile and stone. The programmable thermostat allows for full control.', category: 'Heating', subcategory: 'Floor Heating', price: "From €320", features: ['Energy Efficient', 'Programmable Thermostat', 'Uniform Heat Distribution', 'Suitable for all floor types'], specifications: [{name: 'Type', value: 'Electric Mat'}, {name: 'Output', value: '150W/m²'}, {name: 'Warranty', value: '10 Years'}]},
  { id: 'p9', name: 'Lagoon Whirlpool Tub', description: 'Advanced hydrotherapy jets in a spacious, built-in design.', longDescription: 'Unwind and rejuvenate with the Lagoon Whirlpool Tub. Featuring strategically placed hydrotherapy jets, this built-in tub targets key muscle groups to relieve stress and tension. The digital control panel allows you to customize your experience with ease.', category: 'Bathtubs', subcategory: 'Whirlpool', price: "From €2,499", features: ['Multi-Jet Hydrotherapy', 'Digital Controls', 'Underwater LED Lighting', 'Durable Acrylic'], specifications: [{name: 'Material', value: 'Acrylic'}, {name: 'Dimensions', value: '1800 x 900 x 620 mm'}, {name: 'Jets', value: '12'}]},
  { id: 'p10', name: 'Compact Wall-Hung Toilet', description: 'Sleek and space-saving, perfect for modern minimalist bathrooms.', longDescription: 'The Compact Wall-Hung Toilet is the ideal solution for maximizing floor space and creating a clean, uncluttered look. Its concealed cistern and frame system ensures a sturdy and quiet operation, while the rimless design makes cleaning effortless.', category: 'Toilets', subcategory: 'Wall-Hung', price: "From €599", features: ['Space-Saving Design', 'Rimless Technology', 'Soft-Close Seat', 'Dual Flush System'], specifications: [{name: 'Material', value: 'Vitreous China'}, {name: 'Projection', value: '520mm'}, {name: 'Flush Volume', value: '3/6 Liters'}]},
  { id: 'p11', name: 'Granite Vessel Sink', description: 'A statement piece carved from natural granite, combining nature and design.', longDescription: 'Carved from a single block of natural granite, each sink is a unique masterpiece. Its polished interior and textured exterior create a stunning contrast, making it a dramatic focal point in any luxury bathroom or powder room.', category: 'Sinks & Basins', subcategory: 'Vessel Sinks', price: "Inquire for Price", features: ['Natural Granite', 'Unique Variations', 'Polished Interior', 'Above-Counter Installation'], specifications: [{name: 'Material', value: 'Natural Granite'}, {name: 'Weight', value: 'Approx. 25kg'}, {name: 'Drain Hole', value: '45mm Standard'}]},
  { id: 'p12', name: 'Modular Oak Vanity Unit', description: 'Customizable storage solutions with a timeless solid oak finish.', longDescription: 'Design your perfect bathroom storage with our Modular Oak Vanity system. Combine different unit sizes and drawer configurations to fit your space. Crafted from solid oak with a protective finish, it offers both beauty and longevity.', category: 'Vanity Units', subcategory: 'Modular', price: "From €1,200", features: ['Customizable Modules', 'Solid Oak', 'Soft-Close Hardware', 'Multiple Finishes'], specifications: [{name: 'Material', value: 'Solid Oak & Oak Veneer'}, {name: 'Depth', value: '460mm'}, {name: 'Warranty', value: '5 Years'}]},
  { id: 'p13', name: 'Aura Smart Mirror', description: 'LED-lit mirror with anti-fog technology and Bluetooth connectivity.', longDescription: 'The Aura Smart Mirror brings your bathroom into the 21st century. It provides perfect task lighting, a built-in demister pad to keep the glass clear, and integrated Bluetooth speakers to stream your favorite music or podcasts.', category: 'Accessories', subcategory: 'Mirrors', price: "From €450", features: ['LED Perimeter Lighting', 'Heated Demister Pad', 'Bluetooth Speakers', 'Touch Sensor Controls'], specifications: [{name: 'Dimensions', value: '800 x 600 mm'}, {name: 'IP Rating', value: 'IP44'}, {name: 'Light Temperature', value: '6000K Cool White'}]},
  { id: 'p14', name: 'Chrome Towel Radiator', description: 'Elegant and efficient, keeping your towels warm and your bathroom cozy.', longDescription: 'A perfect blend of form and function, this designer radiator not only heats your bathroom efficiently but also keeps your towels warm and dry. Made from high-quality steel with a flawless chrome finish.', category: 'Heating', subcategory: 'Radiators', price: "From €320", features: ['High Heat Output', 'Durable Chrome Finish', 'Suitable for Central Heating', 'Modern Design'], specifications: [{name: 'Material', value: 'Mild Steel'}, {name: 'Height', value: '1200mm'}, {name: 'BTU Output', value: '1,800 at ΔT 50°C'}]},
  { id: 'p15', name: 'Cascade Bath Filler', description: 'A stunning waterfall effect faucet that transforms bath time.', longDescription: 'The Cascade Bath Filler creates a wide, gentle sheet of water, mimicking a natural waterfall for a truly serene bathing experience. Its modern design and solid brass construction make it a luxurious addition to any contemporary bath.', category: 'Faucets & Mixers', subcategory: 'Bath Fillers', price: "From €410", features: ['Waterfall Spout', 'Solid Brass', 'Ceramic Disc Technology', 'Deck-Mounted Design'], specifications: [{name: 'Finish', value: 'Polished Chrome'}, {name: 'Minimum Pressure', value: '0.5 Bar'}, {name: 'Inlet Connection', value: 'G 3/4"'}]},
  { id: 'p16', name: 'Slate Shower Tray', description: 'A textured, non-slip shower base with a natural slate feel.', longDescription: 'Combine safety and style with our Slate Shower Tray. The textured finish provides excellent anti-slip properties while replicating the beautiful look of natural slate. It\'s made from a durable stone resin for a solid, premium feel underfoot.', category: 'Showers', subcategory: 'Trays', price: "From €280", features: ['Anti-Slip Texture', 'Natural Slate Effect', 'Stone Resin Construction', 'Low Profile Design'], specifications: [{name: 'Material', value: 'Stone Resin'}, {name: 'Height', value: '30mm'}, {name: 'Waste Outlet', value: '90mm'}]},
];

export const ALL_PRODUCTS: Product[] = ALL_PRODUCTS_LIST.map((p, i) => ({
  ...p,
  image: `https://picsum.photos/400/300?random=${21 + i}`,
  gallery: [
    `https://picsum.photos/800/600?random=${21 + i}`,
    `https://picsum.photos/800/600?random=${51 + i}`,
    `https://picsum.photos/800/600?random=${81 + i}`,
  ]
}));


export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 8);


export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "all", name: 'All Products', subcategories: [] },
  { id: "Bathtubs", name: 'Bathtubs', subcategories: ['Freestanding', 'Built-in', 'Whirlpool'] },
  { id: "Showers", name: 'Showers', subcategories: ['Shower Systems', 'Enclosures', 'Trays'] },
  { id: "Toilets", name: 'Toilets', subcategories: ['Smart Toilets', 'Wall-Hung', 'Close-Coupled'] },
  { id: "Sinks & Basins", name: 'Sinks & Basins', subcategories: ['Vessel Sinks', 'Under-Mount', 'Pedestal'] },
  { id: "Vanity Units", name: 'Vanity Units', subcategories: ['Single', 'Double', 'Modular'] },
  { id: "Faucets & Mixers", name: 'Faucets & Mixers', subcategories: ['Basin Mixers', 'Shower Mixers', 'Bath Fillers'] },
  { id: "Accessories", name: 'Accessories', subcategories: ['Mirrors', 'Towel Rails', 'Dispensers'] },
  { id: "Heating", name: 'Heating', subcategories: ['Radiators', 'Floor Heating'] },
  { id: "New Arrivals", name: 'New Arrivals', subcategories: [] },
  { id: "Special Offers", name: 'Special Offers', subcategories: [] },
];