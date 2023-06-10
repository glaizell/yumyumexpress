import { HiPlus } from "react-icons/hi";
import { useState } from "react";

const MealForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="flex justify-end">
        <button type="submit" className="bg-[#1a1a1a] py-1 px-2 rounded-lg">
          <HiPlus className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default MealForm;
