import { Tab, Tabs } from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import styles from './CreatePost.module.scss';
import { CreatePostViewProps } from "../../types/types";

export const CreatePostView = ({ renderContent, value, handleTabChange }: CreatePostViewProps) => {
  return (
    <div className={styles.createPostWrapper}>
      <div className={styles.createPostTopContainer}>
        {renderContent()}
      </div>
      <div className={styles.createPostBottomContainer}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="icon label tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#7e5da1',
            },
            '& .Mui-selected': {
              color: '#7e5da1',
            },
          }}
        >
          <Tab icon={<FeedIcon />} value='post' label="Post" iconPosition="start" />
          <Tab icon={<EmojiObjectsIcon />} value='story' label="Story" iconPosition="start" />
          <Tab icon={<PermMediaIcon />} value='media' label="Photo / Video" iconPosition="start" />
        </Tabs>
      </div>
    </div>
  )
}