import React, { useState, useEffect } from "react";
import { getItems } from "../../../services/FeathersAPI";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((res) => {
      setItems(res.data.data);
    });
  }, []);
  console.log(items);
  return (
    <div>
      {items.map((el) => {
        return (
          <div>
            <p>Note: {el.note}</p>
            <p>quantity: {el.quantity}</p>
            <p>meal: {el.mealId}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
