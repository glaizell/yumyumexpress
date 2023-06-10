import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";

const MealItem = ({ id, foodName, servings, calories, price, image }) => {
  return (
    <li key={id} className="shadow-xl rounded-3xl relative bg-white ">
      <img
        src={image}
        alt="meals"
        className="block mx-auto rounded-full h-28 w-28 absolute -top-14 left-0 right-0 bottom-0 shadow-md"
      />
      <div className="pt-16 px-4 pb-4 divide-y divide-slate-300">
        <h4 className="text-center mb-4">{foodName}</h4>
        <div className="flex justify-between py-4">
          <p className="text-xs text-slate-500 font-bold">
            {calories} calories
          </p>
          <RxDotFilled className="text-[#F20507]" />
          <p className="text-xs text-slate-500 font-bold">{servings} persons</p>
        </div>
        <div className="text-center ">
          <p className="font-extrabold mb-2">$ {price}</p>
          <Link to="/menu">
            <button className="bg-[#1a1a1a] px-4 py-2 rounded-3xl text-white">
              See all menu
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};
export default MealItem;
