import React, { useState } from "react";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://your-django-backend/api/";
    const endpoint = isLogin ? "login/" : "create/";

    try {
      const response = await fetch(apiUrl + endpoint, {
        method: "POST",
        mode: "cors",
        username,
        password,
      });

      // Handle the response according to your needs
      console.log(response.data);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default AuthForm;
