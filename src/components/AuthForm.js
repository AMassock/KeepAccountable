import React, { useState } from "react";
import axios from "axios";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      //   const response = await axios.post("http://localhost:8000/register/", {
      //     method: "POST",
      //     mode: "cors",
      //     credentials: "include",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ username, password }),
      //   });
      const response = await axios.post(
        "https://boiling-atoll-94851.herokuapp.com/register/",
        {
          username,
          password,
        },
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const data = await response.json();
      setMessage(data.success || data.error);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://boiling-atoll-94851.herokuapp.com/login/",
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();
      setMessage(data.success || data.error);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Create Account"}</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <button type="submit">{isLogin ? "Login" : "Create Account"}</button> */}
      </form>
      {/* <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Already have an account? Login"}
      </p> */}
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default AuthForm;
