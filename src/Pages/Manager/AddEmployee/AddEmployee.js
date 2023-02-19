import { useState } from "react";
import {  saveToStorage } from "../../../functions";
import classes from "./AddEmployee.module.css";

export const AddEmployee = ({ employees, setEmployees }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [num, setNum] = useState("");

  const handleAdd = () => {
    if (name === "" || id === "" || pass === "" || num === "" || isNaN(id)) {
      alert("Please enter correct values");
    } else {
      if (window.confirm("Are you sure you want to add an employee?")) {
        setEmployees((employees) => [
          ...employees,
          {
            name: name,
            id: id,
            password: pass,
            phoneNumber: num,
          },
        ]);

        saveToStorage("employees", employees);
      } else {
      }
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.header}>Add Employee</span>
      <div className={classes.item}>
        <span>Name</span>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </div>
      <div className={classes.item}>
        <span>Id</span>
        <input
          onChange={(event) => {
            setId(event.target.value);
          }}
        ></input>
      </div>
      <div className={classes.item}>
        <span>Password</span>
        <input
          onChange={(event) => {
            setPass(event.target.value);
          }}
        ></input>
      </div>
      <div className={classes.item}>
        <span>PhoneNumber</span>
        <input
          onChange={(event) => {
            setNum(event.target.value);
          }}
        ></input>
      </div>
      <div
        className={classes.button}
        onClick={() => {
          handleAdd();
        }}
      >
        Add Employee
      </div>
    </div>
  );
};
