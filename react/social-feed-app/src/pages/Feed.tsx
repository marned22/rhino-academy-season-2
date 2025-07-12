import { Modal } from "../components/Modal/Modal";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../api/apiSlice";
import type { RootState } from "../app/store";
import { withFilterable } from "../hoc/withFilterable";
import { usePosts } from "../hooks/usePosts";
import { FeedView } from "./Feed.view";

const FilterableFeedView = withFilterable(FeedView);

const Feed = () => {
  const username = useSelector((state: RootState) => state.username.username);
  const { data: chatUsers }= useGetUsersQuery();
  const currentUser = chatUsers?.find(user => user.username === username);
  const {
    posts,
    addPost,
    handleDeleteClick,
    deletePost,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    handleUpdateClick,
    updatePost,
    isUpdateModalOpen,
    setIsUpdateModalOpen,
    updateContent,
  } = usePosts(currentUser);

  return (
    <>
      <FilterableFeedView

        posts={posts}
        addPost={addPost}
        deletePost={handleDeleteClick}
        updatePost={handleUpdateClick}
      />
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={deletePost}
        title="Confirm Delete"
        message="Are you sure you want to delete this post?"
      />
      <Modal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        isUpdateMode={true}
        initialContent={updateContent}
        onUpdate={updatePost}
        title="Update post"
      />
    </>
  );
};

export default Feed;