import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signUp = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Sign-up successful! You can now log in.");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="login-box">
      <h2>𝐒𝐢𝐠𝐧 𝐔𝐩</h2>
      <form onSubmit={signUp}>
        <div className="user-box">
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
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
          Sign Up
        </button>
      </form>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
};

export default Login;
