import React from "react";

export const Logout = () => {
  localStorage.setItem("token", "");

  return <div>Logout</div>;
};
