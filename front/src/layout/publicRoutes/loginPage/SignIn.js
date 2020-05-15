import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { setToken, setId } from "../../../services/auth.service";
import { loginUser } from "../../../services/coetus.service";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleLogIn = () => {
    loginUser(username, password).then((res) => {
      setToken(res.data.token);
      setId(res.data.user.user_id);
      history.push("/home");
    });
  };

  return (
    <div className="container">
      <p className="text">
        If you don't have an account please
        <Link to="/register"> Register!</Link>
      </p>
      <div className="input-form">
        <input
          className="input"
          type="text"
          placeholder="Username"
          autoComplete="off"
          onInput={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        ></input>
        <input
          className="input"
          type="password"
          placeholder="Password"
          autoComplete="off"
          onInput={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        ></input>
        <button
          className="button"
          type="button"
          onClick={(e) => {
            handleLogIn();
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
