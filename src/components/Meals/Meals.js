import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";

const Meals = () => {
  return (
    <Fragment>
      <MealsAvailable />
      <MealsSummary />
    </Fragment>
  );
};

export default Meals;
