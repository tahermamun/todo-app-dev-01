const todoService = require("./todo.service");
let getAllTodo = (req, res) => {
  const allTodo = todoService.getAllTodo();
  res.status(200).json({
    status: "success",
    data: allTodo,
  });
};

const createTodo = (req, res) => {


const data=todoService.createTodo(req.body)

if(data){
  res.status(201).json({
    status: "Data Added Success",
  });
}else{
  res.status(404).json({
    status: "Failed to create Todo",
  });
}







};

module.exports = {
  getAllTodo,
  createTodo,
};
