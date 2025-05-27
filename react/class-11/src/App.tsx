import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./components/RootLayout"
import Login from "./pages/Login"
import { AuthContext, OffContext, ThemeContext } from "./components/Context"
import { useState } from "react"
import BrowserInfo from "./pages/BrowserInfo"


function App() {
  const [username, setUsername] = useState('');
  const [bgColor, setBgColor] = useState('#fff')
  const [off, setOff] = useState(false)

  return (
    <ThemeContext.Provider value={{ bgColor, setBgColor}}>
      <OffContext.Provider value={{ off, setOff}}>
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
      </OffContext.Provider>
    </ThemeContext.Provider>
    
  )
}

export default App
