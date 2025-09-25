import type { TodoItem } from "../../types/types";
import { mockDatabase } from "./mockData";

export const serverAction = async (formData: FormData): Promise<TodoItem[]> => {
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

    return[...mockDatabase]
};