import { Header } from "./Header/Header";
import { ShiftSelect } from "./ShiftSelect/ShiftSelect";
import classess from "./Employee.module.css";
import { Week } from "./Week/Week";

export const Employee = ({ setShow, currentUser, shifts, setShifts, msg }) => {
  return (
    <div>
      <Header setShow={setShow} currentUser={currentUser} />
      <div className={classess.main}>
        <div className={classess.left}>
          <ShiftSelect
            setShifts={setShifts}
            shifts={shifts}
            currentUser={currentUser}
          />
        </div>

        <div className={classess.right}>
          <Week shifts={shifts} />
        </div>
      </div>
      <div className={classess.msg}>
        <p>Notification: {msg}</p>
      </div>
    </div>
  );
};
