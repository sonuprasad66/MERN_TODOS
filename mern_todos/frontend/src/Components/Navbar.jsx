import React from "react";

export const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/signup">SignUp</a>
      <a href="/logout">Logout</a>
    </div>
  );
};
