import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
  const { logout } = useAuth0();

  return (
    <div onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </div>
  );
}

export default Logout;