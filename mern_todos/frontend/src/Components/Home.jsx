import React from "react";
import { GetTodo } from "./GetTodo";
import { Navbar } from "./Navbar";
import { PostTodo } from "./PostTodo";

export const Home = () => {
  return (
    <div>
     
      <PostTodo />
      <br />
      <br />
      <GetTodo />
    </div>
  );
};
