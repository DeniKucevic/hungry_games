import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { GetRestaurants } from "../../../services/FeathersAPI";
import RestaurantsList from "./RestaurantsList";
import { Tabs, Tab, ButtonGroup, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restTotal, setRestTotal] = useState("");
  const [newPage, setNewPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    GetRestaurants(newPage).then((res) => {
      setRestaurants(res.data.data);
      setRestTotal(res.data.total);
    });
  }, [newPage]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //simple pagination, had no idea this will work :D
  const pagedown = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
      setNewPage(newPage - 4);
    }
  };
  const pageUp = () => {
    setCurrentPage(currentPage + 1);
    setNewPage(newPage + 4);
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
        <Tab label="Restaurants" onClick={() => <Link to="/home" />} />
        <Tab label="Meals" onClick={<Link to="/meals" />} />
        <Tab label="Orders" />
      </Tabs>
      <SideBar />
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <p>Ukupno restorana {restTotal}</p>
        <hr></hr>
        {restaurants.map((el) => (
          <RestaurantsList restaurant={el} key={el.id} />
        ))}
        <Link to="/addrestaurant">
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: "50%", fontSize: "2em" }}
          >
            +
          </Button>
        </Link>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          style={{ float: "right" }}
        >
          <Button
            onClick={() => {
              pagedown();
            }}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              pageUp();
            }}
          >
            Next
          </Button>
          <span style={{ textAlign: "center" }}>{currentPage}</span>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default HomePage;
