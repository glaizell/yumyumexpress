import sushiPlatter from ".././assets/image/japanese-cuisine/sushi-5002639_1280.jpg";
import margheritaPizza from ".././assets/image/italian-cuisine/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg";
import chickenTikka from ".././assets/image/indian-cuisine/appetite-1239046_1280.jpg";
import padThai from ".././assets/image/thai-cuisine/pad-thai-921884_1280.jpg";

export const meals = [
  {
    id: 1,
    foodName: "Margherita Pizza",
    description:
      "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
    cuisineType: "Italian cuisine",
    price: 12.99,
    calories: 850,
    servings: 2,
    image: margheritaPizza,
  },
  {
    id: 2,
    foodName: "Chicken Tikka ",
    description:
      "A spicy Indian dish consisting of marinated chicken in a creamy tomato-based sauce.",
    cuisineType: "Indian cuisine",
    price: 15.99,
    calories: 1200,
    servings: 2,
    image: chickenTikka,
  },
  {
    id: 3,
    foodName: "Sushi Platter",
    description:
      "A Japanese delicacy of fresh raw fish, rice, and seaweed, served with soy sauce and wasabi.",
    cuisineType: "Japanese cuisine",
    price: 25.99,
    calories: 600,
    servings: 2,
    image: sushiPlatter,
  },

  {
    id: 4,
    foodName: "Pad Thai",
    description:
      "A Thai noodle dish with stir-fried vegetables, shrimp, tofu, peanuts, and a tangy sauce.",
    cuisineType: "Thai cuisine",
    price: 13.99,
    calories: 900,
    servings: 2,
    image: padThai,
  },
];
