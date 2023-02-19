import classes from "./Header.module.css";
export const Header = ({ setShow, currentUser }) => {
  return (
    <div className={classes.container}>
      <span className={classes.header}>{currentUser.name}</span>
      <div
        className={classes.logoutButton}
        onClick={() => {
          setShow(1);
        }}
      >
        Logout
      </div>
    </div>
  );
};
