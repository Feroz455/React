// import React from "react";
// import Card from "../UI/Card";
// import MealItem from "./MealItem/MealItem";
// import classes from "./AvailableMeals.module.css";
// import { v4 } from "uuid";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

// const AvailableMealse = () => {
//   const mealsList = DUMMY_MEALS.map((meal) => (
//     <MealItem
//       key={v4()}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));

//   return (
//     <section className={classes.meals}>
//       <Card>
//         <ul>{mealsList}</ul>
//       </Card>
//     </section>
//   );
// };

// export default AvailableMealse;
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const url =
    "https://task-http-5df24-default-rtdb.asia-southeast1.firebasedatabase.app/";
  useEffect(() => {
    const fetchMeas = async () => {
      const response = await fetch(`${url}/Meals.json`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });

        setMeals(loadedMeals);
        setIsLoading(false);
      }
    };
    fetchMeas().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>Loading...</p>
        </Card>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>{httpError}</p>
        </Card>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
