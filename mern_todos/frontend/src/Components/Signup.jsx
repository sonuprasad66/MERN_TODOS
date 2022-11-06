import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignupData = (payload) => {
    // console.log(payload)
    return fetch("http://localhost:7000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // alert(res.msg);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
    };
    // console.log(payload);
    SignupData(payload);
    navigate("/login");
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
};
