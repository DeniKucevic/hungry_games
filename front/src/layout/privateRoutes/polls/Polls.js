import React, { useEffect, useState } from "react";
import { GetPolls } from "../../../services/FeathersAPI";
import SideBar from "../SideBar";
import Header from "../Header";
import PollsList from "./PollsList";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Polls = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    GetPolls().then((res) => {
      setPolls(res.data.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      <SideBar />
      <Header />
      <main style={{ marginLeft: "10%", marginRight: "10%", marginTop: "3%" }}>
        <h4>Aktive polls: </h4>
        <h4>Total polls: </h4>
        {polls.map((el) => (
          <PollsList poll={el} key={el.id} />
        ))}
        <Link to="/addpoll">
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: "50%", fontSize: "2em" }}
          >
            +
          </Button>
        </Link>
      </main>
    </>
  );
};

export default Polls;
