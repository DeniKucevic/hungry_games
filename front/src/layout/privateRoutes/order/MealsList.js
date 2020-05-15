import React, { useState, useEffect } from "react";
import { getMeals } from "../../../services/FeathersAPI";

const MealList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getMeals().then((res) => {
      setItems(res.data.data);
    });
  }, []);

    const handleClick = () => {
      console.log("click")
  };

  return (
    <div>
      {items.map((el) => {
        return (
          <div>
            <p>title: {el.title}</p>
            <p>description: {el.description}</p>
            <p>available: {el.available}</p>
            <p>price: {el.price}</p>
            <button
              onClick={() => {
                handleClick(el.id);
              }}
            >
              add
            </button>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default MealList;
