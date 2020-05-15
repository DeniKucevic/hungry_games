import React from "react";
import "./App.css";
import WelcomePage from "./layout/publicRoutes/welcomePage/WelcomePage";
import { Switch, Route } from "react-router-dom";
import PublicRoute from "./layout/publicRoutes/publicRoutes";
import SignIn from "./layout/publicRoutes/loginPage/SignIn";
import Register from "./layout/publicRoutes/loginPage/Register";
import PrivateRoute from "./layout/privateRoutes/privateRoutes";
import HomePage from "./layout/privateRoutes/home/HomePage";
import AddRest from "./layout/privateRoutes/home/AddRest";
import Order from "./layout/privateRoutes/order/Order";
import Polls from "./layout/privateRoutes/polls/Polls";
import Settings from "./layout/privateRoutes/settings/Settings";
import About from "./layout/publicRoutes/links/About";
import Contact from "./layout/publicRoutes/links/Contact";
import NoMatch from "./layout/NoMatch";
import RestaurantEdit from "./layout/privateRoutes/home/RestaurantEdit";
import PollVote from "./layout/privateRoutes/polls/PollVote";
import AddPoll from "./layout/privateRoutes/polls/AddPoll";
import OrderList from "./layout/privateRoutes/order/OrderList";
import UserMeals from "./layout/privateRoutes/home/UserMeals";
import UserOrders from "./layout/privateRoutes/home/UserOrders";

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute component={WelcomePage} exact path="/" />
        <PublicRoute component={SignIn} exact path="/signin" />
        <PublicRoute component={Register} exact path="/register" />
        <PublicRoute component={About} exact path="/about" />
        <PublicRoute component={Contact} exact path="/contact" />
        <PrivateRoute component={HomePage} exact path="/home" />
        <PrivateRoute component={Polls} exact path="/polls" />
        <PrivateRoute component={Settings} exact path="/settings" />
        <PrivateRoute component={Order} exact path="/orders" />
        <PrivateRoute component={AddRest} exact path="/addrestaurant" />
        <PrivateRoute component={AddPoll} exact path="/addpoll" />
        <PrivateRoute component={UserMeals} exact path="/meals" />
        <PrivateRoute component={UserOrders} exact path="/userorders" />
        <Route exact path="/poll:name">
          <PollVote />
        </Route>
        <Route exact path="/order/:name">
          <OrderList />
        </Route>
        <Route exact path="/edt:id">
          <RestaurantEdit />
        </Route>
        <Route path component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
