import { useContext, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import MealForm from "../shared/MealForm";
import CartContext from "../../hooks/context/cart-context";

const MenuItem = ({
  id,
  foodName,
  servings,
  calories,
  price,
  image,
  onShowMenu,
}) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: foodName,
      amount: amount,
      price: price,
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li key={id} className="bg-white shadow-xl rounded-3xl overflow-hidden">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="menu" className="h-48 object-cover w-full" />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white">
            <button
              onClick={onShowMenu}
              className="text-xl font-bold hover:text-orange-600"
            >
              See Details
            </button>
          </div>
        )}
      </div>
      <div className="p-4 divide-y divide-slate-300">
        <h4 className="text-center mb-4">{foodName}</h4>
        <div className="flex justify-between py-4">
          <p className="text-xs text-slate-500 font-bold">
            {calories} calories
          </p>
          <RxDotFilled className="text-[#F20507]" />
          <p className="text-xs text-slate-500 font-bold">{servings} persons</p>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="font-extrabold">$ {price}</p>
          <MealForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
