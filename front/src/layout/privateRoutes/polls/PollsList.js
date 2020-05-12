import React from "react";
import { Button } from "@material-ui/core";

const PollsList = ({ poll }) => {
  let isoDate = poll.date;
  let date = new Date(isoDate);
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
          <Button variant="contained" color="primary">
            Vote
          </Button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default PollsList;
