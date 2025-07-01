// import { useAuth } from "../core/context/auth/useAuth"
import { useDispatch } from "react-redux";
import { logout } from "../core/features/userSlice";
import { AppDispatch } from "../core/store/store";
import "../ux/styles/LogoutButton.scss"

export const LogoutButton = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <button className="logout-btn" onClick={handleLogout}>
            Logout
        </button>
    )
}