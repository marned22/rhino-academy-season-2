import { Navigation } from "../../components/Navigation/Navigation";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { UsersView } from "../../components/Users/Users.view";
import styles from "./RootLayout.module.scss";
import { useCategories } from "../../hooks/useCategories";
import { Outlet } from "react-router-dom";
import { useGetUsersQuery } from "../../api/apiSlice";


export const RootLayout: React.FC = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const { data: chatUsers } = useGetUsersQuery();

  return (
    <div>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <div className={styles["app-content-wrapper"]}>
        <div className={styles["app-content-left"]}>
          <div className="category-container">
            {categoriesLoading && <div>Loading categories...</div>}
            {categoriesError && <div>Error: {categoriesError}</div>}
            {!categoriesLoading && !categoriesError && (
              <Sidebar categories={categories} />
            )}
          </div>
        </div>
        <main className={styles["app-content-center"]}>
          <Outlet />
        </main>
        <div className={styles["app-content-right"]}>
          <UsersView chatUsers={chatUsers ?? []} />
        </div>
      </div>
    </div>
  );
};