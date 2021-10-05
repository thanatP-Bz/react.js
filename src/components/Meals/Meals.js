import React from "react";
import MealsSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";
import CartProvider from "../../Store/CartProvider";

const Meals = () => {
  return (
    <CartProvider>
      <MealsAvailable />
      <MealsSummary />
    </CartProvider>
  );
};

export default Meals;
