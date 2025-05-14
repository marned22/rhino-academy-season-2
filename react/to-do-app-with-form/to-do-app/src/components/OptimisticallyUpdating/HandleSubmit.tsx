import type { TodoItem } from "../../types/types";

interface SubmitHandlerProps {
    formData: FormData;
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    serverAction: (formData: FormData) => Promise<TodoItem[]>;
    isPin: boolean;
}

const SubmitHandler = async ({ formData, setTodos, serverAction, isPin }: SubmitHandlerProps) => {
    const newTodo: TodoItem = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        priority: formData.get("priority") as string,
        dueDate: formData.get("dueDate") as string,
        tags: formData.getAll("tags") as string[],
        shownItem: formData.get("shownItem") === "on",
    };

    setTodos((prevTodos) => (isPin ? [newTodo, ...prevTodos] : [...prevTodos, newTodo]));

    try {
        const updatedTodos = await serverAction(formData);
        setTodos(updatedTodos);
    } catch (error) {
        console.log("Failed to update the server:", error);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo !== newTodo));
    }
};

export default SubmitHandler;