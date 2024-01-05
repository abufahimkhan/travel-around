import React from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";

function SignupForm() {
  return (
    <div className="auth-form">
      <h2>Sign up</h2>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default SignupForm;
