import React from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemfromCartHandler = (id) => {};
  const CartDetails = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    RemoveItem: removeItemfromCartHandler,
  };
  return (
    <CartContext.Provider value={CartDetails}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
