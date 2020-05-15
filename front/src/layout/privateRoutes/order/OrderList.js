import React, { useEffect, useState } from "react";
import { GetRestaurant } from "../../../services/FeathersAPI";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar";
import Header from "../Header";
import ItemList from "./ItemList";
import MealList from "./MealsList";

const OrderList = () => {
  const name = useParams().name;
  let [restaurant, setRestauran] = useState([]);

  useEffect(() => {
    GetRestaurant(name).then((res) => {
      setRestauran(res.data);
    });
  }, []);
  console.log(restaurant);

  return (
    <div>
      <SideBar />
      <Header />
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <h1>
          {restaurant.name}, <h6>{restaurant.address}</h6>
        </h1>
      </div>
      <div style={{ marginLeft: "10%" }}>
        <p>Ordered:</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <ItemList />
          <p>Add to order: </p>
          <MealList />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
