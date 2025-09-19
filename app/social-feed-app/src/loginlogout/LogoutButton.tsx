// import { useAuth } from "../core/context/auth/useAuth"
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { AppDispatch } from "../app/store";
import styles from "./LogoutButton.module.scss";

export const LogoutButton = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <button className={styles["logout-btn"]} onClick={handleLogout}>
            Logout
        </button>
    )
}