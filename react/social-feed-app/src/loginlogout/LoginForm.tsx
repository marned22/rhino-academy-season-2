import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../core/context/auth/useAuth";
import "../ux/styles/LoginForm.scss"

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const { login, chatUsers, currentUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const user = chatUsers.find(u => u.username === username.trim());
        if (user) {
            login(user.id);
            } else {
            alert("User not fount.")
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