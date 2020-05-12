import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const RestaurantsList = ({ restaurant }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>
            <b>{restaurant.name}</b>
          </p>
          <p>{restaurant.address}</p>
        </div>
        <div>
          <p>{restaurant.desc}</p>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <Link to={"/" + restaurant.id}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default RestaurantsList;
