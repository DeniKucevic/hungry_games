import React from "react";
import "./App.css";
import WelcomePage from "./layout/publicRoutes/welcomePage/WelcomePage";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./layout/publicRoutes/publicRoutes";
import SignIn from "./layout/publicRoutes/loginPage/SignIn";
import Register from "./layout/publicRoutes/loginPage/Register";
import PrivateRoute from "./layout/privateRoutes/privateRoutes";
import HomePage from "./layout/privateRoutes/home/HomePage";
import Order from "./layout/privateRoutes/order/Order";
import Polls from "./layout/privateRoutes/polls/Polls";
import Settings from "./layout/privateRoutes/settings/Settings";
import About from "./layout/publicRoutes/links/About";
import Contact from "./layout/publicRoutes/links/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
