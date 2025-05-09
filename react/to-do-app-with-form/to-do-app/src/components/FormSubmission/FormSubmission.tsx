import { useState } from "react";
import "../../styles/forms.css"



const action = (formData) => {
    const title = formData.get("title");
    const description = formData.get("description");
    console.log('Title', title)
    console.log('Desctription', description)
};

// const save = (formData: FormData) => {
//     const title: string | null = formData.get("title");
//     const description: string | null = formData.get("title");
// }



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
