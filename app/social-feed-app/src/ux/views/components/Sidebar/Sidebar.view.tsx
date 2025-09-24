import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import styles from './Sidebar.module.scss'
import { SidebarProps } from '../../types/types';
import { ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const SidebarView = ({ categories }: SidebarProps) => {
  return (
    <Box className={styles.sidebar}>
      <List>
        {categories.map((category) => (
          <ListItem key={category.title} disablePadding>
            <ListItemButton>
              <NavLink
                to={category.link}
                className={({ isActive }: { isActive: boolean}) =>
                  isActive ? styles.active : ''
                }
              >
                <ListItemIcon className={styles.icon}>
                <category.icon />
                </ListItemIcon>
                <ListItemText primary={category.title} />
              </NavLink>
            </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Box>
  );
};