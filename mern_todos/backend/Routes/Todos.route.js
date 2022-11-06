const express = require("express");
const todosRouter = express.Router();
const { todosModel } = require("../Models/Todos.Model");

const { authentication } = require("../Middlewares/Auth");
const { userModel } = require("../Models/User.model");

todosRouter.get("/todos", authentication, async (req, res) => {
  const { user_id } = req.body;
  const user = await todosModel.find({ user_id });
  res.send({ user });
});

todosRouter.post("/create", authentication, async (req, res) => {
  const new_data = new todosModel({
    ...req.body,
  });
  await new_data.save();
  res.send({ msg: "Data Created successfull" });
});

todosRouter.delete("/delete", authentication, async (req, res) => {
  const { user_id, _id } = req.body;
  console.log(user_id, _id);
  const data = await todosModel.findOneAndDelete({ user_id, _id });

  res.send({ msg: "data deleted successfull", deleted: data });
});

todosRouter.patch("/patch", authentication, async (req, res) => {
  const { user_id, _id, title, tag } = req.body;
  // console.log(user_id, _id);
  await todosModel.findOneAndUpdate({ user_id, _id }, { title, tag });
  res.send({ msg: "data updated successfull" });
});

module.exports = {
  todosRouter,
};
