import { useEffect, useState, ReactNode } from "react"
import { AuthContext } from "./AuthContext";
import { IChatUser } from "../../../types/types";
import axios from 'axios';


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [chatUsers, setChatUsers] = useState<IChatUser[]>([]);
    const [currentUser, setCurrentUser] = useState<IChatUser | null>(null);

    useEffect(() =>{
        const fetchChatUsers = async () => {
          try {
            const response = await axios.get<IChatUser[]>('/chatUsers.json');
            setChatUsers(response.data);
          } catch (error) {
            setChatUsers([])
            setCurrentUser(null);
          }
        };
        
        fetchChatUsers();
      }, [])

    
    const login = (userId: string) => {
      const user = chatUsers.find(user => user.id === userId)
      setCurrentUser(user || null)
    }
    const logout = () => setCurrentUser(null);

    const isFriend = (userId: string) => {
        if (!currentUser) return false;
        return currentUser.friends.includes(userId);
    }

    const isOwnPost = (post: { userId: string }) => {
        if (!currentUser) return false;
        return post.userId === currentUser.id;
    }

    const isAuthenticated = currentUser !== null;

    return (
        <AuthContext.Provider value={{ 
            currentUser, 
            login, 
            logout,
            isAuthenticated,
            isFriend,
            isOwnPost,
            chatUsers
        }}>
            {children}
        </AuthContext.Provider>
    )
}