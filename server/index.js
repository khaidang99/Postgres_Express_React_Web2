const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./services/db')
const Todo = require('./services/todo')
const asyncHandler = require('express-async-handler')
// middleware

app.use(cors());
app.use(express.json());
app.get('/',asyncHandler(async function(req,res){
    const user = await Todo.create({
        description:"aaaaaa"
    })
}))

//create
app.post('/todo',asyncHandler(async function(req,res){    
    const {description} = req.body;
    const user1 = await Todo.create({
        description:description
    })
    
    res.json(user1.description)
}))
//all
app.get('/todo',asyncHandler(async function(req,res){
    try {
        const todo = await Todo.all();
        console.log(todo)
        res.json(todo)
    } catch (error) {
        console.error(error.message)   
    }
}))
//delete
app.delete('/todo/:id',asyncHandler(async function(req,res){
    try {
        const {id} = req.params;
        const todo = await Todo.deleteTodo(id);
        console.log(todo)
        res.json(todo)
    } catch (error) {
        console.error(error.message)   
    }
}))
//update
app.put('/todo/:id',asyncHandler(async function(req,res){
    try {
        const {id} = req.params;
        const {description} =req.body;
        const todo = await Todo.updateDescription(description,id)
        console.log(todo)
        res.json(todo)
    } catch (error) {
        console.error(error.message)   
    }
    
}))
db.sync().then(app.listen(5000,()=>{
    console.log("server has started on port 5000")
}))