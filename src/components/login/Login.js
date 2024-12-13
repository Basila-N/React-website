import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="login-box">
      <h2>𝐋𝐨𝐠𝐢𝐧</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="user-box">
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
