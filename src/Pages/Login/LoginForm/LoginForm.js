import { useState } from "react";
import classes from "./LoginForm.module.css";
import { checkLogin } from "../../../functions";

export const LoginForm = ({ setShow, employees, managers, setCurrentUser }) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const verifyLogin = () => {
    if (!isNaN(id)) {
      if (id < 1000) {
        let user = checkLogin(managers, id, pass);
        if (user != null) {
          setCurrentUser(user);
          setShow(2);
        }
      } else if (id > 999) {
        let user = checkLogin(employees, id, pass);
        if (user != null) {
          setCurrentUser(user);
          setShow(3);
        }
      }
    } else {
      alert("Please enter a correct number");
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.header}>Welcome</span>
      <div className={classes.username}>
        <p>Id</p>
        <input
          onChange={(event) => {
            setId(event.target.value);
          }}
        ></input>
      </div>
      <div className={classes.password}>
        <p>Password</p>
        <input
          type="password"
          onChange={(event) => {
            setPass(event.target.value);
          }}
        ></input>
      </div>
      <div
        className={classes.loginButton}
        onClick={() => {
          // setShow(2);
          verifyLogin();
        }}
      >
        LOGIN
      </div>
    </div>
  );
};
