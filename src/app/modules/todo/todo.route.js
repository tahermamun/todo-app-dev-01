const express = require("express");
const todoController= require("./todo.controller");

const route = express.Router();

route.get("/todos",todoController.getAllTodo);
route.post("/create", todoController.createTodo);

module.exports = route;
