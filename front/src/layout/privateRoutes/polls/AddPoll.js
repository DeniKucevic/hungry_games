import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import { Input, Button } from "@material-ui/core";
import {
  GetAllRestaurants,
  createVote,
  createPoll,
} from "../../../services/FeathersAPI";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AddPoll = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selected, setSelected] = useState({});
  const [render, setRender] = useState([]);
  const [assist, setAssist] = useState([]);
  const [tmp, setTmp] = useState([]);
  const [idvote, setIdVote] = useState([]);

  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    GetAllRestaurants().then((res) => {
      setRestaurants(res.data.data);
      setTmp(res.data.data);
    });
  }, []);

  //popunjavamo niz za autocomplete, komande za dodavanje...

  const handleClick = () => {
    tmp.splice(
      tmp.findIndex((el) => el.id === selected.id),
      1
    );
    setRestaurants(tmp);
    setAssist([...assist, render]);
  };

  const handleRemove = (el) => {
    setTmp([...tmp, el]);
    setRestaurants(tmp);
    let tao = assist.splice(
      assist.findIndex((a) => a.id === el.id),
      1
    );
  };

  //kreiramo body za poll
  //name
  const handleName = (e) => {
    setNameInput(e.target.value);
  };

  const preparedVoteList = assist.map((el) => el.id);

  const handleVoteCreate = () => {
    if (nameInput === "") {
      alert("please enter poll name");
    }
    const voteIds = [];
    const restIds = assist.map((el) => el.id);
    preparedVoteList.map((el) =>
      createVote({ votes: 0, restaurantId: el }).then((res) =>
        voteIds.push(res.data.id)
      )
    );
    console.log(voteIds);
    setTimeout(() => {
      createPoll({
        label: nameInput,
        votes: voteIds,
        restaurants: restIds,
        date: new Date(),
      }).then((res) => console.log(res));
    }, 4000);
  };

  return (
    <div>
      <SideBar />
      <Header />
      <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "3%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label>Enter poll name : </label>
            <Input placeholder="poll name" onChange={(e) => handleName(e)} />
          </div>
          <div>
            <p>Choose restaurants : </p>
            <Autocomplete
              id="combo-box-demo"
              options={restaurants}
              getOptionLabel={(option) => option.name}
              getOptionSelected={(option, values) => option._id === values._id}
              style={{ width: 300 }}
              onChange={(e, value) => (setSelected(value), setRender(value))}
              renderInput={(params) => (
                <TextField {...params} label="Combo box" variant="outlined" />
              )}
            />
            <div style={{ marginTop: "2%" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => handleClick()}
              >
                ADD
              </Button>
            </div>
          </div>
          <label style={{ marginTop: "2%" }}>Number of people:</label>
          <input type="number"></input>
        </div>
        {assist.map((el) => {
          return (
            <div key={el.id}>
              <label>{el.name}</label>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={(e) => handleRemove(el)}
              >
                REMOVE
              </Button>
            </div>
          );
        })}
        <div style={{ marginTop: "2%" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleVoteCreate()}
          >
            CREATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPoll;
