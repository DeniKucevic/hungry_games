import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { GetRestaurants, searchRest } from "../../../services/FeathersAPI";
import RestaurantsList from "./RestaurantsList";
import { Tabs, Tab, ButtonGroup, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line, HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const UserOrders = () => {
  const [value, setValue] = useState(0);
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
        <Link to="/home">
          <Tab label="Restaurants" />
        </Link>
        <Link to="/meals">
          <Tab label="Meals" />
        </Link>
        <Link to="/userorders">
          <Tab label="orders" />
        </Link>
      </Tabs>
      <SideBar />
      <div style={{ width: "60%", marginLeft: "20%" }}>
        <HorizontalBar data={data} />
      </div>
    </div>
  );
};

export default UserOrders;
