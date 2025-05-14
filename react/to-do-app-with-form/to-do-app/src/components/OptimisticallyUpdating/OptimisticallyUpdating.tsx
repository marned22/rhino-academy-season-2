import { useEffect, useState } from "react";
import "../../styles/forms.css"
import { useFormStatus } from "react-dom";
import { serverAction } from "./ServerAction";
import { mockDatabase } from "./mockData";
import type { TodoItem } from "../../types/types";

const Submit = () => {
    const { pending } = useFormStatus();
    return(
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    )
}


const OptimisticallyUpdating = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        const newTodo: TodoItem = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            priority: formData.get("priority") as string,
            dueDate: formData.get("dueDate") as string,
            tags: formData.getAll("tags") as string[],
            shownItem: formData.get("showItem") === "on",
        }
        
        setTodos((prevTodos) => [...prevTodos, newTodo])

        try {
            const updatedTodos = await serverAction(formData)
            setTodos(updatedTodos)
        } catch(error){
            console.log("Failed to update the server:", error)
            setTodos((prevTodos) => prevTodos.filter((todo) => todo !== newTodo))
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 5000))
            setTodos([...mockDatabase])
            setLoading(false)
        }

        fetchData();
    }, [])

    return (
        <>
            <div>
                <h2>Server Submit</h2>
                <form 
                    onSubmit={async (e) => {
                        e.preventDefault()
                        const formData = new FormData(e.currentTarget);
                        await handleSubmit(formData)
                    }}
                >
                    <div>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Description:
                                <input
                                type="text"
                                name="description"
                                />
                        </label>
                    </div>

                    <div>
                        <label>
                            Priority:
                            <select name="priority">
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Due Date:
                            <input type="date" name="dueDate" />
                        </label>
                    </div>

                    <div>
                        <label>
                            Tags:
                            <select name="tags" multiple>
                                <option value="Work">Work</option>
                                <option value="Personal">Personal</option>
                                <option value="Urgent">Urgent</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Shown item:
                            <input type="checkbox" name="shownItem" />
                        </label>
                    </div>

                    
                    <div className="buttons">
                        <Submit />
                    </div>
                </form>
            </div>


            <div>
                <h2>Todo List</h2>
                {loading ? (
                    <div className="spinner">Loading...</div>
                ): (
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                <strong>Title: </strong> {typeof todo.title === "string" ? todo.title : "No Title"} <br />
                                <strong>Description: </strong> {typeof todo.description === "string" ? todo.description : "No Description"} <br />
                                <strong>Priority: </strong> {typeof todo.priority === "string" ? todo.priority : "No Priority"} <br />
                                <strong>Due Date: </strong> {typeof todo.dueDate === "string" ? todo.dueDate : "No Due Date"} <br />
                                <strong>Tags: </strong> {todo.tags.length > 0 ? todo.tags.join(", ") : "No Tags"} <br />
                                <strong>Shown Item: </strong> {todo.shownItem ? "Yes" : "No"}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default OptimisticallyUpdating;
