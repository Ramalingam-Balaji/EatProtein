
// const imageUrl = (id, width = 500) =>
//   `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

// const makeItem = (
//   id,
//   name,
//   description,
//   category,
//   price,
//   protein,
//   image,
//   labels = ["Popular"]
// ) => ({
//   id,
//   name,
//   description,
//   category,
//   price,
//   protein,
//   image: imageUrl(image),
//   labels,
//   isAvailable: true,
// });

// // --------------------------------------------------
// // VEGETABLES
// // --------------------------------------------------

// const vegetables = [
//   makeItem("veg-01", "Fresh Tomatoes", "Farm-fresh ripe tomatoes", "Vegetables", 40, 1.0, "photo-1546094096-0df4bcaaa337", ["Fresh", "Bestseller"]),
//   makeItem("veg-02", "Fresh Spinach", "Green leafy spinach", "Vegetables", 30, 2.9, "photo-1576045057995-568f588f82fb", ["Fresh", "Healthy"]),
//   makeItem("veg-03", "Green Broccoli", "Fresh broccoli florets", "Vegetables", 80, 2.8, "photo-1459411552884-841db9b3cc2a", ["Fresh", "Healthy"]),
//   makeItem("veg-04", "Fresh Carrots", "Crunchy farm-fresh carrots", "Vegetables", 45, 0.9, "photo-1445282768818-728615cc910a", ["Fresh"]),
//   makeItem("veg-05", "Green Beans", "Fresh green beans", "Vegetables", 50, 1.8, "photo-1567375698348-5d9d5ae99de0", ["Fresh"]),
//   makeItem("veg-06", "Fresh Cucumbers", "Crisp cucumbers for salads", "Vegetables", 35, 0.7, "photo-1604977042946-1eecc30f269e", ["Fresh", "Healthy"]),
//   makeItem("veg-07", "Green Capsicum", "Fresh green bell peppers", "Vegetables", 55, 1.0, "photo-1563565375-f3fdfdbefa83", ["Fresh"]),
//   makeItem("veg-08", "Red Onions", "Everyday cooking onions", "Vegetables", 40, 1.1, "photo-1508747703725-719777637510", ["Popular"]),
// ];

// // --------------------------------------------------
// // FRUITS
// // --------------------------------------------------

// const fruits = [
//   makeItem("fruit-01", "Fresh Apples", "Crisp and juicy apples", "Fruits", 160, 0.3, "photo-1560806887-1e4cd0b6cbd6", ["Fresh", "Popular"]),
//   makeItem("fruit-02", "Ripe Bananas", "Naturally sweet bananas", "Fruits", 60, 1.1, "photo-1571771894821-ce9b6c11b08e", ["Fresh", "Bestseller"]),
//   makeItem("fruit-03", "Fresh Oranges", "Juicy seasonal oranges", "Fruits", 90, 0.9, "photo-1547514701-42782101795e", ["Fresh"]),
//   makeItem("fruit-04", "Green Grapes", "Sweet seedless grapes", "Fruits", 120, 0.7, "photo-1537640538966-79f369143f8f", ["Fresh"]),
//   makeItem("fruit-05", "Fresh Papaya", "Ripe tropical papaya", "Fruits", 70, 0.5, "photo-1517282009859-f000ec3b26fe", ["Fresh", "Healthy"]),
//   makeItem("fruit-06", "Sweet Watermelon", "Refreshing seasonal watermelon", "Fruits", 50, 0.6, "photo- watermelon", ["Fresh"]),
// ];

// // --------------------------------------------------
// // NUTS AND DRY FRUITS
// // --------------------------------------------------

// const nuts = [
//   makeItem("nut-01", "Premium Almonds", "Crunchy almonds", "Dry Fruits", 250, 21.2, "photo-1508061253366-f7da158b6d46", ["Protein Rich", "Popular"]),
//   makeItem("nut-02", "Cashew Nuts", "Creamy premium cashews", "Dry Fruits", 300, 18.2, "photo-1505576399274-565b52d4ac71", ["Protein Rich"]),
//   makeItem("nut-03", "Walnuts", "Nutritious walnut kernels", "Dry Fruits", 320, 15.2, "photo-1519622546751-5d1e3b2c3b2e", ["Healthy"]),
//   makeItem("nut-04", "Roasted Peanuts", "Crunchy roasted peanuts", "Snacks", 80, 25.8, "photo-1567892737950-30c4db37cd89", ["Protein Rich", "Bestseller"]),
//   makeItem("nut-05", "Pistachios", "Premium pistachio kernels", "Dry Fruits", 350, 20.2, "photo-1615485290382-441e4d049cb5", ["Protein Rich"]),
// ];

// // --------------------------------------------------
// // MEAT
// // --------------------------------------------------

// const meat = [
//   makeItem("meat-01", "Fresh Chicken Breast", "Lean boneless chicken breast", "Chicken", 260, 31, "photo-1604503468506-a8da13d82791", ["Protein Rich", "Bestseller"]),
//   makeItem("meat-02", "Chicken Curry Cut", "Fresh chicken curry pieces", "Chicken", 240, 27, "photo-1607623814075-e51df1bdc82f", ["Fresh"]),
//   makeItem("meat-03", "Chicken Drumsticks", "Fresh chicken drumsticks", "Chicken", 280, 28, "photo-1587593810167-a84920ea0781", ["Popular"]),
//   makeItem("meat-04", "Fresh Mutton", "Freshly prepared mutton cuts", "Mutton", 750, 25, "photo-1607623814075-e51df1bdc82f", ["Protein Rich"]),
//   makeItem("meat-05", "Chicken Mince", "Fresh minced chicken", "Chicken", 290, 27, "photo-1604503468506-a8da13d82791", ["Fresh"]),
// ];

// // --------------------------------------------------
// // EGGS
// // --------------------------------------------------

// const eggs = [
//   makeItem("egg-01", "Farm Fresh Eggs", "Pack of 6 fresh eggs", "Eggs", 50, 6.3, "photo-1506976785307-8732e854ad03", ["Protein Rich", "Bestseller"]),
//   makeItem("egg-02", "Brown Eggs", "Pack of 6 brown eggs", "Eggs", 65, 6.3, "photo-1518569656558-1f25e69d93d7", ["Protein Rich"]),
//   makeItem("egg-03", "Eggs Family Pack", "Pack of 12 eggs", "Eggs", 100, 6.3, "photo-1506976785307-8732e854ad03", ["Value Pack"]),
//   makeItem("egg-04", "Boiled Eggs", "Ready-to-eat boiled eggs", "Ready to Eat", 40, 6.3, "photo-1518569656558-1f25e69d93d7", ["Protein Rich", "Ready to Eat"]),
//   makeItem("egg-05", "Country Eggs", "Country-style eggs", "Eggs", 90, 6.3, "photo-1506976785307-8732e854ad03", ["Popular"]),
// ];

// // --------------------------------------------------
// // DAIRY
// // --------------------------------------------------

// const dairy = [
//   makeItem("dairy-01", "Fresh Milk", "Fresh dairy milk", "Milk", 35, 3.3, "photo-1550583724-b2692b85b150", ["Fresh", "Popular"]),
//   makeItem("dairy-02", "Paneer", "Fresh cottage cheese", "Paneer", 100, 18.3, "photo-1631452180519-c014fe946bc7", ["Protein Rich", "Bestseller"]),
//   makeItem("dairy-03", "Greek Yogurt", "Creamy protein-rich yogurt", "Yogurt", 90, 10, "photo-1488477181946-6428a0291777", ["Protein Rich", "Healthy"]),
//   makeItem("dairy-04", "Cheddar Cheese", "Rich cheddar cheese", "Cheese", 150, 25, "photo-1486297678162-eb2a19b0a32d", ["Protein Rich"]),
//   makeItem("dairy-05", "Fresh Curd", "Creamy homemade-style curd", "Curd", 45, 3.5, "photo-1571212515416-fca9e3b0a0c1", ["Fresh"]),
// ];

// // --------------------------------------------------
// // BAKERY
// // --------------------------------------------------

// const bakery = [
//   makeItem("bakery-01", "Whole Wheat Bread", "Fresh whole wheat bread", "Bread", 50, 9, "photo-1509440159596-0249088772ff", ["Popular"]),
//   makeItem("bakery-02", "Multigrain Bread", "Bread made with mixed grains", "Bread", 65, 10, "photo-1586444248902-2f64eddc13df", ["Healthy"]),
//   makeItem("bakery-03", "Chocolate Cake", "Rich chocolate cake", "Cakes", 350, 5, "photo-1578985545062-69928b1d9587", ["Popular"]),
//   makeItem("bakery-04", "Butter Croissant", "Flaky butter croissant", "Pastries", 60, 6, "photo-1555507036-ab1f4038808a", ["Fresh"]),
//   makeItem("bakery-05", "Oat Cookies", "Crunchy oat cookies", "Cookies", 90, 7, "photo-1499636136210-6f4ee915583e", ["Healthy"]),
// ];

// // --------------------------------------------------
// // RESTAURANT FOOD
// // --------------------------------------------------

// const restaurant = [
//   makeItem("restaurant-01", "Grilled Chicken Meal", "Grilled chicken with vegetables", "Main Course", 220, 32, "photo-1532550907401-a500c9a57435", ["Protein Rich", "Bestseller"]),
//   makeItem("restaurant-02", "Paneer Rice Bowl", "Paneer served with rice and vegetables", "Rice Bowls", 180, 18, "photo-1512058564366-18510be2db19", ["Popular"]),
//   makeItem("restaurant-03", "Chicken Biryani", "Aromatic chicken biryani", "Biryani", 200, 25, "photo-1563379091339-03246963d96c", ["Bestseller"]),
//   makeItem("restaurant-04", "Fresh Garden Salad", "Fresh vegetables and greens", "Salads", 120, 4, "photo-1512621776951-a57141f2eefd", ["Healthy"]),
//   makeItem("restaurant-05", "Grilled Fish Meal", "Grilled fish with fresh sides", "Main Course", 250, 26, "photo-1519708227418-c8fd9a32b7a2", ["Protein Rich"]),
// ];

// // --------------------------------------------------
// // HOMEMADE FOODS
// // --------------------------------------------------

// const homeFoods = [
//   makeItem("home-01", "Homemade Mango Pickle", "Traditional mango pickle", "Pickles", 120, 1.5, "photo-1547592166-23ac45744acd", ["Homemade", "Popular"]),
//   makeItem("home-02", "Lemon Pickle", "Tangy homemade lemon pickle", "Pickles", 100, 1.2, "photo-1547592180-85f173990554", ["Homemade"]),
//   makeItem("home-03", "Andhra Chicken Pickle", "Traditional spicy chicken pickle", "Pickles", 280, 20, "photo-1607623814075-e51df1bdc82f", ["Protein Rich"]),
//   makeItem("home-04", "Homemade Idli Podi", "Traditional spice powder", "Powders", 80, 10, "photo-1547592166-23ac45744acd", ["Homemade"]),
//   makeItem("home-05", "Homestyle Sambar", "Traditional home-style sambar", "Ready to Eat", 100, 5, "photo-1547592180-85f173990554", ["Homemade"]),
// ];

// // --------------------------------------------------
// // DIET FOODS
// // --------------------------------------------------

// const dietFoods = [
//   makeItem("diet-01", "Protein Salad Bowl", "Fresh salad with protein-rich toppings", "Salads", 180, 20, "photo-1512621776951-a57141f2eefd", ["Protein Rich", "Healthy"]),
//   makeItem("diet-02", "Grilled Chicken Bowl", "Lean chicken and vegetables", "Meal Bowls", 240, 32, "photo-1532550907401-a500c9a57435", ["Protein Rich"]),
//   makeItem("diet-03", "Overnight Oats", "Oats with milk and fruit", "Breakfast", 120, 12, "photo-1517673132405-a56a62b18caf", ["Healthy"]),
//   makeItem("diet-04", "Sprout Salad", "Fresh mixed sprouts and vegetables", "Salads", 90, 12, "photo-1512621776951-a57141f2eefd", ["Protein Rich", "Healthy"]),
//   makeItem("diet-05", "Peanut Butter", "Creamy peanut butter", "Spreads", 180, 25, "photo-1505576399274-565b52d4ac71", ["Protein Rich"]),
// ];

// // --------------------------------------------------
// // STORE-TO-PRODUCT MAPPINGS
// // Keep store names identical to foodStoresData.js.
// // --------------------------------------------------

// export const FOOD_STORE_ITEMS = {
//   "Sai Charan Provisions": vegetables,
//   "Nani Nuts & Dry Fruits": nuts,
//   "JD Provisions": [...fruits, ...vegetables],
//   "Nandhan Kaju House": nuts,
//   "Green Basket": vegetables,

//   "Fresh Meat Corner": meat,
//   "Daily Chicken Mart": meat,
//   "Farm Fresh Poultry": meat,
//   "Prime Meat House": meat,

//   "Daily Bites": restaurant,
//   "Spice Garden": restaurant,
//   "Green Bowl Kitchen": dietFoods,
//   "Home Taste Restaurant": restaurant,

//   "Egg House": eggs,
//   "Farm Egg Centre": eggs,
//   "Daily Protein Store": [...eggs, ...nuts],
//   "Fresh Poultry Mart": eggs,

//   "Daily Dairy Fresh": dairy,
//   "Milk Basket": dairy,
//   "Pure Dairy House": dairy,
//   "Farm Milk Store": dairy,

//   "Nature's Basket": [...fruits, ...vegetables],
//   "Fresh Farm Market": [...fruits, ...vegetables],
//   "Daily Veg Mart": vegetables,

//   "S R Bakery": bakery,
//   "Sweet Treats": bakery,
//   "Golden Oven": bakery,
//   "Traditional Sweets": bakery,

//   "Amma Home Foods": homeFoods,
//   "Village Kitchen": homeFoods,
//   "Andhra Pickles House": homeFoods,
//   "Home Taste Foods": homeFoods,

//   "Healthy Bowl": dietFoods,
//   "Fit Food Kitchen": dietFoods,
//   "Green Plate": dietFoods,
//   "Protein Hub": nuts,
// };

// // --------------------------------------------------
// // FILTER LABELS
// // These must match the labels assigned to products.
// // --------------------------------------------------

// export const STORE_FILTER_LABELS = [
//   "All",
//   "Popular",
//   "Fresh",
//   "Bestseller",
//   "Healthy",
//   "Protein Rich",
//   "Value Pack",
//   "Ready to Eat",
//   "Homemade",
// ];

// // --------------------------------------------------
// // HELPER: GET PRODUCTS FOR A STORE
// // --------------------------------------------------

// export const getStoreItems = (storeName) =>
//   FOOD_STORE_ITEMS[storeName] || [];

// // --------------------------------------------------
// // HELPER: GET UNIQUE LABELS FOR A STORE
// // --------------------------------------------------

// export const getStoreLabels = (storeName) => [
//   "All",
//   ...new Set(
//     getStoreItems(storeName).flatMap(
//       (item) => item.labels || []
//     )
//   ),
// ];

// // --------------------------------------------------
// // HELPER: FILTER PRODUCTS BY CATEGORY AND LABEL
// // --------------------------------------------------

// export const filterStoreItems = (
//   storeName,
//   { category = "All", label = "All" } = {}
// ) =>
//   getStoreItems(storeName).filter(
//     (item) =>
//       (category === "All" || item.category === category) &&
//       (label === "All" || (item.labels || []).includes(label))
//   );





// src/data/foodStoreItems.js


const imageUrl = (id, width = 500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

// Nutritional information is approximate.
// Quantity describes the serving/pack size.
// Calories are approximate kcal per serving.

export const STORE_FILTER_LABELS = [
  "All",
  "Popular",
  "Best Seller",
  "High Protein",
  "Low Calories",
  "Vegetarian",
  "Fresh",
];

const nutritionData = {
  // Vegetables
  "veg-01": ["100 g", 18],
  "veg-02": ["100 g", 23],
  "veg-03": ["100 g", 34],
  "veg-04": ["100 g", 41],
  "veg-05": ["100 g", 31],
  "veg-06": ["100 g", 15],
  "veg-07": ["100 g", 20],
  "veg-08": ["100 g", 40],

  // Fruits
  "fruit-01": ["100 g", 52],
  "fruit-02": ["100 g", 89],
  "fruit-03": ["100 g", 47],
  "fruit-04": ["100 g", 69],
  "fruit-05": ["100 g", 43],
  "fruit-06": ["100 g", 30],

  // Nuts and dry fruits
  "nut-01": ["100 g", 579],
  "nut-02": ["100 g", 553],
  "nut-03": ["100 g", 654],
  "nut-04": ["100 g", 585],
  "nut-05": ["100 g", 562],

  // Meat
  "meat-01": ["100 g", 165],
  "meat-02": ["100 g", 190],
  "meat-03": ["100 g", 172],
  "meat-04": ["100 g", 250],
  "meat-05": ["100 g", 143],

  // Eggs
  "egg-01": ["6 eggs", 432],
  "egg-02": ["6 eggs", 432],
  "egg-03": ["12 eggs", 864],
  "egg-04": ["1 egg", 72],
  "egg-05": ["6 eggs", 432],

  // Dairy
  "dairy-01": ["100 ml", 61],
  "dairy-02": ["100 g", 265],
  "dairy-03": ["100 g", 97],
  "dairy-04": ["100 g", 403],
  "dairy-05": ["100 g", 98],

  // Bakery
  "bakery-01": ["100 g", 247],
  "bakery-02": ["100 g", 265],
  "bakery-03": ["100 g", 371],
  "bakery-04": ["1 piece", 231],
  "bakery-05": ["100 g", 450],

  // Restaurant food
  "restaurant-01": ["1 serving", 450],
  "restaurant-02": ["1 bowl", 420],
  "restaurant-03": ["1 serving", 550],
  "restaurant-04": ["1 bowl", 150],
  "restaurant-05": ["1 serving", 350],

  // Homemade food
  "home-01": ["100 g", 250],
  "home-02": ["100 g", 200],
  "home-03": ["100 g", 300],
  "home-04": ["100 g", 350],
  "home-05": ["1 bowl", 150],

  // Diet food
  "diet-01": ["1 bowl", 300],
  "diet-02": ["1 bowl", 450],
  "diet-03": ["1 bowl", 300],
  "diet-04": ["1 bowl", 150],
  "diet-05": ["100 g", 588],
};

const makeItem = (
  id,
  name,
  description,
  category,
  price,
  protein,
  image,
  labels = ["Popular"]
) => {
  const [quantity, calories] = nutritionData[id] || [
    "100 g",
    0,
  ];

  return {
    id,
    name,
    description,
    category,
    price,
    protein,
    image: imageUrl(image),
    labels,
    quantity,
    calories,
    isAvailable: true,
  };
};

// Reusable item collections

const vegetables = [
  makeItem("veg-01", "Fresh Tomatoes", "Farm-fresh ripe tomatoes", "Vegetables", 40, 1.0, "photo-1546094096-0df4bcaaa337", ["Fresh", "Bestseller"]),
  makeItem("veg-02", "Fresh Spinach", "Green leafy spinach", "Vegetables", 30, 2.9, "photo-1576045057995-568f588f82fb", ["Fresh", "Healthy"]),
  makeItem("veg-03", "Green Broccoli", "Fresh broccoli florets", "Vegetables", 80, 2.8, "photo-1459411552884-841db9b3cc2a", ["Fresh", "Healthy"]),
  makeItem("veg-04", "Fresh Carrots", "Crunchy farm-fresh carrots", "Vegetables", 45, 0.9, "photo-1445282768818-728615cc910a", ["Fresh"]),
  makeItem("veg-05", "Green Beans", "Fresh green beans", "Vegetables", 50, 1.8, "photo-1567375698348-5d9d5ae99de0", ["Fresh"]),
  makeItem("veg-06", "Fresh Cucumbers", "Crisp cucumbers for salads", "Vegetables", 35, 0.7, "photo-1604977042946-1eecc30f269e", ["Fresh", "Healthy"]),
  makeItem("veg-07", "Green Capsicum", "Fresh green bell peppers", "Vegetables", 55, 1.0, "photo-1563565375-f3fdfdbefa83", ["Fresh"]),
  makeItem("veg-08", "Red Onions", "Everyday cooking onions", "Vegetables", 40, 1.1, "photo-1508747703725-719777637510", ["Popular"]),
];

const fruits = [
  makeItem("fruit-01", "Fresh Apples", "Crisp and juicy apples", "Fruits", 160, 0.3, "photo-1560806887-1e4cd0b6cbd6", ["Fresh", "Popular"]),
  makeItem("fruit-02", "Ripe Bananas", "Naturally sweet bananas", "Fruits", 60, 1.1, "photo-1571771894821-ce9b6c11b08e", ["Fresh", "Bestseller"]),
  makeItem("fruit-03", "Fresh Oranges", "Juicy seasonal oranges", "Fruits", 90, 0.9, "photo-1547514701-42782101795e", ["Fresh"]),
  makeItem("fruit-04", "Green Grapes", "Sweet seedless grapes", "Fruits", 120, 0.7, "photo-1537640538966-79f369143f8f", ["Fresh"]),
  makeItem("fruit-05", "Fresh Papaya", "Ripe tropical papaya", "Fruits", 70, 0.5, "photo-1517282009859-f000ec3b26fe", ["Fresh", "Healthy"]),
  makeItem("fruit-06", "Sweet Watermelon", "Refreshing seasonal watermelon", "Fruits", 50, 0.6, "photo- watermelon", ["Fresh"]),
];

const nuts = [
  makeItem("nut-01", "Premium Almonds", "Crunchy almonds", "Dry Fruits", 250, 21.2, "photo-1508061253366-f7da158b6d46", ["Protein Rich", "Popular"]),
  makeItem("nut-02", "Cashew Nuts", "Creamy premium cashews", "Dry Fruits", 300, 18.2, "photo-1505576399274-565b52d4ac71", ["Protein Rich"]),
  makeItem("nut-03", "Walnuts", "Nutritious walnut kernels", "Dry Fruits", 320, 15.2, "photo-1519622546751-5d1e3b2c3b2e", ["Healthy"]),
  makeItem("nut-04", "Roasted Peanuts", "Crunchy roasted peanuts", "Snacks", 80, 25.8, "photo-1567892737950-30c4db37cd89", ["Protein Rich", "Bestseller"]),
  makeItem("nut-05", "Pistachios", "Premium pistachio kernels", "Dry Fruits", 350, 20.2, "photo-1615485290382-441e4d049cb5", ["Protein Rich"]),
];

const meat = [
  makeItem("meat-01", "Fresh Chicken Breast", "Lean boneless chicken breast", "Chicken", 260, 31, "photo-1604503468506-a8da13d82791", ["Protein Rich", "Bestseller"]),
  makeItem("meat-02", "Chicken Curry Cut", "Fresh chicken curry pieces", "Chicken", 240, 27, "photo-1607623814075-e51df1bdc82f", ["Fresh"]),
  makeItem("meat-03", "Chicken Drumsticks", "Fresh chicken drumsticks", "Chicken", 280, 28, "photo-1587593810167-a84920ea0781", ["Popular"]),
  makeItem("meat-04", "Fresh Mutton", "Freshly prepared mutton cuts", "Mutton", 750, 25, "photo-1607623814075-e51df1bdc82f", ["Protein Rich"]),
  makeItem("meat-05", "Chicken Mince", "Fresh minced chicken", "Chicken", 290, 27, "photo-1604503468506-a8da13d82791", ["Fresh"]),
];

const eggs = [
  makeItem("egg-01", "Farm Fresh Eggs", "Pack of 6 fresh eggs", "Eggs", 50, 6.3, "photo-1506976785307-8732e854ad03", ["Protein Rich", "Bestseller"]),
  makeItem("egg-02", "Brown Eggs", "Pack of 6 brown eggs", "Eggs", 65, 6.3, "photo-1518569656558-1f25e69d93d7", ["Protein Rich"]),
  makeItem("egg-03", "Eggs Family Pack", "Pack of 12 eggs", "Eggs", 100, 6.3, "photo-1506976785307-8732e854ad03", ["Value Pack"]),
  makeItem("egg-04", "Boiled Eggs", "Ready-to-eat boiled eggs", "Ready to Eat", 40, 6.3, "photo-1518569656558-1f25e69d93d7", ["Protein Rich", "Ready to Eat"]),
  makeItem("egg-05", "Country Eggs", "Country-style eggs", "Eggs", 90, 6.3, "photo-1506976785307-8732e854ad03", ["Popular"]),
];

const dairy = [
  makeItem("dairy-01", "Fresh Milk", "Fresh dairy milk", "Milk", 35, 3.3, "photo-1550583724-b2692b85b150", ["Fresh", "Popular"]),
  makeItem("dairy-02", "Paneer", "Fresh cottage cheese", "Paneer", 100, 18.3, "photo-1631452180519-c014fe946bc7", ["Protein Rich", "Bestseller"]),
  makeItem("dairy-03", "Greek Yogurt", "Creamy protein-rich yogurt", "Yogurt", 90, 10, "photo-1488477181946-6428a0291777", ["Protein Rich", "Healthy"]),
  makeItem("dairy-04", "Cheddar Cheese", "Rich cheddar cheese", "Cheese", 150, 25, "photo-1486297678162-eb2a19b0a32d", ["Protein Rich"]),
  makeItem("dairy-05", "Fresh Curd", "Creamy homemade-style curd", "Curd", 45, 3.5, "photo-1571212515416-fca9e3b0a0c1", ["Fresh"]),
];

const bakery = [
  makeItem("bakery-01", "Whole Wheat Bread", "Fresh whole wheat bread", "Bread", 50, 9, "photo-1509440159596-0249088772ff", ["Popular"]),
  makeItem("bakery-02", "Multigrain Bread", "Bread made with mixed grains", "Bread", 65, 10, "photo-1586444248902-2f64eddc13df", ["Healthy"]),
  makeItem("bakery-03", "Chocolate Cake", "Rich chocolate cake", "Cakes", 350, 5, "photo-1578985545062-69928b1d9587", ["Popular"]),
  makeItem("bakery-04", "Butter Croissant", "Flaky butter croissant", "Pastries", 60, 6, "photo-1555507036-ab1f4038808a", ["Fresh"]),
  makeItem("bakery-05", "Oat Cookies", "Crunchy oat cookies", "Cookies", 90, 7, "photo-1499636136210-6f4ee915583e", ["Healthy"]),
];

const restaurant = [
  makeItem("restaurant-01", "Grilled Chicken Meal", "Grilled chicken with vegetables", "Main Course", 220, 32, "photo-1532550907401-a500c9a57435", ["Protein Rich", "Bestseller"]),
  makeItem("restaurant-02", "Paneer Rice Bowl", "Paneer served with rice and vegetables", "Rice Bowls", 180, 18, "photo-1512058564366-18510be2db19", ["Popular"]),
  makeItem("restaurant-03", "Chicken Biryani", "Aromatic chicken biryani", "Biryani", 200, 25, "photo-1563379091339-03246963d96c", ["Bestseller"]),
  makeItem("restaurant-04", "Fresh Garden Salad", "Fresh vegetables and greens", "Salads", 120, 4, "photo-1512621776951-a57141f2eefd", ["Healthy"]),
  makeItem("restaurant-05", "Grilled Fish Meal", "Grilled fish with fresh sides", "Main Course", 250, 26, "photo-1519708227418-c8fd9a32b7a2", ["Protein Rich"]),
];

const homeFoods = [
  makeItem("home-01", "Homemade Mango Pickle", "Traditional mango pickle", "Pickles", 120, 1.5, "photo-1547592166-23ac45744acd", ["Homemade", "Popular"]),
  makeItem("home-02", "Lemon Pickle", "Tangy homemade lemon pickle", "Pickles", 100, 1.2, "photo-1547592180-85f173990554", ["Homemade"]),
  makeItem("home-03", "Andhra Chicken Pickle", "Traditional spicy chicken pickle", "Pickles", 280, 20, "photo-1607623814075-e51df1bdc82f", ["Protein Rich"]),
  makeItem("home-04", "Homemade Idli Podi", "Traditional spice powder", "Powders", 80, 10, "photo-1547592166-23ac45744acd", ["Homemade"]),
  makeItem("home-05", "Homestyle Sambar", "Traditional home-style sambar", "Ready to Eat", 100, 5, "photo-1547592180-85f173990554", ["Homemade"]),
];

const dietFoods = [
  makeItem("diet-01", "Protein Salad Bowl", "Fresh salad with protein-rich toppings", "Salads", 180, 20, "photo-1512621776951-a57141f2eefd", ["Protein Rich", "Healthy"]),
  makeItem("diet-02", "Grilled Chicken Bowl", "Lean chicken and vegetables", "Meal Bowls", 240, 32, "photo-1532550907401-a500c9a57435", ["Protein Rich"]),
  makeItem("diet-03", "Overnight Oats", "Oats with milk and fruit", "Breakfast", 120, 12, "photo-1517673132405-a56a62b18caf", ["Healthy"]),
  makeItem("diet-04", "Sprout Salad", "Fresh mixed sprouts and vegetables", "Salads", 90, 12, "photo-1512621776951-a57141f2eefd", ["Protein Rich", "Healthy"]),
  makeItem("diet-05", "Peanut Butter", "Creamy peanut butter", "Spreads", 180, 25, "photo-1505576399274-565b52d4ac71", ["Protein Rich"]),
];

// Assign products to the stores listed in foodStoreData.js.
// Existing store assignments and product prices are unchanged.

export const FOOD_STORE_ITEMS = {
  "Sai Charan Provisions": vegetables,
  "Nani Nuts & Dry Fruits": nuts,
  "JD Provisions": [...fruits, ...vegetables],
  "Nandhan Kaju House": nuts,
  "Green Basket": vegetables,

  "Fresh Meat Corner": meat,
  "Daily Chicken Mart": meat,
  "Farm Fresh Poultry": meat,
  "Prime Meat House": meat,

  "Daily Bites": restaurant,
  "Spice Garden": restaurant,
  "Green Bowl Kitchen": dietFoods,
  "Home Taste Restaurant": restaurant,

  "Egg House": eggs,
  "Farm Egg Centre": eggs,
  "Daily Protein Store": [...eggs, ...nuts],
  "Fresh Poultry Mart": eggs,

  "Daily Dairy Fresh": dairy,
  "Milk Basket": dairy,
  "Pure Dairy House": dairy,
  "Farm Milk Store": dairy,

  "Nature's Basket": [...fruits, ...vegetables],
  "Fresh Farm Market": [...fruits, ...vegetables],
  "Daily Veg Mart": vegetables,

  "S R Bakery": bakery,
  "Sweet Treats": bakery,
  "Golden Oven": bakery,
  "Traditional Sweets": bakery,

  "Amma Home Foods": homeFoods,
  "Village Kitchen": homeFoods,
  "Andhra Pickles House": homeFoods,
  "Home Taste Foods": homeFoods,

  "Healthy Bowl": dietFoods,
  "Fit Food Kitchen": dietFoods,
  "Green Plate": dietFoods,
  "Protein Hub": nuts,
};

// Helper: get products for a selected store.
export const getStoreItems = (storeName) =>
  FOOD_STORE_ITEMS[storeName] || [];

// Helper: get unique product labels for a store.
export const getStoreLabels = (storeName) => [
  "All",
  ...new Set(
    getStoreItems(storeName).flatMap((item) => item.labels)
  ),
];

// Helper: filter products by category and label.
export const filterStoreItems = (
  storeName,
  { category = "All", label = "All" } = {}
) =>
  getStoreItems(storeName).filter(
    (item) =>
      (category === "All" || item.category === category) &&
      (label === "All" || item.labels.includes(label))
  );
