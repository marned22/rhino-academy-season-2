import { useState } from "react";
import "../../styles/forms.css"



interface TodoItem {
    title: FormDataEntryValue | null;
    description: FormDataEntryValue | null;
    priority: FormDataEntryValue | null;
    dueDate: FormDataEntryValue | null;
    tags: FormDataEntryValue[];
    shownItem: boolean;
}

const mockDatabase: TodoItem[] = [];


const action = async (formData: FormData) => {
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

    mockDatabase.push({
        title,
        description,
        priority,
        dueDate,
        tags,
        shownItem
    })

    console.log("Current Mock Database: ", mockDatabase)
};


const FormSubmission = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <>
            <div>
                <h2>Client Submit</h2>
                <form action={action}>
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

export default FormSubmission;
