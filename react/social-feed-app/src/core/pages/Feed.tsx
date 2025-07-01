import { usePosts } from "../../hooks/usePosts";
import { FeedView } from "../../ux/pages/Feed.view";
import { Modal } from "../components/Modal/Modal";
import { withFilterable } from "../hoc/withFilterable";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useGetUsersQuery } from "../features/apiSlice";

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