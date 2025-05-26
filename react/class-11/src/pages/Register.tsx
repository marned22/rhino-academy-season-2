import React, { useContext, useRef} from 'react';
import { AuthContext } from '../components/Context';


const Login = () => {
    const {username, setUsername} = useContext(AuthContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputRef.current) {
            setUsername(inputRef.current.value);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <p>Hello {username ? username : 'N/A'}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={inputRef}
                    defaultValue={username}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;