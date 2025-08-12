import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./ux/pages/Root.view";
import { routesConfig } from "./routes/routesConfig";
import { Suspense } from "react";
import { AuthProvider } from "./core/context/auth/AuthProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: routesConfig,
  },
])

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  )
}

export default App;