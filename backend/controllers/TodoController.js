const todoService = require('./../services/TodoService');
const Todo = require("../models/Todo");

async function getAllTodos(req, res) {
    let todos = await todoService.getAllTodos();
    res.json(todos);
}
async function getAllTodoCompleted(req, res) {
    let todo = await todoService.getAllTodosCompleted();
    res.json(todo);
}
async function getTodoById(req, res) {
    let id = req.params.id;
    let todo = await todoService.getTodoById(id);
    res.json(todo);
}
async function saveTodo(req, res) {
    let todo = req.body;
    console.log('body ',todo);
    try
    {
        let savedTodo = await todoService.saveTodo(todo);
        res.status(201).json(savedTodo);
    }
    catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}
async function updateTodo(req, res) {
    let id = req.params.id;
    let todo = req.body;
    console.log('body ',todo);
    try
    {
        let updatedTodo = await todoService.updateTodo(id,todo);
        res.status(200).json(updatedTodo);
    }
    catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}
async function deleteTodo(req, res) {
    let id = req.params.id;

    try
    {
        let deletedTodo = todoService.deleteTodoById(id);
        if(deletedTodo){
            res.status(200).json(deletedTodo);
        }
        else
        {
            res.status(404).json({
                message:'No todos found'
            });
        }

    }
    catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}
module.exports = {
    getAllTodos,
    getAllTodoCompleted,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo,
}