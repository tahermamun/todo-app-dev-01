const express=require('express');
const todoRoutes=require('../modules/todo/todo.route')

const router=express.Router();


router.use("/todo",todoRoutes);


module.exports=router;