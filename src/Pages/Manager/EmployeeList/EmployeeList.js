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
    <div className="relative overflow-x-auto sm:rounded-lg overflow-y-auto h-[25rem] w-[45rem] pr-5">
      <table className="w-full text-sm text-left">
        <TableHead />
        <tbody className="">
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
    <thead className="text-xs uppercase">
      <tr>
        <th scope="col" className="px-6 py-3  text-center">
          Name
        </th>
        <th scope="col" className="px-6 py-3  text-center">
          Id
        </th>
        <th scope="col" className="px-6 py-3  text-center">
          PhoneNumber
        </th>

        <th scope="col" className="px-6 py-3  text-center">
          Remove
        </th>
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
    <tr className="border-b">
      <th className="px-6 py-4 font-medium whitespace-nowrap text-center">
        {name}
      </th>
      <td className="px-6 py-4 text-center">{id}</td>
      <td className="px-6 py-4 text-center">{phoneNumber}</td>
      <td className="px-6 py-4 text-center" onClick={() => handleRemove()}>
        X
      </td>
    </tr>
  );
};
