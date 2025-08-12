import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../core/components/Navigation/Navigation";
import { Sidebar } from "../../core/components/Sidebar/Sidebar";
import { UsersView } from "../views/components/Users/Users.view";
import { CATEGORIES } from "../../core/components/Categories/Categories";
import { CHAT_USERS } from "../../core/components/Users/Users";
import { ICategories, IChatUser } from "../../types/types";
import '../styles/RootLayout.scss'


export const RootLayout: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [chatUsers, setChatUsers] = useState<IChatUser[]>([]);

  useEffect(() => {
    setCategories(CATEGORIES);
    setChatUsers(CHAT_USERS);
  }, []);

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
            <Sidebar categories={categories} />
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