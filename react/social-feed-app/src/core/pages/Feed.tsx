import { usePosts } from "../../hooks/usePosts";
import { FeedView } from "../../ux/pages/Feed.view";
import { Modal } from "../components/Modal/Modal";
import { withFilterable } from "../hoc/withFilterable";
import { useAuth } from "../context/auth/useAuth"; 

const FilterableFeedView = withFilterable(FeedView);

const Feed = () => {
  const { currentUser} = useAuth();
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