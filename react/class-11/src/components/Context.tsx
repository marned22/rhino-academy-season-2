import { createContext } from "react"

export const AuthContext = createContext<any>({
    username: '',
    setUsername: () => {}
})
