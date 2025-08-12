import { Tab, Tabs } from "@mui/material"
import FeedIcon from '@mui/icons-material/Feed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { CreatePostViewProps } from "../../../../core/components/CreatePost/CreatePost";
import styled from 'styled-components';

const CreatePostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CreatePostTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  min-height: 55px;
  justify-content: center;
  align-items: center;

  img,
  button {
    flex-shrink: 0;
  }

  .MuiButton-outlined {
    border-color: #7e5da1;
    color: #7e5da1;
    height: 100%;
  }

  .MuiFormControl-root {
    flex: 1;
  }
`;

const CreatePostBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;

  .MuiTabs-root {
    width: 100%;

    button {
      flex: 1;
    }
  }
`;

export const CreatePostView = ({ renderContent, value, handleTabChange }: CreatePostViewProps) => {
  return (
    <CreatePostWrapper>
      <CreatePostTopContainer>
        {renderContent()}
      </CreatePostTopContainer>
      <CreatePostBottomContainer>
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
      </CreatePostBottomContainer>
    </CreatePostWrapper>
  )
}