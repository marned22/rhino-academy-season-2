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
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if(user.loggedIn) {
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
    
    const foundUser = chatUsers?.find(user => {
        return user.username === username.trim() && user.password === password.trim();
    });
    console.log("Found user:", foundUser); // Debug line
    
    if(foundUser) {
        dispatch(login({ username }));
    } else {
        alert("Invalid username or password")
    }
}

    return (
        <div className={styles["login-form-container"]}>
            <form className={styles["login-form"]} onSubmit={handleSubmit}>
                <h2 className={styles["login-title"]}>Login</h2>
            <div className={styles["login-label-group"]}>
                <label htmlFor="username" className={styles["login-label"]}>
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className={styles["login-input"]}
                    autoComplete="username"
                />
            </div>
            <div className={styles["login-label-group"]}>
                <label htmlFor="password" className={styles["login-label"]}>
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={styles["login-input"]}
                    autoComplete="current-password"
                />
            </div>
                <button type="submit" className={styles["login-btn"]}>Login</button>
            </form>
        </div>
    )
}