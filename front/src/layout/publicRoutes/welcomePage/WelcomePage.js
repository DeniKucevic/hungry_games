import React from "react";
import { useHistory } from "react-router-dom";
import WelcomeHeader from "./WelcomeHeader";
import WelcomeFooter from "./WelcomeFooter";

const WelcomePage = () => {
    let history = useHistory();
  return (
    <div className="welcome-container">
      <WelcomeHeader />
      <div className="welcome-wrapper">
        <div id="welcome-title">
          <p>WELCOME TO THE</p>
          <h1>HUNGRY GAMES</h1>
        </div>
        <div>
          <input type="button" className="myButton" value="E N T E R" id="welcome-btn" onClick={(e)=>{history.push("/signin")}}></input>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default WelcomePage;
