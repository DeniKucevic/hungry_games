import React from "react";
import { Button } from "@material-ui/core";
import { useHistory, Route, Link } from "react-router-dom";
import RestaurantEdit from "./RestaurantEdit";

const RestaurantsList = ({ restaurant }) => {
  const history = useHistory();

  const handleClick = (restaurant) => {
    return <Route path={`/edt/:${restaurant.id}`} component={RestaurantEdit} />;
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>{restaurant.name}</h4>
          <h4>{restaurant.address}</h4>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <Link to={`/edt/:${restaurant.id}`}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClick(restaurant)}
            >
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
