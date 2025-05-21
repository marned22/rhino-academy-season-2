import DashboardPage from "../core/pages/DashboardPage";
import NotificationsPage from "../core/pages/NotificationsPage";
import MessagesPage from "../core/pages/MessagesPage";
import ProfilePage from "../core/pages/ProfilePage";
import SettingsPage from "../core/pages/SettingsPage";
import AnalyticsPage from "../core/pages/AnalyticsPage";
import HelpCenterPage from "../core/pages/HelpCenterPage";
import BillingPage from "../core/pages/BillingPage";
import ActivityPage from "../core/pages/ActivityPage";
import TasksPage from "../core/pages/TasksPage";
import ReportsPage from "../core/pages/ReportsPage";
import IntegrationsPage from "../core/pages/IntegrationsPage";
import TeamPage from "../core/pages/TeamPage";
import SecurityPage from "../core/pages/SecurityPage";
import { Feed } from "../core/pages/Feed";

export const routesConfig = [
  {
    path: "/",
    element: <Feed />,
    metadata: { title: "Feed" },
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    metadata: { title: "Dashboard" },
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
    metadata: { title: "Notifications" },
  },
  {
    path: "/messages",
    element: <MessagesPage />,
    metadata: { title: "Messages" },
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    metadata: { title: "Profile" },
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    metadata: { title: "Settings" },
  },
  {
    path: "/analytics",
    element: <AnalyticsPage />,
    metadata: { title: "Analytics" },
  },
  {
    path: "/help-center",
    element: <HelpCenterPage />,
    metadata: { title: "Help Center" },
  },
  {
    path: "/billing",
    element: <BillingPage />,
    metadata: { title: "Billing" },
  },
  {
    path: "/activity",
    element: <ActivityPage />,
    metadata: { title: "Activity" },
  },
  {
    path: "/tasks",
    element: <TasksPage />,
    metadata: { title: "Tasks" },
  },
  {
    path: "/reports",
    element: <ReportsPage />,
    metadata: { title: "Reports" },
  },
  {
    path: "/integrations",
    element: <IntegrationsPage />,
    metadata: { title: "Integrations" },
  },
  {
    path: "/team",
    element: <TeamPage />,
    metadata: { title: "Team" },
  },
  {
    path: "/security",
    element: <SecurityPage />,
    metadata: { title: "Security" },
  },
];