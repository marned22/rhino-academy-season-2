import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Root } from "./core/pages/Root"
import NotificationsPage from "./core/pages/NotificationsPage"
import MessagesPage from "./core/pages/MessagesPage"
import ProfilePage from "./core/pages/ProfilePage"
import { Feed } from "./core/pages/Feed"
import DashboardPage from "./core/pages/DashboardPage"
import SettingsPage from "./core/pages/SettingsPage"
import AnalyticsPage from "./core/pages/AnalyticsPage"
import HelpCenterPage from "./core/pages/HelpCenterPage"
import BillingPage from "./core/pages/BillingPage"
import ActivityPage from "./core/pages/ActivityPage"
import TasksPage from "./core/pages/TasksPage"
import ReportsPage from "./core/pages/ReportsPage"
import IntegrationsPage from "./core/pages/IntegrationsPage"
import TeamPage from "./core/pages/TeamPage"
import SecurityPage from "./core/pages/SecurityPage"

function App(){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route index element={<Feed />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/notifications" element={<NotificationsPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/help-center" element={<HelpCenterPage />} />
                        <Route path="/billing" element={<BillingPage />} />
                        <Route path="/activity" element={<ActivityPage />} />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/reports" element={<ReportsPage />} />
                        <Route path="/integrations" element={<IntegrationsPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/security" element={<SecurityPage />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App