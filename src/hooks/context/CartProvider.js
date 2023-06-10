import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.item.id
            ? {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
              }
            : item
        );
      } else {
        updatedItems = [...state.items, action.item];
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem.amount === 1) {
        return {
          items: state.items.filter((item) => item.id !== action.id),
          totalAmount: state.totalAmount - existingCartItem.price,
        };
      }

      return {
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...existingCartItem, amount: existingCartItem.amount - 1 }
            : item
        ),
        totalAmount: state.totalAmount - existingCartItem.price,
      };
    }

    case "CLEAR": {
      return { items: [], totalAmount: 0 };
    }
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
