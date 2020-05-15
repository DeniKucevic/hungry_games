import React, { useState, useEffect } from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import { getOrders, GetRestaurant } from "../../../services/FeathersAPI";
import OrderList from "./OrderList";
import { Button } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [ordersInfo, setOrdersInfo] = useState([]);
  const name = useParams().name;

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data.data);
      setOrdersInfo(res.data);
    });
  }, []);

  return (
    <div>
      <SideBar />
      <Header />
      <main>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <p>total orders: {ordersInfo.total}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <p>
            <div>
              {orders.map((el) => {
                return (
                  <div>
                    <label>
                      Poll from the day: <label>{el.date}</label>
                    </label>
                    <Link to={"/order/" + el.restaurantId}>
                      <Button variant="outlined" color="primary">
                        Vote
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Order;
