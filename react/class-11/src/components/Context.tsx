import { createContext } from "react"

export const AuthContext = createContext<any>({
    username: '',
    setUsername: () => {}
})

export const ThemeContext = createContext<{
    bgColor: string,
    setBgColor: (color: string) => void,
}>({
    bgColor: "#fff",
    setBgColor: () => {}
})

export const OffContext = createContext<{
    off: boolean;
    setOff: React.Dispatch<React.SetStateAction<boolean>>,
}>({
    off: false,
    setOff: () => {},
})
