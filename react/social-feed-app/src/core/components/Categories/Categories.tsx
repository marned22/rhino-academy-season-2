import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HelpIcon from '@mui/icons-material/Help';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CelebrationIcon from '@mui/icons-material/Celebration';
import TaskIcon from '@mui/icons-material/Task';
import ReportIcon from '@mui/icons-material/Report';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PeopleIcon from '@mui/icons-material/People';
import LockIcon from '@mui/icons-material/Lock';
import { ICategories } from '../../../types/types';

export const CATEGORIES: ICategories[] = [
    {
        "title": "Dashboard",
        "link": "/",
        "icon": HomeIcon
    },
    {
        "title": "Profile",
        "link": "/profile",
        "icon": PersonIcon
    },
    {
        "title": "Settings",
        "link": "/settings",
        "icon": SettingsIcon
    },
    {
        "title": "Notifications",
        "link": "/notifications",
        "icon": NotificationsIcon
    },
    {
        "title": "Messages",
        "link": "/messages",
        "icon": MessageIcon
    },
    {
        "title": "Analytics",
        "link": "/analytics",
        "icon": AnalyticsIcon
    },
    {
        "title": "Help Center",
        "link": "/help-center",
        "icon": HelpIcon
    },
    {
        "title": "Billing",
        "link": "/billing",
        "icon": CreditCardIcon
    },
    {
        "title": "Activity",
        "link": "/activity",
        "icon": CelebrationIcon
    },
    {
        "title": "Tasks",
        "link": "/tasks",
        "icon": TaskIcon
    },
    {
        "title": "Reports",
        "link": "/reports",
        "icon": ReportIcon
    },
    {
        "title": "Integrations",
        "link": "/integrations",
        "icon": ElectricalServicesIcon
    },
    {
        "title": "Team",
        "link": "/team",
        "icon": PeopleIcon
    },
    {
        "title": "Security",
        "link": "/security",
        "icon": LockIcon
    }
];