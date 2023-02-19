import classes from "./Week.module.css";

export const Week = ({ shifts }) => {
  return (
    <div className={classes.container}>
      <WeekCard day="Sunday" shift={shifts[0]} />
      <WeekCard day="Monday" shift={shifts[1]} />
      <WeekCard day="Tuesday" shift={shifts[2]} />
      <WeekCard day="Wednesday" shift={shifts[3]} />
      <WeekCard day="Thursday" shift={shifts[4]} />
      <WeekCard day="Friday" shift={shifts[5]} />
      <WeekCard day="Saturday" shift={shifts[6]} />
    </div>
  );
};

const WeekCard = ({ day, shift }) => {
  return (
    <div className={classes.card}>
      <span>{day}</span>
      <p>
        6am-5pm: {shift.shifts.morning.taken ? "taken" : "not taken"}
        {shift.shifts.morning.employee.name}
      </p>
      <p>
        5pm-12am: {shift.shifts.midday.taken ? "taken" : "not taken"}
        {shift.shifts.midday.employee.name}
      </p>
      <p>
        12am-6am: {shift.shifts.night.taken ? "taken" : "not taken"}
        {shift.shifts.night.employee.name}
      </p>
    </div>
  );
};
