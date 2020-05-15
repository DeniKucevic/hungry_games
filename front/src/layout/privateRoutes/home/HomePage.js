import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { GetRestaurants, searchRest } from "../../../services/FeathersAPI";
import RestaurantsList from "./RestaurantsList";
import { Tabs, Tab, ButtonGroup, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restTotal, setRestTotal] = useState("");
  const [newPage, setNewPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState(0);
  const [pomocni, setPomocni] = useState([]);

  useEffect(() => {
    GetRestaurants(newPage).then((res) => {
      setRestaurants(res.data.data);
      setRestTotal(res.data.total);
    });
  }, [newPage]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //forcing rerender
  const rerender = () => {
    window.location.reload();
  };

  //simple pagination, had no idea this will work :D
  const pagesTotal = Math.ceil(restTotal / 4);
  const pagedown = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
      setNewPage(newPage - 4);
    }
  };
  const pageUp = () => {
    if (pagesTotal !== currentPage) {
      setCurrentPage(currentPage + 1);
      setNewPage(newPage + 4);
    }
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
        <Link to="/meals">
          <Tab label="Meals" />
        </Link>
        <Link to="/userorders">
          <Tab label="/userorders" />
        </Link>
      </Tabs>
      <SideBar />
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <p>Ukupno restorana {restTotal}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchRest(e.target[0].value).then((res) => {
              setPomocni(res.data.data);
            });
          }}
        >
          <input type="text" name="search" />
        </form>
        <div>
          {pomocni.map((el) => {
            return (
              <label key={el.id}>
                {el.name}; {el.address}
              </label>
            );
          })}
        </div>
        <hr></hr>
        {restaurants.map((el) => (
          <RestaurantsList restaurant={el} key={el.id} rerender={rerender} />
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
          <span style={{ textAlign: "center" }}>
            {currentPage}/{pagesTotal}
          </span>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default HomePage;
