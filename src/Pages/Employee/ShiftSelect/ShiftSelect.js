import { useState } from "react";
import classes from "./ShiftSelect.module.css";
import { getShifts, saveToStorage } from "../../../functions";

export const ShiftSelect = ({ setShifts, shifts, currentUser }) => {
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(0);
  const handleShift = () => {
    let x = shifts;
    if (time === 0) {
      if (!shifts[day].shifts.morning.taken) {
        x[day].shifts.morning.taken = true;
        x[day].shifts.morning.employee = currentUser;
      } else {
        alert("Shift Already Taken");
      }
    }

    if (time === 1) {
      if (!shifts[day].shifts.midday.taken) {
        let x = shifts;
        x[day].shifts.midday.taken = true;
        x[day].shifts.midday.employee = currentUser;
      } else {
        alert("Shift Already Taken");
      }
    }

    if (time === 2) {
      if (!shifts[day].shifts.night.taken) {
        let x = shifts;
        x[day].shifts.night.taken = true;
        x[day].shifts.night.employee = currentUser;
      } else {
        alert("Shift Already Taken");
      }
    }

    saveToStorage("shifts", shifts);
    setShifts(getShifts());
  };

  return (
    <div className={classes.container}>
      <div className={classes.selectContainer}>
        <select
          className={classes.select}
          onChange={(event) => {
            setDay(parseInt(event.target.value));
          }}
        >
          <option value="0">sunday</option>
          <option value="1">monday</option>
          <option value="2">tuesday</option>
          <option value="3">wendesday</option>
          <option value="4">thursday</option>
          <option value="5">friday</option>
          <option value="6">saturday</option>
        </select>
        <select
          className={classes.select}
          onChange={(event) => {
            setTime(parseInt(event.target.value));
          }}
        >
          <option value="0">Morning Shift (6am-5pm)</option>
          <option value="1">Midday Shift (5pm-12am)</option>
          <option value="2">Night Shift (12am-6am)</option>
        </select>{" "}
      </div>
      <div
        className={classes.addButton}
        onClick={() => {
          handleShift();
        }}
      >
        Add Shift
      </div>
    </div>
  );
};
