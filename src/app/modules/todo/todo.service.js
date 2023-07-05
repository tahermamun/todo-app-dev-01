const data = require("../../../../fakeData.json");
const getAllTodo = () => {
  return data;
};

const createTodo = (obj) => {

let foundId=data.filter(item => item.id===obj.id);

if(foundId===[]) {
    return false;
}
data.push(obj)

return true
};






module.exports = {
  getAllTodo,
  createTodo,
};
