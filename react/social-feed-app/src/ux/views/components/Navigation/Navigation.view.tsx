import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { LogoutButton } from '../../../../loginlogout/LogoutButton';
import { useSelector } from 'react-redux';

export const NavigationView = () => {
    const username = useSelector((state: any) => state.username);
    return (
        <div className={styles['navigation-wrapper']}>
            <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? styles["active-link"] : undefined
                }
            >
                <HomeIcon fontSize='large' />
            </NavLink>
            <NavLink
                to="/notifications"
                className={({ isActive }) => 
                    isActive ? styles["active-link"] : undefined
                }
            >
                <NotificationsIcon fontSize='large' />
            </NavLink>
            <NavLink
                to="/messages"
                className={({ isActive }) => 
                    isActive ? styles["active-link"] : undefined
                }
            >
                <ForumIcon fontSize='large' />
            </NavLink>
            <NavLink
                to="/profile"
                className={({ isActive }) => 
                    isActive ? styles["active-link"] : undefined
                }
            >
                <PersonIcon fontSize='large' />
            </NavLink>
            {username && <LogoutButton />}
        </div>
    )
}