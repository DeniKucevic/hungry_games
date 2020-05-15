import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { GetRestaurants, searchRest } from "../../../services/FeathersAPI";
import RestaurantsList from "./RestaurantsList";
import { Tabs, Tab, ButtonGroup, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const UserMeals = () => {
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
      <div style={{width:"60%", marginLeft:"20%"}}>
        <Line data={data} />
      </div>
    </div>
  );
};

export default UserMeals;
