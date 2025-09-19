import { useEffect, useState } from 'react';
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
import axios from 'axios';
import { ICategories } from '../types/types';

const ICONS: Record<string, React.ElementType> = {
  HomeIcon,
  PersonIcon,
  SettingsIcon,
  NotificationsIcon,
  MessageIcon,
  AnalyticsIcon,
  HelpIcon,
  CreditCardIcon,
  CelebrationIcon,
  TaskIcon,
  ReportIcon,
  ElectricalServicesIcon,
  PeopleIcon,
  LockIcon,
};

export function useCategories() {
    const [categories, setCategories] = useState<ICategories[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true
        setLoading(true);
        setError(null);

        const timer = setTimeout(async () => {
            try {
                const res = await axios.get<ICategories[]>('/categories.json')
                const data = res.data;
                const mapped = data.map((cat: any) => ({
                    ...cat,
                    icon: ICONS[cat.icon] || HomeIcon,
                }));
                if(isMounted) {
                    setCategories(mapped);
                    setLoading(false)
                }
            } catch (err: any) {
                if (isMounted) {
                    setError(err.message || 'Unknown error');
                    setLoading(false);
                }
            }
        }, 2000);

        return () => {
            isMounted = false;
            clearTimeout(timer)
        }
    }, [])

    return { categories, loading, error}
}