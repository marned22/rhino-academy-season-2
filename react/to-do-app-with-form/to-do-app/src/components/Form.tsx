import { useState, useRef } from "react";
import "../styles/forms.css"

const Form = () => {
    const [title, setTitle] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const addTodoItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Title value:', title)
        console.log('Text area', inputRef?.current?.value || 'test')
    }

    return (
        <>
            <div>
                <h2>Client Submit</h2>
                <form onSubmit={addTodoItem}>
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
                                ref={inputRef}
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
                        <button type="submit" name="action" value="add">
                            Add Todo
                        </button>
                        <button type="submit" name="action" value="addPin">
                            Add & Pin
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
