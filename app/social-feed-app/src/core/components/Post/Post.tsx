import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PostProps } from "../../../types/types";

export const Post = ({ post, onDelete, onUpdate }: PostProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "700px",
        height: "auto",
        margin: "16px 0",
        padding: "16px",
        borderRadius: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#7e5da1",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", 
        gap: "16px", 
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={post.image}
            sx={{
              backgroundColor: "#fff",
              width: "48px",
              height: "48px",
            }}
          />
        }
        title={
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#fff",
            }}
          >
            {post.username}
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#e0e0e0",
            }}
          >
            {new Date(post.date).toLocaleDateString()}
          </Typography>
        }
        sx={{
          padding: 0, 
          alignItems: "flex-start", 
        }}
      />
      <CardContent
        sx={{
          fontSize: "1rem",
          color: "#fff",
          textAlign: "left",
          padding: 0,
        }}
      >
        <Typography>{post.content}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between", 
          gap: "16px", 
          width: "100%", 
        }}
      >
        <Button
          startIcon={<EditIcon />}
          onClick={onUpdate}
          sx={{
            fontSize: "1rem", 
            padding: "12px 24px",
            borderRadius: "8px",
            textTransform: "none",
            backgroundColor: "#fff",
            color: "#7e5da1",
            flex: "0 0 40%", 
            "&:hover": {
              backgroundColor: "#e0e0e0",
              color: "#7e5da1",
            },
          }}
        >
          Update
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          onClick={onDelete}
          sx={{
            fontSize: "1rem", 
            padding: "12px 24px", 
            borderRadius: "8px",
            textTransform: "none",
            backgroundColor: "#fff",
            color: "#7e5da1",
            flex: "0 0 40%", 
            "&:hover": {
              backgroundColor: "#d9534f",
            },
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
