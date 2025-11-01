import type { HeroSlide, Achievement, ProductCategory, Product } from "./types";

export const TELEGRAM_BOT_TOKEN =
  "7755094571:AAEezeM41_YaLdYIPubxruqan6Fu5DG62Y0";
export const TELEGRAM_CHAT_ID = "-1002832678850";

export const PRODUCTS_HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/product-slide1.png",
    headline: "Boy va keng qamrovli to‘plamlarimiz bilan tanishing",
    subHeadline: "",
    ctaText: "Barcha kategoriyalarni ko‘rish",
    ctaLink: "#categories",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: 250, label: "Mahsulotlar" },
  { value: 10000, label: "Foydalanuvchilar" },
  { value: 150, label: "Hamkrorlar" },
  { value: 25, label: "Filiallar" },
];

const ALL_PRODUCTS_LIST: Omit<Product, "image" | "gallery">[] = [
  {
    id: "p1",
    name: "Serenity erkin turuvchi vanna",
    description:
      "Ergonomik, yuqori porloq akrildan tayyorlangan dam olish uchun ideal vanna.",
    longDescription:
      "Serenity vanna — bu zamonaviy nafislik va qulaylikning namunasi. Minimalistik dizayn va silliq egri chiziqlar har qanday hammom uchun markaziy bezak bo‘ladi. Yuqori sifatli, issiqlikni yaxshi ushlab turuvchi va oson tozalanadigan akrildan ishlab chiqilgan.",
    category: "Vannalar",
    subcategory: "Erkin turuvchi",
    price: "$1,890",
    features: [
      "Ergonomik shakl",
      "Yuqori porloq akril",
      "Issiqlikni uzoq saqlaydi",
      "Dog‘ga chidamli sirt",
    ],
    specifications: [
      { name: "Material", value: "Akril" },
      { name: "O‘lcham", value: "1700 x 800 x 580 mm" },
      { name: "Sig‘im", value: "250 litr" },
    ],
  },
  {
    id: "p2",
    name: "AquaFlow yomg‘irli dush tizimi",
    description: "Ko‘p rejimli purkash bilan tetiklantiruvchi dush tajribasi.",
    longDescription:
      "Har kuni spa darajasidagi dush zavqini his eting. AquaFlow tizimi kattalashgan yomg‘irli dush boshi, qo‘l dushi va termostatli boshqaruv tizimi bilan jihozlangan. Yaltiroq xrom qoplama esa unga zamonaviy ko‘rinish beradi.",
    category: "Dush tizimlari",
    subcategory: "Dush to‘plamlari",
    price: "$750",
    features: [
      "Termostatli boshqaruv",
      "Yonishdan himoya",
      "Silikon nozullar",
      "Ko‘p purkash rejimi",
    ],
    specifications: [
      { name: "Qoplama", value: "Xrom" },
      { name: "Dush boshi diametri", value: "300 mm" },
      { name: "Shlang uzunligi", value: "1.5 m" },
    ],
  },
  {
    id: "p3",
    name: "Elegance devorga o‘rnatiladigan tumbacha",
    description:
      "Joyni tejaydigan, massiv yog‘ochdan yasalgan minimalist dizayn.",
    longDescription:
      "Elegance tumbachasi funksionallik va nafis ko‘rinishni birlashtiradi. Ikki yumshoq yopiladigan tortmasi mavjud, suvga chidamli qoplamali tabiiy eman yog‘ochidan tayyorlangan.",
    category: "Rakvina tumbochalari",
    subcategory: "Bitta rakvina",
    price: "$1,150",
    features: [
      "Yumshoq yopiladigan tortmalar",
      "Massiv eman yog‘ochi",
      "Suvga chidamli qoplama",
      "Rakvina bilan variant mavjud",
    ],
    specifications: [
      { name: "Material", value: "Massiv eman" },
      { name: "O‘lcham", value: "800 x 480 x 500 mm" },
      { name: "O‘rnatish turi", value: "Devorga o‘rnatiladigan" },
    ],
  },
  {
    id: "p4",
    name: "SmartFlush aqlli unitazi",
    description: "Gigiyena va qulaylik uchun innovatsion funksiyalar bilan.",
    longDescription:
      "SmartFlush — bu kelajakdagi qulaylik namunasi. Qizdiriladigan o‘rindiq, avtomatik yuvish, bidet va issiq havo quritgichi, hammasi masofadan boshqaruv pulti orqali boshqariladi.",
    category: "Unitazlar",
    subcategory: "Aqlli unitazlar",
    price: "$2,200",
    features: [
      "Qizdiriladigan o‘rindiq",
      "Avtomatik yuvish va yopish",
      "Bidet funksiyasi",
      "Masofadan boshqaruv",
    ],
    specifications: [
      { name: "Material", value: "Keramika (Vitreous China)" },
      { name: "Suv chiqarish tizimi", value: "Tornado Flush" },
      { name: "Quvvat", value: "220–240V" },
    ],
  },
  {
    id: "p5",
    name: "LuxeTouch krani",
    description: "Aniq boshqaruv va zamonaviy uslub uyg‘unligi.",
    longDescription:
      "LuxeTouch mikseri nafislikning ifodasidir. Bitta tutqichli boshqaruv suv harorati va bosimini oson sozlash imkonini beradi. Messing korpusi bardoshli, keramika diski esa tomchilatishni butunlay bartaraf etadi.",
    category: "Kran va mikserlar",
    subcategory: "Rakvina mikseri",
    price: "$350",
    features: [
      "Massiv messing korpus",
      "Keramika disk",
      "Suv tejovchi aerator",
      "Oson o‘rnatish",
    ],
    specifications: [
      { name: "Qoplama", value: "Brushed Nickel" },
      { name: "Balandligi", value: "160 mm" },
      { name: "Chiqarish uzunligi", value: "120 mm" },
    ],
  },
  {
    id: "p6",
    name: "Zenith dush kabinasi",
    description:
      "Ramkasiz dizayn va tiniq shisha bilan kenglik hissi yarating.",
    longDescription:
      "Zenith dush kabinasi hammomga ochiq va keng ko‘rinish beradi. 8 mm qalinlikdagi xavfsizlik shishasi, oson tozalanadigan qoplama, zanglamaydigan po‘lat armatura va silliq siljiydigan eshik mexanizmi bilan jihozlangan.",
    category: "Dush tizimlari",
    subcategory: "Kabinalar",
    price: "$980",
    features: [
      "8 mm xavfsizlik shishasi",
      "Ramkasiz dizayn",
      "Oson tozalanadigan qoplama",
      "Teskari o‘rnatish imkoniyati",
    ],
    specifications: [
      { name: "Shisha qalinligi", value: "8 mm" },
      { name: "O‘lcham", value: "1200 x 900 x 2000 mm" },
      { name: "Armatura", value: "Zanglamaydigan po‘lat" },
    ],
  },
  {
    id: "p7",
    name: "Artisan keramika rakvinasi",
    description:
      "Qo‘lda ishlangan keramika rakvina – nafis hammomlar uchun bezak.",
    longDescription:
      "Har bir Artisan rakvinasi o‘ziga xos san’at asari. Qo‘lda jilolangan sirt, stol ustiga o‘rnatiladigan dizayn va yuqori sifatli keramika uni mustahkam, silliq va oson tozalanadigan qiladi.",
    category: "Rakvina va uchiqlar",
    subcategory: "Stol usti",
    price: "$420",
    features: [
      "Qo‘lda jilolangan",
      "Yuqori sifatli keramika",
      "Stol usti o‘rnatilishi",
      "Chizilishga chidamli sirt",
    ],
    specifications: [
      { name: "Material", value: "Keramika" },
      { name: "Shakl", value: "Dumaloq" },
      { name: "O‘lcham", value: "420 mm diametr, 150 mm balandlik" },
    ],
  },
  {
    id: "p8",
    name: "Radiant pol isitish tizimi",
    description:
      "Energiya tejamkor qulay pol isitish bilan har qadamda iliqlik.",
    longDescription:
      "Radiant tizimi hammom poliga yumshoq va bir tekis issiqlik beradi. Energiya tejamkor, plitka yoki tosh qoplamalar bilan mos keladi. Dasturlashtiriladigan termostat orqali to‘liq boshqaruv imkonini beradi.",
    category: "Isitish tizimlari",
    subcategory: "Pol isitish",
    price: "$320 dan boshlab",
    features: [
      "Energiya tejamkor",
      "Dasturlashtiriladigan termostat",
      "Bir xil issiqlik tarqatadi",
      "Har xil pollar uchun mos",
    ],
    specifications: [
      { name: "Turi", value: "Elektr mat" },
      { name: "Quvvat", value: "150W/m²" },
      { name: "Kafolat", value: "10 yil" },
    ],
  },
  {
    id: "p9",
    name: "Lagoon gidromassajli vanna",
    description:
      "Massaj purkagichlari bilan stressni kamaytiruvchi hashamatli vanna.",
    longDescription:
      "Lagoon gidromassajli vanna sizga dam olish va mushaklarni bo‘shashtirish imkonini beradi. Strategik joylashtirilgan purkagichlar tananing asosiy qismlarini massaj qiladi, raqamli boshqaruv esa sizga qulay sozlash imkonini beradi.",
    category: "Vannalar",
    subcategory: "Gidromassajli",
    price: "$2,499 dan boshlab",
    features: [
      "Ko‘p purkagichli massaj",
      "Raqamli boshqaruv",
      "LED yoritish",
      "Bardoshli akril",
    ],
    specifications: [
      { name: "Material", value: "Akril" },
      { name: "O‘lcham", value: "1800 x 900 x 620 mm" },
      { name: "Purkagichlar soni", value: "12" },
    ],
  },
  {
    id: "p10",
    name: "Compact devorga osiladigan unitaz",
    description: "Kichik joylar uchun ixcham va zamonaviy dizayn.",
    longDescription:
      "Compact osma unitaz joyni tejaydi va silliq, toza ko‘rinish yaratadi. Yashirin sisterna tizimi jim ishlaydi, rimless dizayni esa tozalashni osonlashtiradi.",
    category: "Unitazlar",
    subcategory: "Osma unitazlar",
    price: "$599 dan boshlab",
    features: [
      "Joyni tejovchi dizayn",
      "Rimless texnologiya",
      "Yumshoq yopiladigan o‘rindiq",
      "Ikki rejimli yuvish",
    ],
    specifications: [
      { name: "Material", value: "Keramika (Vitreous China)" },
      { name: "Chuqurlik", value: "520 mm" },
      { name: "Suv hajmi", value: "3/6 litr" },
    ],
  },
  {
    id: "p11",
    name: "Granit rakvina",
    description: "Tabiiy granitdan o‘yilgan, o‘ziga xos dizaynli rakvina.",
    longDescription:
      "Har bir granit rakvina tabiiy toshdan o‘yilgan noyob asardir. Ichki sirt jilolangan, tashqi qismi esa tabiiy tuzilmani saqlaydi. Har qanday zamonaviy hammom uchun ajoyib markaziy element.",
    category: "Rakvina va uchiqlar",
    subcategory: "Stol usti",
    price: "Narxni so‘rang",
    features: [
      "Tabiiy granit",
      "Har biri o‘ziga xos",
      "Jilolangan ichki sirt",
      "Stol ustiga o‘rnatiladi",
    ],
    specifications: [
      { name: "Material", value: "Tabiiy granit" },
      { name: "Og‘irligi", value: "Taxminan 25 kg" },
      { name: "Drenaj teshigi", value: "45 mm standart" },
    ],
  },
  {
    id: "p13",
    name: "Casabella aqlli ko‘zgusi",
    description:
      "LED yoritish, tuman ketkazuvchi va Bluetooth karnayli zamonaviy ko‘zgu.",
    longDescription:
      "Casabella aqlli ko‘zgusi hammomingizni 21-asrga olib kiradi. LED yoritish, tumanni ketkazuvchi qizdiriladigan sirt va ichki Bluetooth karnaylar bilan qulaylik yaratadi.",
    category: "Aksessuarlar",
    subcategory: "Ko‘zgular",
    price: "$450 dan boshlab",
    features: [
      "LED yoritish",
      "Qizdiriladigan anti-tuman sirt",
      "Bluetooth karnay",
      "Sensor boshqaruv",
    ],
    specifications: [
      { name: "O‘lcham", value: "800 x 600 mm" },
      { name: "Himoya darajasi", value: "IP44" },
      { name: "Yorug‘lik rangi", value: "6000K sovuq oq" },
    ],
  },
  {
    id: "p14",
    name: "Chrome sochiq radiatori",
    description:
      "Hammomni isituvchi va sochiqlarni iliq saqlovchi nafis radiator.",
    longDescription:
      "Zamonaviy dizayn va funksionallik uyg‘unligi. Yuqori sifatli po‘latdan ishlab chiqilgan, xrom qoplamasi mukammal yaltiraydi va haroratni samarali taqsimlaydi.",
    category: "Isitish tizimlari",
    subcategory: "Radiatorlar",
    price: "$320 dan boshlab",
    features: [
      "Yuqori issiqlik samaradorligi",
      "Bardoshli xrom qoplama",
      "Markaziy isitish tizimiga mos",
      "Zamonaviy dizayn",
    ],
    specifications: [
      { name: "Material", value: "Po‘lat (Mild Steel)" },
      { name: "Balandligi", value: "1200 mm" },
      { name: "Issiqlik chiqishi (BTU)", value: "1,800 (ΔT 50°C da)" },
    ],
  },
  {
    id: "p15",
    name: "Cascade vanna mikseri",
    description: "Tabiiy sharshara effektini yaratuvchi hashamatli kran.",
    longDescription:
      "Cascade mikseri keng va yumshoq suv oqimini yaratadi, go‘yo tabiiy sharsharada yuvinayotgandek. Massiv messingdan tayyorlangan zamonaviy dizaynli model.",
    category: "Kran va mikserlar",
    subcategory: "Vanna mikseri",
    price: "$410 dan boshlab",
    features: [
      "Sharshara oqimi",
      "Massiv messing",
      "Keramika mexanizmi",
      "Dek o‘rnatilishi",
    ],
    specifications: [
      { name: "Qoplama", value: "Polished Chrome" },
      { name: "Minimal bosim", value: "0.5 bar" },
      { name: "Ulanish turi", value: 'G 3/4"' },
    ],
  },
  {
    id: "p16",
    name: "Slate dush poddoni",
    description: "Toshga o‘xshash tuzilma va sirpanmas sirtli dush asosi.",
    longDescription:
      "Slate poddoni xavfsizlik va estetikani birlashtiradi. Tabiiy tosh effektli sirt sirpanishga qarshi, bardoshli tosh qatronidan tayyorlangan va past profilli dizaynga ega.",
    category: "Dush tizimlari",
    subcategory: "Poddonlar",
    price: "$280 dan boshlab",
    features: [
      "Sirpanmas sirt",
      "Tabiiy tosh ko‘rinishi",
      "Bardoshli material",
      "Past profil dizayn",
    ],
    specifications: [
      { name: "Material", value: "Tosh qatroni (Stone Resin)" },
      { name: "Balandlik", value: "30 mm" },
      { name: "Drenaj teshigi", value: "90 mm" },
    ],
  },
];

export const ALL_PRODUCTS: Product[] = ALL_PRODUCTS_LIST.map((p, i) => ({
  ...p,
  image: `/images/product/${p.id}.png`,
  gallery: [`/images/product/${p.id}.png`],
}));

export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 8);

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "all", name: "Barcha mahsulotlar", subcategories: [] },
  {
    id: "Vannalar",
    name: "Vannalar",
    subcategories: ["Erkin turuvchi", "O‘rnatiladigan", "Gidromassajli"],
  },
  {
    id: "Dush tizimlari",
    name: "Dush tizimlari",
    subcategories: ["Dush to‘plamlari", "Kabinalar", "Poddonlar"],
  },
  {
    id: "Unitazlar",
    name: "Unitazlar",
    subcategories: ["Aqlli unitazlar", "Osma unitazlar", "Klassik model"],
  },
  {
    id: "Rakvina va uchiqlar",
    name: "Rakvina va uchiqlar",
    subcategories: ["Stol usti", "Ichiga o‘rnatiladigan", "Pedestal"],
  },
  {
    id: "Rakvina tumbochalari",
    name: "Rakvina tumbochalari",
    subcategories: ["Bitta rakvina", "Ikki rakvina", "Modulli"],
  },
  {
    id: "Kran va mikserlar",
    name: "Kran va mikserlar",
    subcategories: ["Rakvina mikseri", "Dush mikseri", "Vanna mikseri"],
  },
  {
    id: "Aksessuarlar",
    name: "Aksessuarlar",
    subcategories: ["Ko‘zgular", "Sochiq osgichlar", "Dispenserlar"],
  },
];
