import { useAuth } from "../core/context/auth/useAuth"
import "../ux/styles/LogoutButton.scss"

export const LogoutButton = () => {
    const { logout } = useAuth();
    return (
        <button className="logout-btn" onClick={logout}>
            Logout
        </button>
    )
}