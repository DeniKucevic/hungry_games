import React, { useState, useEffect } from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import { getOrders } from "../../../services/FeathersAPI";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [ordersInfo, setOrdersInfo] = useState([]);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data);
      setOrdersInfo(res);
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
          <h2>OrdersOrdersOrdersOrdersOrders</h2>
          <h2>{ordersInfo.total}</h2>
        </div>
      </main>
    </div>
  );
};

export default Order;
