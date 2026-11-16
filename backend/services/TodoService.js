const Todo = require('./../models/Todo');

async function getAllTodos() {
    let todos = await Todo.find();
    return todos;
}
async function getAllTodosCompleted() {
    let todos = await Todo.find({
        completed: true,
    });
    return todos;
}
async function getTodoById(id)
{
    let todo = await Todo.findById(id);
    return todo;
}
async function saveTodo(todo)
{
    let newTodo = new Todo(todo);
    let savedTodo = await newTodo.save();
    return savedTodo;
}
async function updateTodo(id,todo)
{
    let updatedTodo = await Todo.findByIdAndUpdate(id,todo,{
        new:true,
    });
    return updatedTodo;
}
async function deleteTodoById(id)
{
    let deletedTodo = await Todo.findByIdAndDelete(id);
    return deletedTodo;
}
module.exports = {
    getAllTodos,
    getAllTodosCompleted,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodoById,
}