import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';

// import './Navigation.scss';
import styles from './Navigation.module.scss';

console.log(styles)

export const NavigationView = () => {
    return (
        <div className={styles['navigation-wrapper']}>
            <NotificationsIcon fontSize='large' />
            <ForumIcon fontSize='large' />
            <PersonIcon fontSize='large' />
        </div>
    )
}