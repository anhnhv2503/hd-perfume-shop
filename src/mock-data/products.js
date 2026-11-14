/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} brand
 * @property {"Eau de Parfum"|"Eau de Toilette"|"Extrait de Parfum"} concentration
 * @property {string} volume
 * @property {number} price
 * @property {"Best Seller"|"New Arrival"} category  Key used in URLs; see `categoryLabels` for display text.
 * @property {"Solar Florals"|"Smoky Woods"|"Velvet Orientals"} collection
 * @property {string} description
 * @property {{top: string[], heart: string[], base: string[]}} olfactory_notes
 * @property {{longevity: string, sillage: string}} performance
 * @property {string} image_url
 */

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

/** @type {Product[]} */
export const products = [
  {
    id: "p1",
    name: "Velvet Rose & Oud",
    brand: "Maison Luxe",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 245.0,
    category: "Best Seller",
    collection: "Velvet Orientals",
    description:
      "Một mùi hương hoa cỏ đậm, nồng nàn và giàu chiều sâu. Đóa hồng Damask thẫm màu nhất quyện trong gỗ trầm hương ám khói, điểm chút đinh hương cay nồng và vị praline ngọt ngào.",
    olfactory_notes: {
      top: ["Đinh hương", "Cam Bergamot", "Tiêu hồng"],
      heart: ["Hoa hồng Damask", "Hoa nhài", "Praline"],
      base: ["Trầm hương (Oud)", "Vani", "Gỗ đàn hương"],
    },
    performance: { longevity: "8-10 giờ (Bám lâu)", sillage: "Mạnh" },
    image_url: img("photo-1594035910387-fea47794261f"),
  },
  {
    id: "p2",
    name: "Citrus Riviera",
    brand: "Aqua Vitae",
    concentration: "Eau de Toilette",
    volume: "50ml",
    price: 120.0,
    category: "New Arrival",
    collection: "Solar Florals",
    description:
      "Làn hương cam chanh Địa Trung Hải tươi mát bừng tỉnh. Hoàn hảo cho những ngày hè, gợi cảm giác làn gió biển mát lành dọc bờ biển Amalfi.",
    olfactory_notes: {
      top: ["Chanh Sicily", "Quýt", "Bưởi"],
      heart: ["Neroli", "Hoa cam", "Hương thảo"],
      base: ["Xạ hương trắng", "Gỗ tuyết tùng", "Long diên hương"],
    },
    performance: { longevity: "4-6 giờ (Vừa phải)", sillage: "Vừa phải" },
    image_url: img("photo-1595425970377-c9703d7408f2"),
  },
  {
    id: "p3",
    name: "Midnight Rouge",
    brand: "Nuit Blanche",
    concentration: "Extrait de Parfum",
    volume: "70ml",
    price: 320.0,
    category: "Best Seller",
    collection: "Velvet Orientals",
    description:
      "Sự hòa quyện mê hoặc, ngọt ngào và thanh thoát của nghệ tây và hoa nhài, neo lại bởi tuyết tùng ấm áp và nhựa hổ phách. Gây nghiện và khó quên.",
    olfactory_notes: {
      top: ["Nghệ tây", "Hạnh nhân đắng"],
      heart: ["Hoa nhài Ai Cập", "Tuyết tùng"],
      base: ["Long diên hương", "Xạ hương", "Hương gỗ"],
    },
    performance: { longevity: "12+ giờ (Bền bỉ)", sillage: "Rất mạnh" },
    image_url: img("photo-1541643600914-78b084683601"),
  },
  {
    id: "p4",
    name: "Santal Horizon",
    brand: "Botanica",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 185.0,
    category: "New Arrival",
    collection: "Smoky Woods",
    description:
      "Hương đàn hương mịn như kem, dễ chịu, hòa cùng gia vị khô và da thuộc. Mùi hương tạo nên khí chất điềm tĩnh và tự tin.",
    olfactory_notes: {
      top: ["Bạch đậu khấu", "Hoa violet", "Hoa diên vĩ"],
      heart: ["Đàn hương Úc", "Cói giấy"],
      base: ["Da thuộc", "Tuyết tùng Virginia", "Hổ phách"],
    },
    performance: {
      longevity: "7-9 giờ (Bám lâu)",
      sillage: "Vừa đến mạnh",
    },
    image_url: img("photo-1588405748880-12d1d2a59f75"),
  },
  {
    id: "p5",
    name: "Amber Noir",
    brand: "Maison Luxe",
    concentration: "Extrait de Parfum",
    volume: "50ml",
    price: 395.0,
    category: "Best Seller",
    collection: "Smoky Woods",
    description:
      "Hổ phách nhựa ấm nồng, âm ỉ, được làm dịu bởi đậu tonka và thoáng trầm nhang. Sang trọng, bao bọc, dành cho những buổi tối se lạnh.",
    olfactory_notes: {
      top: ["Tiêu đen", "Nhựa elemi", "Quế"],
      heart: ["Labdanum", "Trầm nhang", "Rễ diên vĩ"],
      base: ["Hổ phách", "Đậu tonka", "Hoắc hương"],
    },
    performance: { longevity: "12+ giờ (Bền bỉ)", sillage: "Rất mạnh" },
    image_url: img("photo-1523293182086-7651a899d37f"),
  },
  {
    id: "p6",
    name: "White Peony Dawn",
    brand: "Botanica",
    concentration: "Eau de Parfum",
    volume: "75ml",
    price: 165.0,
    category: "New Arrival",
    collection: "Solar Florals",
    description:
      "Những đóa mẫu đơn đẫm sương và cánh hoa mềm mại lúc bình minh. Hương hoa trong trẻo, lãng mạn, kết thúc bằng xạ hương mịn màng như vải lanh mới giặt.",
    olfactory_notes: {
      top: ["Lê", "Vải", "Lá xanh"],
      heart: ["Mẫu đơn trắng", "Hoa lan Nam Phi", "Hoa linh lan"],
      base: ["Xạ hương dịu", "Gỗ sáng màu", "Cashmeran"],
    },
    performance: { longevity: "6-8 giờ (Vừa phải)", sillage: "Vừa phải" },
    image_url: img("photo-1592945403244-b3fbafd7f539"),
  },
  {
    id: "p7",
    name: "Vetiver Sauvage",
    brand: "Aqua Vitae",
    concentration: "Eau de Toilette",
    volume: "100ml",
    price: 110.0,
    category: "Best Seller",
    collection: "Smoky Woods",
    description:
      "Cỏ hương bài Haiti tươi giòn, mang hơi đất, được nâng lên bởi bưởi và muối biển. Một mùi hương đặc trưng hằng ngày, khô lại thành hương gỗ sạch sẽ.",
    olfactory_notes: {
      top: ["Bưởi", "Muối biển", "Bách xù"],
      heart: ["Cỏ hương bài Haiti", "Phong lữ"],
      base: ["Tuyết tùng", "Rêu sồi", "Xạ hương"],
    },
    performance: { longevity: "5-7 giờ (Vừa phải)", sillage: "Vừa phải" },
    image_url: img("photo-1615634260167-c8cdede054de"),
  },
  {
    id: "p8",
    name: "Iris Poudre",
    brand: "Nuit Blanche",
    concentration: "Eau de Parfum",
    volume: "50ml",
    price: 210.0,
    category: "New Arrival",
    collection: "Solar Florals",
    description:
      "Hương diên vĩ phấn mịn mang phong cách haute couture, thanh lịch mát lạnh như lụa. Mềm mại, tinh tế và cuốn hút một cách lặng lẽ.",
    olfactory_notes: {
      top: ["Aldehyde", "Quýt", "Cam Bergamot"],
      heart: ["Bơ diên vĩ", "Lá violet", "Hoa vòi voi"],
      base: ["Cánh kiến trắng", "Xạ hương trắng", "Gỗ đàn hương"],
    },
    performance: {
      longevity: "7-9 giờ (Bám lâu)",
      sillage: "Vừa phải",
    },
    image_url: img("photo-1587017539504-67cfbddac569"),
  },
  {
    id: "p9",
    name: "Tobacco & Honey",
    brand: "Maison Luxe",
    concentration: "Eau de Parfum",
    volume: "100ml",
    price: 260.0,
    category: "Best Seller",
    collection: "Velvet Orientals",
    description:
      "Mật ong vàng óng rưới trên lá thuốc lá khô, rượu rum và gia vị ấm. Một mùi hương gourmand kinh điển với trái tim quyến rũ, ám khói.",
    olfactory_notes: {
      top: ["Rượu rum", "Quế", "Nhục đậu khấu"],
      heart: ["Lá thuốc lá", "Mật ong", "Trái cây khô"],
      base: ["Vani", "Đậu tonka", "Tuyết tùng"],
    },
    performance: { longevity: "9-11 giờ (Rất lâu)", sillage: "Mạnh" },
    image_url: img("photo-1557170334-a9632e77c6e4"),
  },
  {
    id: "p10",
    name: "Ocean Mist",
    brand: "Aqua Vitae",
    concentration: "Eau de Toilette",
    volume: "50ml",
    price: 95.0,
    category: "New Arrival",
    collection: "Solar Florals",
    description:
      "Hương biển, xô thơm và gỗ trôi. Vẻ lấp lánh phóng khoáng của một buổi sớm ven biển, nhẹ nhàng và sảng khoái.",
    olfactory_notes: {
      top: ["Hương biển", "Chanh vàng", "Bạc hà"],
      heart: ["Xô thơm", "Oải hương", "Hoa súng"],
      base: ["Gỗ trôi", "Ambroxan", "Xạ hương"],
    },
    performance: { longevity: "3-5 giờ (Nhẹ)", sillage: "Nhẹ" },
    image_url: img("photo-1563170351-be82bc888aa4"),
  },
];

export const concentrations = [
  "Eau de Toilette",
  "Eau de Parfum",
  "Extrait de Parfum",
];

/** Display text for the `category` keys. */
export const categoryLabels = {
  "Best Seller": "Bán chạy",
  "New Arrival": "Hàng mới về",
};

export const collections = ["Solar Florals", "Smoky Woods", "Velvet Orientals"];
export const brands = [...new Set(products.map((p) => p.brand))];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getBestSellers = () =>
  products.filter((p) => p.category === "Best Seller");
export const getNewArrivals = () =>
  products.filter((p) => p.category === "New Arrival");
export const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    price,
  );
