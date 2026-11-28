function List({todos})
{
    return(<div>
        Todolist
        {
            todos.map(todo=><div key={todo.id}>
                {
                    todo.title
                }
            </div>)
        }
    </div>);
}
const todos = [
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
export default function ListDemo() {
    return(<List todos={todos} />)
}