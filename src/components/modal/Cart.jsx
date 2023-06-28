import { useContext, useState } from "react";
import Modal from "./Modal";
import { GrClose } from "react-icons/gr";
import CartContext from "../../hooks/context/cart-context";
import CheckoutForm from "./CheckoutForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Required"),
    address: yup.string().required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    number: yup.number().integer("Required").required("Required"),
  })
  .required();

const Cart = ({ onClose }) => {
  const [isCheckOut, setIsCheckOut] = useState(false);

  const cartCtx = useContext(CartContext);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id} className="flex justify-between">
      <div className="mt-4">
        <h4>{item.name}</h4>
        <div>
          <span>${item.price.toFixed(2)} </span>
          <span>x</span>
          <span className="font-extrabold"> {item.amount}</span>
        </div>
      </div>

      <div className="flex justify-around gap-4 mr-4">
        <button
          className="font-bold text-2xl"
          onClick={() => cartItemRemoveHandler(item.id)}
        >
          −
        </button>
        <button
          className="font-bold text-2xl"
          onClick={() => cartItemAddHandler(item)}
        >
          +
        </button>
      </div>
    </li>
  ));

  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const formActions = (
    <div className="w-full sticky bottom-0 ">
      {cartCtx.items.length > 0 && (
        <div className="text-right mt-4 mb-0 p-4">
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out"
            onClick={orderHandler}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );

  const modalCartContent = (
    <div>
      <div className="">
        <div className="flex justify-between items-center mb-4 sticky top-0 z-[1000] px-4 py-2 bg-[#F53739]">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <div className="ml-auto">
            <button onClick={onClose}>
              <GrClose className="h-6 w-6 icon-white" />
            </button>
          </div>
        </div>

        {!isCheckOut && (
          <ul className="mb-6 divide-y divide-slate-300 text-white py-4 px-12">
            {cartItems}
          </ul>
        )}

        <div className="flex justify-start gap-6 sticky bottom-0  text-white p-4 bg-black ">
          <span>Total Amount</span>
          <span className="mr-8 font-extrabold">
            ${cartCtx.totalAmount.toFixed(2)}
          </span>
        </div>
      </div>
      {!isCheckOut && formActions}
      {isCheckOut && (
        <CheckoutForm
          onCancel={onClose}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          isSubmitSuccessful={isSubmitSuccessful}
          isSubmitting={isSubmitting}
          reset={reset}
        />
      )}
    </div>
  );

  const submitSuccessful = (
    <div className="text-center">
      <p className="mb-4">Successfully submit order</p>
      <button
        className="inline-block text-white bg-blue-700 px-4 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
  const submitting = <p className="text-center">Sending order....</p>;
  return (
    <Modal onHideCart={onClose}>
      <div className="bg-[#1a1a1a]">
        {!isSubmitting && !isSubmitSuccessful && modalCartContent}
        {isSubmitting && submitting}
        {isSubmitSuccessful && submitSuccessful}
      </div>
    </Modal>
  );
};

export default Cart;
