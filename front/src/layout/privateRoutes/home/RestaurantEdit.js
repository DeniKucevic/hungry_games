import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { GetRestaurant, updateRestaurant } from "../../../services/FeathersAPI";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from '@material-ui/icons/Delete';
import SideBar from "../SideBar";
import Header from "../Header";

const RestaurantEdit = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [newName, setnewName] = useState("");
  const [newAddress, setnewAddress] = useState("");
  const [newDesc, setnewDesc] = useState("");

  const history = useHistory();
  const name = useParams().name;

  // povlaci podatke za restoran po ID
  useEffect(() => {
    GetRestaurant(name).then((res) => {
      setRestaurant(res.data);
      setnewName(res.data.name);
      setnewAddress(res.data.address);
      setnewDesc(res.data.desc);
    });
  }, []);

  //salje updatedovan body restorana
  async function handleClick() {
    const body = {
      name: newName,
      address: newAddress,
      desc: newDesc,
    };
    try {
      const response = await updateRestaurant(name, body);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    history.push("/home");
  }

  return (
    <>
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
          edit the restauratnt ifno:
        </p>
        <TextField
          required
          style={{
            margin: "1%",
          }}
          label={restaurant.name}
          helperText="name"
          onInput={(e) => setnewName(e.target.value)}
        ></TextField>
        <TextField
          required
          helperText="address"
          label={restaurant.address}
          style={{
            margin: "1%",
          }}
          onInput={(e) => setnewAddress(e.target.value)}
        />
        <TextField
          style={{
            margin: "1%",
          }}
          label="desc"
          helperText="desc"
          onInput={(e) => setnewDesc(e.target.value)}
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
    </>
  );
};

export default RestaurantEdit;
