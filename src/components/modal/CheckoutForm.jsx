import React, { useEffect, useContext } from "react";

import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import CartContext from "../../hooks/context/cart-context.js";

const CheckoutForm = ({
  register,
  handleSubmit,
  reset,
  isSubmitSuccessful,
  errors,
  isSubmitting,
  onCancel,
}) => {
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "formData"), data);
      console.log("Successfully submitted");
      cartCtx.clearCart();
    } catch (error) {
      console.error("Error sending form data to Firestore: ", error);
    }
  };

  return (
    <form
      action=""
      className=" border-blue-700 border-2 mt-8 p-4 rounded max-w-full overflow-y-scroll"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full outline-none rounded-md"
        />
        <p className="text-xs text-red-600 mt-2">{errors.name?.message}</p>
      </div>
      <div className="mb-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="w-full outline-none rounded-md"
        />
        <p className="text-xs text-red-600 mt-2">{errors.email?.message}</p>
      </div>

      <div className="mb-2">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          {...register("address")}
          className="w-full outline-none rounded-md"
        />
        <p className="text-xs text-red-600 mt-2">{errors.address?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="">Contact number</label>
        <input
          type="number"
          id="number"
          {...register("number")}
          className="w-full outline-none rounded-md"
        />
        <p className="text-xs text-red-600 mt-2">{errors.number?.message}</p>
      </div>

      {/* button */}
      <div className="text-right">
        <button
          className="bg-gray-300 mr-4  px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          // disabled={!isDirty || !isValid}
        >
          {isSubmitting ? "Submitting" : "Confirm"}
        </button>
      </div>
    </form>
  );
};
export default CheckoutForm;
