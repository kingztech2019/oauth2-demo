import React from "react";

const LoginButton = ({ loginWithRedirect }) => {
  return (
    <button className="Login-button" onClick={loginWithRedirect}>
      Log In
    </button>
  );
};

export default LoginButton;
