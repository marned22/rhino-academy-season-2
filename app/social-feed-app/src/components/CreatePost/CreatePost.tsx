import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { CreatePostView } from "./CreatePost.view";
import { useFormInput } from "../../hooks/useFormInput";
import styles from './CreatePost.module.scss';
import { CreatePostViewProps } from "../../types/types";


export const CreatePost = ({ addPost }: { addPost: (content: string) => void }) => {
  const [value, setValue] = useState<string>('post');
  const input = useFormInput('')

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleAddPost = () => {
    if(!input.isEmpty) {
      addPost(input.value)
      input.reset()
      console.log('Post added')
    }
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const renderContent = () => {
    switch (value) {
      case 'post':
        return (
          <>
            <img width={50} src="https://www.shareicon.net/data/512x512/2016/08/18/813775_man_512x512.png" alt="Avatar" />
            <TextField
              className={styles.textField}
              onChange={input.handleChange}
              id="outlined-basic"
              label=""
              variant="outlined"
              placeholder="What's on your mind?"
              value={input.value}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover': {
                    '& > fieldset': {
                      borderColor: '#7e5da1',
                    },
                  },
                  '&.Mui-focused': {
                    '& > fieldset': {
                      borderColor: '#7e5da1',
                    },
                  },
                },
              }}
            />
            <Button
              className={styles.addButton}
              variant="outlined"
              onClick={handleAddPost}
            >
              ADD POST
            </Button>
          </>
        );
      case 'story':
        return (
          <>
            <img width={50} src="https://www.shareicon.net/data/512x512/2016/08/18/813775_man_512x512.png" alt="Avatar" />
            <TextField
              className={styles.textField}
              id="outlined-basic"
              label=""
              variant="outlined"
              placeholder="Share your story"
              value={input.value}
              onChange={input.handleChange}
            />
            <Button
              className={styles.addButton}
              variant="outlined"
              onClick={() => { console.log('test') }}
            >
              SHARE
            </Button>
          </>
        );
      case 'media':
        return (
          <>
            <Button
              className={styles.addButton}
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  const createViewProps: CreatePostViewProps = {
    renderContent,
    handleTabChange,
    value,
  }

  return <CreatePostView {...createViewProps} />
};