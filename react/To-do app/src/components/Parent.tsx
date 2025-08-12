import { useReducer, useState } from "react";
import Child from "./Child";
// import Child from "./Child";

interface Todo {
    id: number;
    todo: string;
    completed: boolean
}

type Action = 
    | { type: "ADD_TODO"; payload: string} 
    | { type: "DELETE_TODO"; payload: number} 
    | { type: "TOGGLE_TODO"; payload: number};


function todoReducer(state: Todo[], action: Action): Todo[]{
    switch(action.type) {
        case "ADD_TODO":
            return [ 
                ...state,
                { id: Date.now(), todo: action.payload, completed: false }
            ]
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload)
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;
    }
}

export default function Parent() {
    const [inputValue, setInputValue] = useState('')
    const [todos, dispatch] = useReducer(todoReducer, [])

    const handleAdd = () => {
        if(inputValue) {
            dispatch({ type: "ADD_TODO", payload: inputValue})
            setInputValue('')
        }
    }

    const handleDelete = (id: number) => {
        dispatch({ type: "DELETE_TODO", payload: id})
    }

    const handleToggle = (id: number) => {
        dispatch({ type: "TOGGLE_TODO", payload: id})
    }

    return (
        <div>
            <h1>TO DO LIST</h1>
            <div className="input-container">
                <Child inputValue={inputValue} setInputValue={setInputValue} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {todos.map(({ id, todo, completed }) => (
                    <li
                        key={id}
                        className={completed ? "completed" : ""}
                        style={{
                            textDecoration: completed ? "line-through" : "none",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => handleToggle(id)}
                        />
                        {todo}
                        <button onClick={() => handleDelete(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}