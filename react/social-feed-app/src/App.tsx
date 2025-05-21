import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./ux/pages/Root.view";
import { routesConfig } from "./routes/routesConfig";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {routesConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;