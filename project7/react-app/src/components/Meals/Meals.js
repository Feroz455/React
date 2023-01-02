import React, { Fragment } from "react";
import AvailableMealse from "./AvailableMealse";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMealse />
    </Fragment>
  );
};

export default Meals;
