import React, { useContext, useRef} from 'react';
import { AuthContext } from '../components/Context';
import styles from '../style/Login.module.scss'


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
        <div className={styles.loginContainer}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.greeting}>Hello {username ? username : 'N/A'}</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="username" className={styles.label}>Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={inputRef}
                    defaultValue={username}
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.loginBtn}>Login</button>
            </form>
        </div>
    );
};

export default Login;