const todoRoute = require("express").Router();

const todos = [];

todoRoute.post("/", (req, res) => {
  todos.push(req.body.todo);
  res.redirect("/");
});
todoRoute.get("/", (req, res) => {
  res.render("todo", { todos });
});

module.exports = todoRoute;
