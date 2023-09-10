import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import signupIllustration from "../assets/images/signup.svg";
import baseUrl from "../baseUrl";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  async function register(ev) {
    ev.preventDefault();
    if (confirmPassword === password) {
      const response = await fetch(`${baseUrl}/signup`, {
        // Correct usage of baseUrl
        method: "POST",
        body: JSON.stringify({ email, username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        alert("Registration Successful");
        setRedirect(true);
      } else {
        alert("Registration failed");
      }
    } else {
      alert("Different password provided for confirmation.");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div id="signup">
      <div className="row">
        <div className="login-col-1 col">
          <img src={logo} alt="" className="logo" />
          <h1>
            Education Automation Program and Parent Information System Designed
            for All Educational Institutions Welcome!
          </h1>
          <img
            src={signupIllustration}
            alt=""
            className="signup-illustration"
          />
        </div>
        <div className="login-col-2 col">
          <div className="login-form">
            <h1>Signup</h1>
            <form onSubmit={register}>
              <input
                type="email"
                name="signUpEmail"
                id="signUpEmail"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <input
                type="username"
                name="signUpUsername"
                id="signUpUsername"
                placeholder="Username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
              <input
                type="password"
                name="signUpPassword"
                id="sighUpPassword"
                placeholder="Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
              />
              <button type="submit">SignUp</button>
            </form>
            <p>
              Already have an account? <Link to={"/"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
