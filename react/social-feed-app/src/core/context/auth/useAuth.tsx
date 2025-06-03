import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error("use Auth must be used within AuthProvider");
    return ctx
}