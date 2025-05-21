import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./components/RootLayout"
import Login from "./pages/Register"
import { AuthContext } from "./components/Context"
import { useState } from "react"


function App() {
    const [username, setUsername] = useState('');
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />}/>
            
            <Route path="/register" element={<AuthContext.Provider value={{username,  setUsername}}><Login /></AuthContext.Provider>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
