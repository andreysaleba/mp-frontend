import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div/>
    );
  }
  return (
    <span onClick={() => loginWithRedirect()} className="cursor-pointer text-white">Log In</span>
  );
}

export default Login;