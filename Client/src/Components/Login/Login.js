import React from "react";
import { useAuthContext } from "@asgardeo/auth-react";

function Login() {
  const { signIn } = useAuthContext();

  return (
    <div>
      <h5>Login to Application</h5>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
}

export default Login;
