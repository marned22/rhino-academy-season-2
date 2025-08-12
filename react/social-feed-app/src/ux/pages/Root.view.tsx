import { Navigation } from "../../core/components/Navigation/Navigation";
import { Sidebar } from "../../core/components/Sidebar/Sidebar";
import { UsersView } from "../views/components/Users/Users.view";
import '../styles/RootLayout.scss'
import { useCategories } from "../../hooks/useCategories";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../core/context/auth/AuthContext";
import { useContext } from "react";



export const RootLayout: React.FC = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const auth = useContext(AuthContext) 

  const chatUsers = auth?.chatUsers || [];

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