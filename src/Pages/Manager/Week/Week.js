import { getShifts, saveToStorage } from "../../../functions";
import classes from "./Week.module.css";

export const Week = ({ shifts, setShifts }) => {
  const handleClear = () => {
    let x = shifts;

    for (let i = 0; i < x.length; i++) {
      x[i].shifts.morning.taken = false;
      x[i].shifts.morning.employee = {};
      x[i].shifts.midday.taken = false;
      x[i].shifts.midday.employee = {};
      x[i].shifts.night.taken = false;
      x[i].shifts.night.employee = {};
    }
    saveToStorage("shifts", x);
    setShifts(getShifts());
  };

  return (
    <div className={classes.container}>
      <WeekCard
        day="Sunday"
        shift={shifts[0]}
        shifts={shifts}
        setShifts={setShifts}
      />
      <WeekCard
        day="Monday"
        shift={shifts[1]}
        setShifts={setShifts}
        shifts={shifts}
      />
      <WeekCard
        day="Tuesday"
        shift={shifts[2]}
        setShifts={setShifts}
        shifts={shifts}
      />
      <WeekCard
        day="Wednesday"
        shift={shifts[3]}
        setShifts={setShifts}
        shifts={shifts}
      />
      <WeekCard
        day="Thursday"
        shift={shifts[4]}
        setShifts={setShifts}
        shifts={shifts}
      />
      <WeekCard
        day="Friday"
        shift={shifts[5]}
        setShifts={setShifts}
        shifts={shifts}
      />
      <WeekCard
        day="Saturday"
        shift={shifts[6]}
        setShifts={setShifts}
        shifts={shifts}
      />
      <div
        onClick={handleClear}
        className="flex justify-center items-center bg-white text-xl rounded-md hover:cursor-pointer"
      >
        Clear
      </div>
    </div>
  );
};

const WeekCard = ({ day, shift, setShifts, shifts }) => {
  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event, item) {
    console.log(item);
    if (Object.keys(item).length === 0) {
      alert("This shift is not taken");
    } else {
      event.dataTransfer.setData("text", JSON.stringify(item));
    }
  }

  function drop(event) {
    event.preventDefault();
    var data = JSON.parse(event.dataTransfer.getData("text"));
    let day = event.target.getAttribute("day");
    let time = parseInt(event.target.getAttribute("x"));
    if (day === "Monday") {
      let x = shifts;

      if (time === 0) {
        x[1].shifts.morning.taken = true;
        x[1].shifts.morning.employee = data;
      } else if (time === 1) {
        x[1].shifts.midday.taken = true;
        x[1].shifts.midday.employee = data;
      } else if (time === 2) {
        x[1].shifts.night.taken = true;
        x[1].shifts.night.employee = data;
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Tuesday") {
      let x = shifts;

      if (time === 0) {
        x[2].shifts.morning.taken = true;
        x[2].shifts.morning.employee = data;
      } else if (time === 1) {
        x[2].shifts.midday.taken = true;
        x[2].shifts.midday.employee = data;
      } else if (time === 2) {
        x[2].shifts.night.taken = true;
        x[2].shifts.night.employee = data;
      }
      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Wednesday") {
      let x = shifts;

      if (time === 0) {
        x[3].shifts.morning.taken = true;
        x[3].shifts.morning.employee = data;
      } else if (time === 1) {
        x[3].shifts.midday.taken = true;
        x[3].shifts.midday.employee = data;
      } else if (time === 2) {
        x[3].shifts.night.taken = true;
        x[3].shifts.night.employee = data;
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Thursday") {
      let x = shifts;

      if (time === 0) {
        x[4].shifts.morning.taken = true;
        x[4].shifts.morning.employee = data;
      } else if (time === 1) {
        x[4].shifts.midday.taken = true;
        x[4].shifts.midday.employee = data;
      } else if (time === 2) {
        x[4].shifts.night.taken = true;
        x[4].shifts.night.employee = data;
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Friday") {
      let x = shifts;

      if (time === 0) {
        x[5].shifts.morning.taken = true;
        x[5].shifts.morning.employee = data;
      } else if (time === 1) {
        x[5].shifts.midday.taken = true;
        x[5].shifts.midday.employee = data;
      } else if (time === 2) {
        x[5].shifts.night.taken = true;
        x[5].shifts.night.employee = data;
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Saturday") {
      let x = shifts;

      if (time === 0) {
        x[6].shifts.morning.taken = true;
        x[6].shifts.morning.employee = data;
      } else if (time === 1) {
        x[6].shifts.midday.taken = true;
        x[6].shifts.midday.employee = data;
      } else if (time === 2) {
        x[6].shifts.night.taken = true;
        x[6].shifts.night.employee = data;
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Sunday") {
      let x = shifts;

      if (time === 0) {
        x[0].shifts.morning.taken = true;
        x[0].shifts.morning.employee = data;
      } else if (time === 1) {
        x[0].shifts.midday.taken = true;
        x[0].shifts.midday.employee = data;
      } else if (time === 2) {
        x[0].shifts.night.taken = true;
        x[0].shifts.night.employee = data;
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    }
  }

  const handleDelete = (day, time) => {
    console.log(day, time);
    if (day === "Monday") {
      let x = shifts;

      if (time === 0) {
        x[1].shifts.morning.taken = false;
        x[1].shifts.morning.employee = {};
      } else if (time === 1) {
        x[1].shifts.midday.taken = false;
        x[1].shifts.midday.employee = {};
      } else if (time === 2) {
        x[1].shifts.night.taken = false;
        x[1].shifts.night.employee = {};
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Tuesday") {
      let x = shifts;

      if (time === 0) {
        x[2].shifts.morning.taken = false;
        x[2].shifts.morning.employee = {};
      } else if (time === 1) {
        x[2].shifts.midday.taken = false;
        x[2].shifts.midday.employee = {};
      } else if (time === 2) {
        x[2].shifts.night.taken = false;
        x[2].shifts.night.employee = {};
      }
      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Wednesday") {
      let x = shifts;

      if (time === 0) {
        x[3].shifts.morning.taken = false;
        x[3].shifts.morning.employee = {};
      } else if (time === 1) {
        x[3].shifts.midday.taken = false;
        x[3].shifts.midday.employee = {};
      } else if (time === 2) {
        x[3].shifts.night.taken = false;
        x[3].shifts.night.employee = {};
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Thursday") {
      let x = shifts;

      if (time === 0) {
        x[4].shifts.morning.taken = false;
        x[4].shifts.morning.employee = {};
      } else if (time === 1) {
        x[4].shifts.midday.taken = false;
        x[4].shifts.midday.employee = {};
      } else if (time === 2) {
        x[4].shifts.night.taken = false;
        x[4].shifts.night.employee = {};
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Friday") {
      let x = shifts;

      if (time === 0) {
        x[5].shifts.morning.taken = false;
        x[5].shifts.morning.employee = {};
      } else if (time === 1) {
        x[5].shifts.midday.taken = false;
        x[5].shifts.midday.employee = {};
      } else if (time === 2) {
        x[5].shifts.night.taken = false;
        x[5].shifts.night.employee = {};
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Saturday") {
      let x = shifts;

      if (time === 0) {
        x[6].shifts.morning.taken = false;
        x[6].shifts.morning.employee = {};
      } else if (time === 1) {
        x[6].shifts.midday.taken = false;
        x[6].shifts.midday.employee = {};
      } else if (time === 2) {
        x[6].shifts.night.taken = false;
        x[6].shifts.night.employee = {};
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    } else if (day === "Sunday") {
      let x = shifts;

      if (time === 0) {
        x[0].shifts.morning.taken = false;
        x[0].shifts.morning.employee = {};
      } else if (time === 1) {
        x[0].shifts.midday.taken = false;
        x[0].shifts.midday.employee = {};
      } else if (time === 2) {
        x[0].shifts.night.taken = false;
        x[0].shifts.night.employee = {};
      }

      saveToStorage("shifts", x);
      setShifts(getShifts());
    }
  };

  return (
    <div className={classes.card}>
      <span>{day}</span>

      <p className={classes.pp1}>
        6am-5pm:{" "}
        <span
          x={0}
          day={day}
          draggable={true}
          onDrop={(event) => drop(event)}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDragStart={(event) => {
            drag(event, shift.shifts.morning.employee);
          }}
          className={classes.ss1}
        >
          {shift.shifts.morning.taken ? "taken" : "not taken"},
          {shift.shifts.morning.employee.name}
        </span>
        <span
          className={classes.ss2}
          onClick={() => {
            handleDelete(day, 0);
          }}
        >
          X
        </span>
      </p>
      <p className={classes.pp1}>
        5pm-12am:{" "}
        <span
          x={1}
          day={day}
          draggable={true}
          onDrop={(event) => drop(event)}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDragStart={(event) => {
            drag(event, shift.shifts.midday.employee);
          }}
          className={classes.ss1}
        >
          {shift.shifts.midday.taken ? "taken" : "not taken"},
          {shift.shifts.midday.employee.name}
        </span>
        <span
          className={classes.ss2}
          onClick={() => {
            handleDelete(day, 1);
          }}
        >
          X
        </span>
      </p>
      <p className={classes.pp1}>
        12am-6am:{" "}
        <span
          x={2}
          day={day}
          draggable={true}
          onDrop={(event) => drop(event)}
          onDragOver={(event) => {
            allowDrop(event);
          }}
          onDragStart={(event) => {
            drag(event, shift.shifts.night.employee);
          }}
          className={classes.ss1}
        >
          {shift.shifts.night.taken ? "taken" : "not taken"},
          {shift.shifts.night.employee.name}
        </span>
        <span
          className={classes.ss2}
          onClick={() => {
            handleDelete(day, 2);
          }}
        >
          X
        </span>
      </p>
    </div>
  );
};
