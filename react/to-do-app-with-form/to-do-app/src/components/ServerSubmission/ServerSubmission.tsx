import { useEffect, useState } from "react";
import "../../styles/forms.css"
import { useFormStatus } from "react-dom";



interface TodoItem {
    title: FormDataEntryValue | null;
    description: FormDataEntryValue | null;
    priority: FormDataEntryValue | null;
    dueDate: FormDataEntryValue | null;
    tags: FormDataEntryValue[];
    shownItem: boolean;
}

const mockDatabase: TodoItem[] = [];


const action = async (formData: FormData, updateTodos: (todos: TodoItem[]) => void) => {
    const title = formData.get("title");
    const description = formData.get("description");
    const priority = formData.get("priority")
    const dueDate = formData.get("dueDate")
    const tags = formData.getAll("tags")
    const shownItem = formData.get("showItem") === "on"

    await new Promise ((resolve) => setTimeout(resolve, 3000))

    console.log('Title ', title)
    console.log('Desctription ', description)
    console.log('Priority' , priority)
    console.log('Due Date: ', dueDate)
    console.log('Tags: ', tags)
    console.log('Shown item: ', shownItem)


    const newTodo: TodoItem = {
        title,
        description,
        priority,
        dueDate,
        tags,
        shownItem
    }

    mockDatabase.push(newTodo)

    console.log("Current Mock Database: ", mockDatabase)

    updateTodos([...mockDatabase])
};

const Submit = () => {
    const { pending } = useFormStatus();
    return(
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    )
}


const ServerSubmission = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000))
            setTodos([...mockDatabase])
            setLoading(false)
        }

        fetchData();
    }, [])

    return (
        <>
            <div>
                <h2>Client Submit</h2>
                <form 
                    action={(formData: FormData) => action(formData, setTodos)}
                >
                    <div>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Description:
                                <input
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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

export default ServerSubmission;
