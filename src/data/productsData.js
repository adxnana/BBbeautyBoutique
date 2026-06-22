// =====================================================================
// B&B BEAUTY BOUTIQUE LLC — PRODUCT CATALOG
// =====================================================================
//
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░  HOW TO ADD YOUR PRODUCT IMAGES                                  ░
// ░  ---------------------------------------------------------------- ░
// ░  1. Create the folder:   public/images/products/                  ░
// ░  2. Drop your .jpg files INTO that folder.                        ░
// ░  3. The filename you save MUST match the filename at the end of   ░
// ░     each image path below (the part after the last slash).        ░
// ░                                                                   ░
// ░  Example:                                                         ░
// ░     path in code:  "/images/products/verona-slip-front.jpg"       ░
// ░     save file at:  public/images/products/verona-slip-front.jpg   ░
// ░                                                                   ░
// ░  You do NOT need to touch any other file. Just match the names.   ░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//
// =====================================================================

const products = [
  // ███████████████████████████████████████████████████████████████████
  // ██  CATEGORY: DRESSES                                            ██
  // ███████████████████████████████████████████████████████████████████
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
      // >>> IMAGE #1 — VERONA SLIP DRESS — FRONT VIEW <<<
      "/images/products/verona-slip-front.jpg",
      // >>> IMAGE #2 — VERONA SLIP DRESS — BACK VIEW <<<
      "/images/products/verona-slip-back.jpg",
      // >>> IMAGE #3 — VERONA SLIP DRESS — FABRIC / STRAP DETAIL <<<
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
      // >>> IMAGE #4 — MARLOW KNIT MINI — FRONT VIEW <<<
      "/images/products/marlow-mini-front.jpg",
      // >>> IMAGE #5 — MARLOW KNIT MINI — SIDE / 3-QUARTER VIEW <<<
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
      // >>> IMAGE #6 — AVERY POPLIN SHIRTDRESS — FRONT VIEW <<<
      "/images/products/avery-shirtdress-front.jpg",
      // >>> IMAGE #7 — AVERY POPLIN SHIRTDRESS — TIE-WAIST / COLLAR DETAIL <<<
      "/images/products/avery-shirtdress-detail.jpg",
    ],
  },

  // ███████████████████████████████████████████████████████████████████
  // ██  CATEGORY: TOPS                                               ██
  // ███████████████████████████████████████████████████████████████████
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
      // >>> IMAGE #8 — HALSEY SILK BLOUSE — FRONT VIEW <<<
      "/images/products/halsey-blouse-front.jpg",
      // >>> IMAGE #9 — HALSEY SILK BLOUSE — BACK VIEW <<<
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
    images: [
      // >>> IMAGE #10 — RIVET RIBBED TANK — FRONT VIEW (ONLY IMAGE) <<<
      "/images/products/rivet-tank-front.jpg",
    ],
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
      // >>> IMAGE #11 — LENNOX CROPPED CARDIGAN — FRONT VIEW <<<
      "/images/products/lennox-cardi-front.jpg",
      // >>> IMAGE #12 — LENNOX CROPPED CARDIGAN — BUTTON / KNIT DETAIL <<<
      "/images/products/lennox-cardi-detail.jpg",
    ],
  },

  // ███████████████████████████████████████████████████████████████████
  // ██  CATEGORY: OUTERWEAR                                          ██
  // ███████████████████████████████████████████████████████████████████
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
      // >>> IMAGE #13 — BEAUMONT TRENCH COAT — FRONT VIEW (BELTED) <<<
      "/images/products/beaumont-trench-front.jpg",
      // >>> IMAGE #14 — BEAUMONT TRENCH COAT — BACK VIEW <<<
      "/images/products/beaumont-trench-back.jpg",
      // >>> IMAGE #15 — BEAUMONT TRENCH COAT — STORM FLAP / BUCKLE DETAIL <<<
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
      // >>> IMAGE #16 — HOLLOWAY WOOL BLAZER — FRONT VIEW <<<
      "/images/products/holloway-blazer-front.jpg",
      // >>> IMAGE #17 — HOLLOWAY WOOL BLAZER — SIDE VIEW <<<
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
    images: [
      // >>> IMAGE #18 — SABLE CROPPED PUFFER — FRONT VIEW (ONLY IMAGE) <<<
      "/images/products/sable-puffer-front.jpg",
    ],
  },

  // ███████████████████████████████████████████████████████████████████
  // ██  CATEGORY: BOTTOMS                                            ██
  // ███████████████████████████████████████████████████████████████████
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
      // >>> IMAGE #19 — PARK PLEATED TROUSER — FRONT VIEW (FULL LENGTH) <<<
      "/images/products/park-trouser-front.jpg",
      // >>> IMAGE #20 — PARK PLEATED TROUSER — PLEAT / WAISTBAND DETAIL <<<
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
      // >>> IMAGE #21 — HUDSON HIGH-RISE DENIM — FRONT VIEW <<<
      "/images/products/hudson-denim-front.jpg",
      // >>> IMAGE #22 — HUDSON HIGH-RISE DENIM — BACK VIEW (POCKETS) <<<
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
    images: [
      // >>> IMAGE #23 — INES SATIN MIDI SKIRT — FRONT VIEW (ONLY IMAGE) <<<
      "/images/products/ines-skirt-front.jpg",
    ],
  },
];

export default products;
