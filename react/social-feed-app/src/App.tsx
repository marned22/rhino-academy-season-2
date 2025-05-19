import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Root } from "./core/pages/Root"
import NotificationsPage from "./core/pages/NotificationsPage"
import MessagesPage from "./core/pages/MessagesPage"
import ProfilePage from "./core/pages/ProfilePage"
import { Feed } from "./core/pages/Feed"

function App(){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route index element={<Feed />} />
                        <Route path="/notifications" element={<NotificationsPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App