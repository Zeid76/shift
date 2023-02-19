import { saveToStorage } from "../../../functions";
import classes from "./EmployeeList.module.css";

export const EmployeeList = ({ employees, setEmployees }) => {
  return (
    <div className={classes.container}>
      <Table employees={employees} setEmployees={setEmployees} />
    </div>
  );
};

const Table = ({ employees, setEmployees }) => {
  return (
    <div className={classes.tableContainer}>
      <table className={classes.tableHH}>
        <TableHead />
        <tbody>
          {employees.map((item) => (
            <Row
              name={item.name}
              id={item.id}
              phoneNumber={item.phoneNumber}
              key={item.id}
              setEmployees={setEmployees}
              employees={employees}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className={classes.thead1}>
      <tr>
        <th className={classes.thead2}>Name</th>
        <th className={classes.thead2}>Id</th>
        <th className={classes.thead2}>PhoneNumber</th>

        <th className={classes.thead2}>Remove</th>
      </tr>
    </thead>
  );
};

const Row = ({ name, id, phoneNumber, setEmployees, employees }) => {
  const handleRemove = () => {
    if (window.confirm("Are you sure you want to remove thid employee?")) {
      setEmployees(employees.filter((item) => item.id !== id));
      saveToStorage("employees", employees);
    } else {
    }
  };

  return (
    <tr className={classes.tRow1}>
      <th className={classes.tRow2}>{name}</th>
      <td className={classes.tRow3}>{id}</td>
      <td className={classes.tRow3}>{phoneNumber}</td>
      <td className={classes.tRow3} onClick={() => handleRemove()}>
        X
      </td>
    </tr>
  );
};
