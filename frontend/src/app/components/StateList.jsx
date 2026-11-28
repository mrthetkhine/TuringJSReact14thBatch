import {useState} from "react";

const initialState =  [
    {
        id:1,
        title:'Todo 1'
    },
    {
        id:2,
        title:'Todo 2'
    },
    {
        id:3,
        title:'Todo 3'
    },
]
export default function StateList()
{
    let [todos,setTodos]= useState(initialState);
    return(<div>
        {
            todos.map(todo=><div key={todo.id}>
                {
                    todo.title
                }
            </div>)
        }
    </div>)

}