import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

export function ProtectedRoute ({ children }: { children: React.ReactNode}) {
    const loggedIn = useSelector((state: RootState) => state.username.loggedIn);

    if(!loggedIn) {
        return<Navigate to='/login' replace />
    }

    return<>{children}</>
}