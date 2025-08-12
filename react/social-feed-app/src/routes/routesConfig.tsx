import { lazy } from "react";
import ErrorBoundary from "../core/components/ErrorBoundary/ErrorBoundary";
import { analyticsLoader } from "../core/pages/AnalyticsPage";


const DashboardPage = lazy(() => import("../core/pages/DashboardPage"));
const NotificationsPage = lazy(() => import("../core/pages/NotificationsPage"));
const MessagesPage = lazy(() => import("../core/pages/MessagesPage"));
const ProfilePage = lazy(() => import("../core/pages/ProfilePage"));
const SettingsPage = lazy(() => import("../core/pages/SettingsPage"));
const AnalyticsPage = lazy(() => import("../core/pages/AnalyticsPage"));
const HelpCenterPage = lazy(() => import("../core/pages/HelpCenterPage"));
const BillingPage = lazy(() => import("../core/pages/BillingPage"));
const ActivityPage = lazy(() => import("../core/pages/ActivityPage"));
const TasksPage = lazy(() => import("../core/pages/TasksPage"));
const ReportsPage = lazy(() => import("../core/pages/ReportsPage"));
const IntegrationsPage = lazy(() => import("../core/pages/IntegrationsPage"));
const TeamPage = lazy(() => import("../core/pages/TeamPage"));
const SecurityPage = lazy(() => import("../core/pages/SecurityPage"));
const Feed = lazy(() => import("../core/pages/Feed"));
const NotFoundPage = lazy(() => import("../core/pages/NotFoundPage"));

export const routesConfig = [
  {
    path: "/",
    element: <Feed />,
    errorElement: <ErrorBoundary />,
    metadata: { title: "Feed" },
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
    element: <ProfilePage />,
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