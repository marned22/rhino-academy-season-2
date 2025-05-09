import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import styles from './Sidebar.module.scss'
import { SidebarProps } from '../../../../types/types';
import { ListItemIcon, ListItemText } from '@mui/material';

export const SidebarView = ({ categories }: SidebarProps) => {
  return (
    <Box className={styles.sidebar}>
      <List>
        {categories.map((category) => (
          <ListItem key={category.title} disablePadding>
            <ListItemButton>
              <ListItemIcon className={styles.icon}>
                <category.icon />
              </ListItemIcon>
              <ListItemText primary={category.title} />
            </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Box>
  );
};