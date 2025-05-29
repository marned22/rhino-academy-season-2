import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./ux/pages/Root.view";
import { routesConfig } from "./routes/routesConfig";
import { Suspense } from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: routesConfig,
  },
])

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;