const express = require("express");
const { getAllTodo } = require("./todo.controller");

const route = express.Router();


route.get("/hello", getAllTodo);


module.exports = route;
