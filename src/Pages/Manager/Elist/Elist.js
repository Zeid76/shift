import { AddEmployee } from "../AddEmployee/AddEmployee";
import { EmployeeList } from "../EmployeeList/EmployeeList";
import classes from "./Elist.module.css";

export const Elist = ({ setShowEmployeeDetails, setEmployees, employees }) => {
  return (
    <div className={classes.container}>
      <div
        onClick={() => {
          setShowEmployeeDetails(true);
        }}
        className={classes.button}
      >
        Go Back {"<--"}
      </div>
      <div className={classes.main}>
        <AddEmployee employees={employees} setEmployees={setEmployees} />
        <EmployeeList employees={employees} setEmployees={setEmployees} />
      </div>
    </div>
  );
};
