import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";

export function ProtectedRoute ({ children }: { children: React.ReactNode}) {
    const { currentUser } = useAuth();

    if(!currentUser){
        return<Navigate to='/login' replace />
    }

    return<>{children}</>
}