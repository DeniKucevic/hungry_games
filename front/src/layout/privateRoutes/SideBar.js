import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import killme from "../../assets/home.png";
import LEDZEPPELIN from "../../assets/poll-topic.png";
import CIZMA from "../../assets/order.jpg";
import godkillmepls from "../../assets/setting-icon-png-18.jpg";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  let history = useHistory();
  return (
    <SideNav
      style={{
        "backgroundColor": "#4A5859",
        marginRight: "10px",
      }}
      onSelect={(selected) => {
        history.push(`/${selected}`);
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav>
        <NavItem eventKey="home">
          <NavIcon>
            <img src={killme} alt="home" style={{ maxHeight: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="Polls">
          <NavIcon>
            <img
              src={LEDZEPPELIN}
              alt="Polls"
              style={{ maxHeight: "1.75em" }}
            />
          </NavIcon>
          <NavText>Polls</NavText>
        </NavItem>
        <NavItem eventKey="Orders">
          <NavIcon>
            <img src={CIZMA} alt="Orders" style={{ maxHeight: "1.75em" }} />
          </NavIcon>
          <NavText>Orders</NavText>
        </NavItem>
        <NavItem eventKey="Settings">
          <NavIcon>
            <img
              src={godkillmepls}
              alt="Settings"
              style={{ maxHeight: "1.75em" }}
            />
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideBar;
