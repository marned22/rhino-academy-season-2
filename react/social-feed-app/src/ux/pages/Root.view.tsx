import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../core/components/Navigation/Navigation";
import { Sidebar } from "../../core/components/Sidebar/Sidebar";
import { UsersView } from "../views/components/Users/Users.view";
import { IChatUser } from "../../types/types";
import '../styles/RootLayout.scss'
import axios from "axios"
import { useCategories } from "../../hooks/useCategories";


export const RootLayout: React.FC = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const [chatUsers, setChatUsers] = useState<IChatUser[]>([]);

  useEffect(() =>{
    const fetchChatUsers = async () => {
      try {
        const response = await axios.get<IChatUser[]>('/chatUsers.json');
        setChatUsers(response.data);
      } catch (error) {
        setChatUsers([])
      }
    };
    
    fetchChatUsers();
  }, [])

  return (
    <div>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <div className="app-content-wrapper">
        <div className="app-content-left">
          <div className="category-container">
            {categoriesLoading && <div>Loading categories...</div>}
            {categoriesError && <div>Error: {categoriesError}</div>}
            {!categoriesLoading && !categoriesError && (
              <Sidebar categories={categories} />
            )}
          </div>
        </div>
        <main className="app-content-center">
          <Outlet />
        </main>
        <div className="app-content-right">
          <UsersView chatUsers={chatUsers} />
        </div>
      </div>
    </div>
  );
};