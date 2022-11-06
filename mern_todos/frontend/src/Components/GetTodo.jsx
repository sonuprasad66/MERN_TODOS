import React, { useEffect, useState } from "react";

export const GetTodo = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    return fetch("http://localhost:7000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.user);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (_id) => {
    // console.log(_id);
    fetch(`http://localhost:7000/delete/`, {
      method: "DELETE",
      // mode: "no-cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(_id),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [getData]);

  // console.log(data);

  return (
    <div>
      {data?.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid red",
            width: "50%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <h2>{item.title}</h2>
          <h2>{item.tag}</h2>
          <button>{item.status}</button>
          <button onClick={() => handleDelete(item._id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};
