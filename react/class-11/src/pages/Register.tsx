import React, { useContext} from 'react';
import { AuthContext } from '../components/Context';


const Login = () => {
    const {username, setUsername} = useContext(AuthContext)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Username:', username);
        
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;