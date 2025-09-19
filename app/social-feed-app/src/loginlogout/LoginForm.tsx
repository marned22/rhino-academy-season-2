import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { login } from "../features/userSlice";
import styles from './LoginForm.module.scss'
import { useGetUsersQuery } from "../api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";

export const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.username);
    const [username, setUsername] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if(username) {
            navigate("/");
        }
    }, [user.loggedIn, navigate]);

    const { data: chatUsers, isLoading } = useGetUsersQuery(); 
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(isLoading) {
            console.log("Loading users, please wait...");
            return;
        }
        if(chatUsers && chatUsers.some(((user: any) => user.username === username))) {
            dispatch(login({ username }));
        } else {
            alert("User not fount")
        }

    }

    return (
        <div className={styles["login-form-container"]}>
            <form className={styles["login-form"]} onSubmit={handleSubmit}>
                <h2 className={styles["login-title"]}>Login</h2>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className={styles["login-input"]}
                />
                <button type="submit" className={styles["login-btn"]}>Login</button>
            </form>
        </div>
    )
}