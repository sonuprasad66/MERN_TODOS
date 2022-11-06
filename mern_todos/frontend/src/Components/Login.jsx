import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginData = (payload) => {
    return fetch("http://localhost:7000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
        console.log(res.token);
        alert(res.msg);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    LoginData(payload);
    navigate("/");
    console.log(payload);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};
