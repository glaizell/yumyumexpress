import { meals } from "../../data/data";

import MealItem from "./MealItem";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-4 mb-20">
        <div className="w-full lg:w-2/4 text-center mx-auto">
          <h1 className="italic">Delivering deliciousness to your doorstep!</h1>
          <p className="text-gray-800 text-sm">
            <span className="font-extrabold">YumYumExpress</span> is a food
            ordering website with a wide selection of delicious meals from local
            restaurants. Its user-friendly platform makes it easy to order and
            have your favorite dishes delivered right to your doorstep.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-4 ">
        <ul className="container px-2 md:px-24 lg:px-0  xl:w-3/4 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-8 ">
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              foodName={meal.foodName}
              calories={meal.calories}
              servings={meal.servings}
              price={meal.price}
              image={meal.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Hero;
