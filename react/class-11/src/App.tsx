import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./components/RootLayout"
import Login from "./pages/Login"
import { AuthContext, ThemeContext } from "./components/Context"
import { useState } from "react"
import BrowserInfo from "./pages/BrowserInfo"


function App() {
  const [username, setUsername] = useState('');
  const [bgColor, setBgColor] = useState('#fff')

  return (
    <ThemeContext.Provider value={{ bgColor, setBgColor}}>
      <BrowserRouter>
        <div style={{ background: bgColor }}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<AuthContext.Provider value={{username,  setUsername}}><Login /></AuthContext.Provider>} />
              <Route path="/browserinfo" element={<BrowserInfo />} />
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
    </ThemeContext.Provider>
    
  )
}

export default App
