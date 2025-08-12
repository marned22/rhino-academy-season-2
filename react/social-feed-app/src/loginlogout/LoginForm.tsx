import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { login } from "../core/features/userSlice";
import "../ux/styles/LoginForm.scss"
import { useGetUsersQuery } from "../core/features/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../core/store/store";

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
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="login-input"
                />
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    )
}