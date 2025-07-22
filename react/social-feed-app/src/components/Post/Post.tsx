import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetUsersQuery } from "../../api/apiSlice";
import { PostProps } from "../../types/types";
import styles from "./Post.module.scss";

export const Post = ({ post, onDelete, onUpdate }: PostProps) => {
  const { data: chatUsers } = useGetUsersQuery();
  const user = chatUsers?.find((user) => user.id === post.userId);

  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        <img
          src={post.image}
          alt="User avatar"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <span className={styles.userName}>
            {user
              ? `${user.profile.firstName} ${user.profile.lastName}`
              : post.userId}
          </span>
          <span className={styles.postDate}>
            {new Date(post.date).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className={styles.postContent}>
        <p className={styles.contentText}>{post.content}</p>
      </div>

      <div className={styles.postActions}>
        <button
          className={`${styles.actionButton} ${styles.updateButton}`}
          onClick={onUpdate}
        >
          <EditIcon className={styles.buttonIcon} />
          UPDATE
        </button>
        <button
          className={`${styles.actionButton} ${styles.deleteButton}`}
          onClick={onDelete}
        >
          <DeleteIcon className={styles.buttonIcon} />
          DELETE
        </button>
      </div>
    </div>
  );
};