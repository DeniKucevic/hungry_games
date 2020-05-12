import React, { useState } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { addRestaurant } from "./../../../services/FeathersAPI";

const AddRest = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [toolTip, setToolTip] = useState(false);

  const history = useHistory();

  async function handleClick() {
    if (name !== "") {
      const body = {
        name: name,
        address: address,
        desc: desc,
      };
      try {
        const response = await addRestaurant(body);
        console.log(response);

        history.push("/home");
      } catch (error) {
        console.error(error);
      }
    } else {
      setToolTip(true);
    }
  }
  return (
    <div>
      <Header />
      <SideBar />
      <div
        style={{
          padding: "1%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            margin: "3%",
          }}
        >
          add new restaurant:
        </p>
        {toolTip ? <p style={{ color: "red" }}>**Please add name</p> : null}
        <TextField
          required
          style={{
            margin: "1%",
          }}
          label={"name"}
          helperText="name"
          onInput={(e) => setName(e.target.value)}
        ></TextField>
        <TextField
          required
          helperText="address"
          label={"address"}
          style={{
            margin: "1%",
          }}
          onInput={(e) => setAddress(e.target.value)}
        />
        <TextField
          style={{
            margin: "1%",
          }}
          label="desc"
          helperText="desc"
          onInput={(e) => setDesc(e.target.value)}
        />
        <div style={{ display: "flex" }}>
          <Link to="/home">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            onClick={(e) => handleClick(e)}
          >
            Save!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddRest;
