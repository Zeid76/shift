import { useState } from "react";
import { Elist } from "./Elist/Elist";
import { Header } from "./Header/Header";
import classess from "./Manager.module.css";
import { Notify } from "./Notify/Notify";
import { Week } from "./Week/Week";

export const Manager = ({
  setShow,
  currentUser,
  shifts,
  setShifts,
  setEmployees,
  employees,
  setMsg,
  msg,
}) => {
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(true);

  return (
    <div>
      <Header setShow={setShow} currentUser={currentUser} />
      {showEmployeeDetails ? (
        <div className={classess.main}>
          <div className={classess.left}>
            <div
              className={classess.button}
              onClick={() => {
                setShowEmployeeDetails(false);
              }}
            >
              Employee Details {"-->"}
            </div>
            <Notify setMsg={setMsg} msg={msg} />
          </div>

          <Week shifts={shifts} setShifts={setShifts} />
        </div>
      ) : (
        <Elist
          setShowEmployeeDetails={setShowEmployeeDetails}
          setEmployees={setEmployees}
          employees={employees}
        />
      )}
    </div>
  );
};
