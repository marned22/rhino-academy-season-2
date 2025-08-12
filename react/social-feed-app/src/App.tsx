import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./ux/pages/Root.view";
import { routesConfig } from "./routes/routesConfig";
import { Provider } from "react-redux";
import { persistor, store } from "./core/store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: routesConfig,
  },
])

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App;