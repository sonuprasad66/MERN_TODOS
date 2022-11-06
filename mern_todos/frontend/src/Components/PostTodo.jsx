import React from "react";
import { useState } from "react";

export const PostTodo = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const postData = (payload) => {
    return fetch("http://localhost:7000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert(res.msg);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const payload = {
      title,
      tag,
    };
    postData(payload);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Tag"
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
