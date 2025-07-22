import { lazy } from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { analyticsLoader } from "../pages/AnalyticsPage/AnalyticsPage";
import { ProtectedRoute } from "../pages/protectedroute/ProtectedRoute";
import { LoginForm } from "../loginlogout/LoginForm";


const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const NotificationsPage = lazy(() => import("../pages/NotificationsPage"));
const MessagesPage = lazy(() => import("../pages/MessagesPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const AnalyticsPage = lazy(() => import("../pages/AnalyticsPage/AnalyticsPage"));
const HelpCenterPage = lazy(() => import("../pages/HelpCenterPage"));
const BillingPage = lazy(() => import("../pages/BillingPage"));
const ActivityPage = lazy(() => import("../pages/ActivityPage"));
const TasksPage = lazy(() => import("../pages/TasksPage"));
const ReportsPage = lazy(() => import("../pages/ReportsPage"));
const IntegrationsPage = lazy(() => import("../pages/IntegrationsPage"));
const TeamPage = lazy(() => import("../pages/TeamPage"));
const SecurityPage = lazy(() => import("../pages/SecurityPage"));
const Feed = lazy(() => import("../pages/Feed"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const routesConfig = [
  {
    index: true,
    element: (
      <ProtectedRoute>
        <Feed />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    metadata: { title: "Feed" },
  },
  {
    path:"/login",
    element: <LoginForm />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Login"}
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Dashboard" },
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Notifications" },
  },
  {
    path: "/messages",
    element: <MessagesPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Messages" },
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    metadata: { title: "Profile" },
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Settings" },
  },
  {
    path: "/analytics",
    element: <AnalyticsPage />,
    loader: analyticsLoader,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Analytics" },
  },
  {
    path: "/help-center",
    element: <HelpCenterPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Help Center" },
  },
  {
    path: "/billing",
    element: <BillingPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Billing" },
  },
  {
    path: "/activity",
    element: <ActivityPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Activity" },
  },
  {
    path: "/tasks",
    element: <TasksPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Tasks" },
  },
  {
    path: "/reports",
    element: <ReportsPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Reports" },
  },
  {
    path: "/integrations",
    element: <IntegrationsPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Integrations" },
  },
  {
    path: "/team",
    element: <TeamPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Team" },
  },
  {
    path: "/security",
    element: <SecurityPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Security" },
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "404 Not Found" },
  },
];