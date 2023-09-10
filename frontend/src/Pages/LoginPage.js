import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../Components/UserContext";
import loginIllustration from "../assets/images/login.svg";
import logo from "../assets/images/logo.svg";
import baseUrl from "../baseUrl";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setRedirect(true);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  }

  if (redirect) {
    return <Navigate to={"/home"} />;
  }

  return (
    <div id="login">
      <div className="row">
        <div className="login-col-1 col">
          <img src={logo} alt="" className="logo" />
          <h1>
            Education Automation Program and Parent Information System Designed
            for All Educational Institutions Welcome!
          </h1>
          <img src={loginIllustration} alt="" className="login-illustration" />
        </div>
        <div className="login-col-2 col">
          <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={login}>
              <input
                type="email"
                name="loginEmail"
                id="loginEmail"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <input
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="forgot-password"
              >
                Forgot Password?
              </a>
              <br />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/signup">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
