import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { useParams, useHistory } from "react-router-dom";
import {
  GetPoll,
  getVote,
  updateVote,
  createOrder,
  deletePoll,
} from "../../../services/FeathersAPI";
import { Button } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

const PollVote = () => {
  const [poll, setPoll] = useState({});
  const [pollArr, setPollArr] = useState([]);
  const [votes, setVotes] = useState([]);
  const [voteState, setVoteState] = useState(0);
  const name = useParams().name;
  const history = useHistory();

  useEffect(() => {
    GetPoll(name).then((res) => {
      setPoll(res.data);
      setPollArr(res.data.restaurants);
      setVotes(res.data.votes);
    });
  }, []);

  //date format
  let isoDate = poll.date;
  let date = new Date(isoDate);

  //data format percenteges and whatnot
  let dataVotes = votes.map(({ votes }) => votes);
  let dataRest = pollArr.map(({ name }) => name);
  let total = dataVotes.reduce((a, b) => a + b, 0);
  let perc = dataVotes.map((el) => Math.round((el / total) * 100));
  let percRest = dataRest.map((a, i) => a + ": " + perc[i] + " %");

  //voting
  const sendVote = (id, votes) => {
    let newVote = votes + 1;
    updateVote(id, newVote).then((res) => {
      window.location.reload();
    });
  };

  //kreira order
  const handleOrder = () => {
    const winner = votes.reduce(function (a, b) {
      return a.votes > b.votes ? a : b;
    });
    createOrder(winner.restaurantId).then((res) => console.log(res));
    deletePoll(poll.id);
    history.push("/Orders");
  };

  return (
    <>
      <Header />
      <SideBar />
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              textAlign: "center",
            }}
          >
            <p>
              <b>{poll.label} - </b>
              <label className="time-label">
                {date.toLocaleDateString("en-GB")}
              </label>
              <label className="time-label">
                <span className="time-label"> At: </span>
                {date.toLocaleTimeString("en", {
                  timeStyle: "short",
                  hour12: false,
                  timeZone: "UTC",
                })}
              </label>
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOrder()}
            >
              CREATE ORDER
            </Button>
          </div>
          <hr></hr>
          <div
            style={{
              minWidth: "40em",
              display: "flex",
              flexGrow: "1",
            }}
          >
            <div>
              {pollArr.map((el) => (
                <div key={el.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      minWidth: "40em",
                    }}
                  >
                    <p>{el.name}</p>{" "}
                  </div>
                  <hr></hr>
                </div>
              ))}
            </div>
            <div
              id="dugmici"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              {votes.map((el) => (
                <div
                  key={el.id}
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    textAlign: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      sendVote(el.id, el.votes);
                    }}
                  >
                    {el.votes}
                  </Button>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
          {dataVotes.length > 0 ? (
            <Doughnut
              data={{
                labels: percRest,
                datasets: [
                  {
                    label: "# of Votes",
                    data: perc,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PollVote;
