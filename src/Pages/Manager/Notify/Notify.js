import { useState } from "react";
import classes from "./Notify.module.css";
export const Notify = ({ setMsg, msg }) => {
  const [value, setValue] = useState("");

  const handleMsg = () => {
    if (value !== "") {
      setMsg(value);
      alert("Updated Notification");
    }
  };

  return (
    <div className={classes.container}>
      <span>Notify</span>
      <p>Write a message for all the employees</p>
      <input
        placeholder={msg}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
      <div onClick={handleMsg}>Send Message</div>
    </div>
  );
};
