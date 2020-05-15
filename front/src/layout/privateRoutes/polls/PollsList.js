import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { deletePoll } from "../../../services/FeathersAPI";

const PollsList = ({ poll }) => {
  let isoDate = poll.date;
  let date = new Date(isoDate);

  //delete poll
  const handleDelete = () => {
    deletePoll(poll.id);
    window.location.reload();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>{poll.label}</h4>
          <label className="time-label">
            <span className="time-label">Time: </span>
            {date.toLocaleDateString("en-GB")}
          </label>
          <label className="time-label">
            <span className="time-label">At: </span>
            {date.toLocaleTimeString("en", {
              timeStyle: "short",
              hour12: false,
              timeZone: "UTC",
            })}
          </label>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          {poll.activ ? null : (
            <div>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDelete(poll.id)}
              >
                delete
              </Button>
              <Link to={"/poll" + poll.id}>
                {" "}
                <Button variant="contained" color="primary">
                  {" "}
                  Vote
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default PollsList;
