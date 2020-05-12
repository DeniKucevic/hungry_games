import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { GetRestaurants } from "../../../services/FeathersAPI";
import RestaurantsList from "./RestaurantsList";
import { Tabs, Tab } from "@material-ui/core";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restTotal, setRestTotal] = useState("");

  useEffect(() => {
    GetRestaurants().then((res) => {
      setRestaurants(res.data.data);
      setRestTotal(res.data.total);
    });
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Restaurants" />
        <Tab label="Meals" />
        <Tab label="Orders" />
      </Tabs>
      <SideBar />
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <p>Ukupno restorana {restTotal}</p>
        {restaurants.map((el) => (
          <RestaurantsList restaurant={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
