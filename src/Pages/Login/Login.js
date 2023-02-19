import { LoginForm } from "./LoginForm/LoginForm";
import { ReactComponent as LoginLogo } from "../../assets/LoginLogo.svg";
import classes from "./Login.module.css";

export const Login = ({ setShow, employees, managers, setCurrentUser }) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <LoginLogo />
      </div>
      <div className={classes.right}>
        <LoginForm
          setShow={setShow}
          employees={employees}
          managers={managers}
          setCurrentUser={setCurrentUser}
        />
      </div>
    </div>
  );
};
