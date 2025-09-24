import React, { useContext, useRef} from 'react';
import { AuthContext, OffContext } from '../components/Context';
import styles from '../styles/Login.module.scss'


const Login = () => {
    const {username, setUsername} = useContext(AuthContext)
    const { off } = useContext(OffContext)
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
                    disabled={off}
                />
                <button type="submit" className={styles.loginBtn} disabled  ={off}>Login</button>
            </form>
        </div>
    );
};

export default Login;