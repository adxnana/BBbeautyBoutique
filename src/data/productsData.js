// Product catalog for B&B Beauty Boutique LLC.
// LAYOUT NOTE: Each product references local image paths under /images/products/.
// Drop the actual JPG files into the public/images/products/ folder using the
// exact filenames listed below. The UI renders a styled placeholder until then.

const products = [
  // -------- DRESSES --------
  {
    id: "dress-01",
    name: "Verona Slip Dress",
    category: "Dresses",
    price: 168.0,
    description:
      "Bias-cut midi slip in matte satin with adjustable spaghetti straps and a low cowl back.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Espresso", "Cream", "Blush"],
    stock: 8,
    material: "92% Triacetate, 8% Polyester",
    care: "Dry clean only",
    images: [
      "/images/products/verona-slip-front.jpg",
      "/images/products/verona-slip-back.jpg",
      "/images/products/verona-slip-detail.jpg",
    ],
  },
  {
    id: "dress-02",
    name: "Marlow Knit Mini",
    category: "Dresses",
    price: 124.0,
    description:
      "Fitted ribbed-knit mini with a square neckline and structured cap sleeves.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Cream", "Pink"],
    stock: 2,
    material: "78% Viscose, 22% Nylon",
    care: "Hand wash cold, lay flat to dry",
    images: [
      "/images/products/marlow-mini-front.jpg",
      "/images/products/marlow-mini-side.jpg",
    ],
  },
  {
    id: "dress-03",
    name: "Avery Poplin Shirtdress",
    category: "Dresses",
    price: 148.0,
    description:
      "Crisp cotton-poplin shirtdress with a tie waist and full midi skirt.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Pink"],
    stock: 12,
    material: "100% Cotton Poplin",
    care: "Machine wash cold, tumble dry low",
    images: [
      "/images/products/avery-shirtdress-front.jpg",
      "/images/products/avery-shirtdress-detail.jpg",
    ],
  },
  // -------- TOPS --------
  {
    id: "top-01",
    name: "Halsey Silk Blouse",
    category: "Tops",
    price: 132.0,
    description:
      "Relaxed silk-charmeuse blouse with a notched collar and mother-of-pearl buttons.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Espresso", "Pink"],
    stock: 6,
    material: "100% Mulberry Silk",
    care: "Dry clean recommended",
    images: [
      "/images/products/halsey-blouse-front.jpg",
      "/images/products/halsey-blouse-back.jpg",
    ],
  },
  {
    id: "top-02",
    name: "Rivet Ribbed Tank",
    category: "Tops",
    price: 48.0,
    description:
      "Soft pima ribbed tank with a scoop neck. Designed for layering.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Pink", "Espresso"],
    stock: 24,
    material: "95% Pima Cotton, 5% Elastane",
    care: "Machine wash cold",
    images: ["/images/products/rivet-tank-front.jpg"],
  },
  {
    id: "top-03",
    name: "Lennox Cropped Cardigan",
    category: "Tops",
    price: 96.0,
    description:
      "Cropped fine-gauge cardigan with cropped sleeves and pearl-finish buttons.",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Cream", "Black"],
    stock: 1,
    material: "70% Cotton, 30% Cashmere",
    care: "Hand wash cold, lay flat to dry",
    images: [
      "/images/products/lennox-cardi-front.jpg",
      "/images/products/lennox-cardi-detail.jpg",
    ],
  },
  // -------- OUTERWEAR --------
  {
    id: "outer-01",
    name: "Beaumont Trench Coat",
    category: "Outerwear",
    price: 298.0,
    description:
      "Double-breasted cotton-gabardine trench with storm flap and self belt.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Stone", "Espresso"],
    stock: 5,
    material: "100% Cotton Gabardine",
    care: "Dry clean only",
    images: [
      "/images/products/beaumont-trench-front.jpg",
      "/images/products/beaumont-trench-back.jpg",
      "/images/products/beaumont-trench-detail.jpg",
    ],
  },
  {
    id: "outer-02",
    name: "Holloway Wool Blazer",
    category: "Outerwear",
    price: 248.0,
    description:
      "Single-breasted wool-blend blazer with notched lapels and welt pockets.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream"],
    stock: 9,
    material: "70% Wool, 28% Polyester, 2% Elastane",
    care: "Dry clean only",
    images: [
      "/images/products/holloway-blazer-front.jpg",
      "/images/products/holloway-blazer-side.jpg",
    ],
  },
  {
    id: "outer-03",
    name: "Sable Cropped Puffer",
    category: "Outerwear",
    price: 184.0,
    description:
      "Lightweight cropped puffer with recycled down fill and a stand collar.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Black"],
    stock: 2,
    material: "Shell: 100% Recycled Nylon. Fill: Recycled Down.",
    care: "Spot clean or dry clean",
    images: ["/images/products/sable-puffer-front.jpg"],
  },
  // -------- BOTTOMS --------
  {
    id: "bottom-01",
    name: "Park Pleated Trouser",
    category: "Bottoms",
    price: 138.0,
    description:
      "High-rise pleated trouser in wool blend with a tailored straight leg.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Espresso", "Cream"],
    stock: 11,
    material: "65% Wool, 33% Viscose, 2% Elastane",
    care: "Dry clean recommended",
    images: [
      "/images/products/park-trouser-front.jpg",
      "/images/products/park-trouser-detail.jpg",
    ],
  },
  {
    id: "bottom-02",
    name: "Hudson High-Rise Denim",
    category: "Bottoms",
    price: 118.0,
    description:
      "Rigid high-rise straight-leg denim with a clean hem and five-pocket styling.",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Indigo", "Black"],
    stock: 14,
    material: "99% Cotton, 1% Elastane",
    care: "Machine wash cold inside out",
    images: [
      "/images/products/hudson-denim-front.jpg",
      "/images/products/hudson-denim-back.jpg",
    ],
  },
  {
    id: "bottom-03",
    name: "Ines Satin Midi Skirt",
    category: "Bottoms",
    price: 128.0,
    description:
      "Bias-cut satin midi skirt with a clean waistband and hidden side zip.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Black", "Cream"],
    stock: 7,
    material: "100% Polyester Satin",
    care: "Dry clean only",
    images: ["/images/products/ines-skirt-front.jpg"],
  },
];

export default products;
