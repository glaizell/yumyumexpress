import samosas from "../assets/image/indian-cuisine/samosas-7507951_1280.jpg";
import biryani from "../assets/image/indian-cuisine/biryani-7009110_1280.jpg";
import naan from "../assets/image/indian-cuisine/naan.jpg";
import tikka from "../assets/image/indian-cuisine/tikka.jpg";
import butterChicken from "../assets/image/indian-cuisine/butterchicken.jpg";
import sushiPlatter from "../assets/image/japanese-cuisine/sushi-5002639_1280.jpg";
import tempura from "../assets/image/japanese-cuisine/tempura.jpg";
import ramen from "../assets/image/japanese-cuisine/ramen.jpg";
import matcha from "../assets/image/japanese-cuisine/matcha.jpg";
import okonomiyaki from "../assets/image/japanese-cuisine/okonomiyaki-7312548_1280.jpg";
import carbonara from "../assets/image/italian-cuisine/carbonara.jpg";
import lasagna from "../assets/image/italian-cuisine/lasagna.jpg";
import pizza from "../assets/image/italian-cuisine/pizza.jpg";
import salad from "../assets/image/italian-cuisine/salad.jpg";
import tiramisu from "../assets/image/italian-cuisine/tiramisu.jpg";
import bulgogi from "../assets/image/korean-cuisine/bulgogi.jpg";
import bibimbap from "../assets/image/korean-cuisine/bibimbap-4887417_1280.jpg";
import japchae from "../assets/image/korean-cuisine/japchae.jpg";
import kimchiStew from "../assets/image/korean-cuisine/kimchistew.png";
import chicken from "../assets/image/korean-cuisine/pexels-pixabay-60616.jpg";
import greenCurry from "../assets/image/thai-cuisine/green-curry-6386360_1280.jpg";
import mangoStickyRice from "../assets/image/thai-cuisine/mango-sticky-rice-3604851_1280.jpg";
import padThai from "../assets/image/thai-cuisine/pad-thai-921884_1280.jpg";
import tomYum from "../assets/image/thai-cuisine/tom-yum-soup-6126147_1920.jpg";
import somTum from "../assets/image/thai-cuisine/green-papaya-salad-6629782_1280.jpg";

export const menus = [
  {
    id: 1,
    foodName: "Butter Chicken",
    description: "Tender chicken cooked in creamy tomato-based gravy",
    cuisineType: "Indian",
    price: 12.99,
    calories: 450,
    servings: 1,
    image: butterChicken,
  },
  {
    id: 2,
    foodName: "Samosas",
    description: "Crispy fried pastries filled with spiced potatoes and peas",
    cuisineType: "Indian",
    price: 4.99,
    calories: 300,
    servings: 2,
    image: samosas,
  },
  {
    id: 3,
    foodName: "Biryani",
    description:
      "Fragrant rice dish with marinated chicken and aromatic spices",
    cuisineType: "Indian",
    price: 16.99,
    calories: 600,
    servings: 1,
    image: biryani,
  },
  {
    id: 4,
    foodName: "Naan",
    description: "Soft, pillowy bread made in a tandoor oven",
    cuisineType: "Indian",
    price: 2.99,
    calories: 200,
    servings: 1,
    image: naan,
  },
  {
    id: 5,
    foodName: "Paneer Tikka Masala",
    description:
      "Chunks of cottage cheese cooked in a spicy tomato-based gravy",
    cuisineType: "Indian",
    price: 13.99,
    calories: 500,
    servings: 1,
    image: tikka,
  },

  {
    id: 6,
    foodName: "Sushi Platter",
    description:
      "Assorted nigiri and maki rolls with fresh fish and vegetables",
    cuisineType: "Japanese",
    price: 24.99,
    calories: 400,
    servings: 2,
    image: sushiPlatter,
  },
  {
    id: 7,
    foodName: "Tempura",
    description: "Lightly battered and fried shrimp and vegetables",
    cuisineType: "Japanese",
    price: 12.99,
    calories: 500,
    servings: 1,
    image: tempura,
  },
  {
    id: 8,
    foodName: "Ramen",
    description:
      "Hearty noodle soup with savory broth and toppings like pork, egg, and green onion",
    cuisineType: "Japanese",
    price: 14.99,
    calories: 800,
    servings: 1,
    image: ramen,
  },
  {
    id: 9,
    foodName: "Okonomiyaki",
    description:
      "Savory pancake made with cabbage, meat or seafood, and topped with sauce and mayo",
    cuisineType: "Japanese",
    price: 10.99,
    calories: 600,
    servings: 1,
    image: okonomiyaki,
  },
  {
    id: 10,
    foodName: "Matcha Ice Cream",
    description: "Creamy green tea ice cream with a subtle, earthy flavor",
    cuisineType: "Japanese",
    price: 5.99,
    calories: 250,
    servings: 1,
    image: matcha,
  },

  {
    id: 11,
    foodName: "Margherita Pizza",
    description:
      "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil",
    cuisineType: "Italian",
    price: 14.99,
    calories: 800,
    servings: 1,
    image: pizza,
  },
  {
    id: 12,
    foodName: "Spaghetti Carbonara",
    description: "Pasta in a creamy sauce made with egg, cheese, and pancetta",
    cuisineType: "Italian",
    price: 12.99,
    calories: 600,
    servings: 1,
    image: carbonara,
  },
  {
    id: 13,
    foodName: "Lasagna",
    description:
      "Layered pasta dish with meat sauce, cheese, and bechamel sauce",
    cuisineType: "Italian",
    price: 16.99,
    calories: 900,
    servings: 1,
    image: lasagna,
  },
  {
    id: 14,
    foodName: "Caprese Salad",
    description:
      "Fresh salad with tomatoes, mozzarella cheese, and basil leaves",
    cuisineType: "Italian",
    price: 8.99,
    calories: 400,
    servings: 1,
    image: salad,
  },
  {
    id: 15,
    foodName: "Tiramisu",
    description:
      "Coffee-flavored dessert made with ladyfingers, mascarpone cheese, and cocoa powder",
    cuisineType: "Italian",
    price: 6.99,
    calories: 450,
    servings: 1,
    image: tiramisu,
  },

  {
    id: 16,
    foodName: "Bibimbap",
    description:
      "Rice bowl with mixed vegetables, beef, and a fried egg, served with gochujang sauce",
    cuisineType: "Korean",
    price: 13.99,
    calories: 800,
    servings: 1,
    image: bibimbap,
  },
  {
    id: 17,
    foodName: "Japchae",
    description:
      "Stir-fried glass noodles with vegetables, beef, and sesame oil",
    cuisineType: "Korean",
    price: 12.99,
    calories: 700,
    servings: 1,
    image: japchae,
  },
  {
    id: 18,
    foodName: "Kimchi Stew",
    description:
      "Spicy stew made with kimchi, pork, and tofu, served with rice",
    cuisineType: "Korean",
    price: 15.99,
    calories: 900,
    servings: 1,
    image: kimchiStew,
  },
  {
    id: 19,
    foodName: "Bulgogi",
    description:
      "Marinated beef or pork grilled and served with rice and vegetables",
    cuisineType: "Korean",
    price: 16.99,
    calories: 1000,
    servings: 1,
    image: bulgogi,
  },
  {
    id: 20,
    foodName: "Korean Fried Chicken",
    description:
      "Crispy fried chicken coated in a sweet and spicy sauce, served with pickled radish",
    cuisineType: "Korean",
    price: 11.99,
    calories: 800,
    servings: 1,
    image: chicken,
  },

  {
    id: 21,
    foodName: "Tom Yum Soup",
    description:
      "Spicy and sour soup made with shrimp, lemongrass, kaffir lime leaves, and chili paste",
    cuisineType: "Thai",
    price: 9.99,
    calories: 250,
    servings: 1,
    image: tomYum,
  },
  {
    id: 22,
    foodName: "Pad Thai",
    description:
      "Stir-fried rice noodles with shrimp or chicken, eggs, bean sprouts, and peanuts",
    cuisineType: "Thai",
    price: 12.99,
    calories: 600,
    servings: 1,
    image: padThai,
  },
  {
    id: 23,
    foodName: "Green Curry",
    description:
      "Spicy curry made with coconut milk, green chili paste, chicken, and Thai basil",
    cuisineType: "Thai",
    price: 14.99,
    calories: 800,
    servings: 1,
    image: greenCurry,
  },
  {
    id: 24,
    foodName: "Som Tum Salad",
    description:
      "Spicy and sour salad made with shredded green papaya, tomatoes, peanuts, and chili",
    cuisineType: "Thai",
    price: 10.99,
    calories: 300,
    servings: 1,
    image: somTum,
  },
  {
    id: 25,
    foodName: "Mango Sticky Rice",
    description:
      "Sweet and creamy dessert made with glutinous rice, fresh mango, and coconut milk",
    cuisineType: "Thai",
    price: 6.99,
    calories: 400,
    servings: 1,
    image: mangoStickyRice,
  },
];
