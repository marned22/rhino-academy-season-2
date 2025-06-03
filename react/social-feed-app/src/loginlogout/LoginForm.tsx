import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../core/context/auth/useAuth";
import "../ux/styles/LoginForm.scss"

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            login(username.trim())
        }
        navigate("/")
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