import { useAuth0 } from "@auth0/auth0-react";
import { classes } from "../utils/utilsFunctions";
import styles from "../utils/utils.module.scss";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div/>
    );
  }
  return (
    <span onClick={() => loginWithRedirect()} className={classes(styles.cursorPointer, "text-white")}>Log In</span>
  );
}

export default Login;