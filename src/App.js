import { useEffect, useState } from "react";
import { Employee } from "./Pages/Employee/Employee";
import { Login } from "./Pages/Login/Login";
import { Manager } from "./Pages/Manager/Manager";
import { getEmployees, getShifts, getManagers, getMessage } from "./functions";
import { initEmpty } from "./functions";

function App() {
  const [show, setShow] = useState(1);
  const [employees, setEmployees] = useState(getEmployees());
  const [managers, setManagers] = useState(getManagers());
  const [shifts, setShifts] = useState(getShifts());
  const [msg, setMsg] = useState(getMessage());
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // initEmpty();

    if (employees === null || managers === null) {
      initEmpty();
      setEmployees(getEmployees());
      setManagers(getManagers());
      setShifts(getShifts());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {show === 1 && (
        <Login
          setShow={setShow}
          employees={employees}
          managers={managers}
          setCurrentUser={setCurrentUser}
        />
      )}
      {show === 3 && (
        <Employee
          setShow={setShow}
          currentUser={currentUser}
          shifts={shifts}
          setShifts={setShifts}
          msg={msg}
        />
      )}
      {show === 2 && (
        <Manager
          setShow={setShow}
          shifts={shifts}
          setShifts={setShifts}
          currentUser={currentUser}
          employees={employees}
          setEmployees={setEmployees}
          setMsg={setMsg}
          msg={msg}
        />
      )}
    </div>
  );
}

export default App;
