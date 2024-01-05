import React from "react";
import "./App.css";

function LoginForm() {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
