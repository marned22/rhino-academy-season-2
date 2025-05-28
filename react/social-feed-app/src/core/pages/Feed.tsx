import { useEffect, useReducer, useState } from "react";
import { FeedView } from "../../ux/pages/Feed.view";
import { FeedReducer } from "../Reducers/FeedReducer";
import { ICategories, IChatUser } from "../../types/types";
import { CATEGORIES } from "../components/Categories/Categories";
import { CHAT_USERS } from "../components/Users/Users";
import { POSTS } from "../components/Post/Posts";
import { Modal } from "../components/Modal/Modal";

export const Feed = () => {
  const [state, dispatch] = useReducer(FeedReducer, POSTS);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<number | null>(null);
  const [postToUpdate, setPostToUpdate] = useState<number | null>(null);
  const [updateContent, setUpdateContent] = useState<string>("");

  const addPost = (content: string) => {
    dispatch({
      type: "ADD",
      payload: {
        content,
        username: "DefaultUser",
        date: Date.now(),
        image: "default-image-url",
      },
    });
  };

  const handleDeleteClick = (index: number) => {
    setPostToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const deletePost = () => {
    if (postToDelete !== null) {
      dispatch({ type: "DELETE", payload: { id: postToDelete } });
      setPostToDelete(null);
    }
    setIsDeleteModalOpen(false);
  };

  const handleUpdateClick = (index: number, content: string) => {
    setPostToUpdate(index);
    setUpdateContent(content);
    setIsUpdateModalOpen(true);
  };

  const updatePost = (updateContent: string) => {
    if (postToUpdate !== null) {
      dispatch({
        type: "UPDATE",
        payload: {
          id: postToUpdate,
          updatedPost: { content: updateContent },
        },
      });
      setPostToUpdate(null);
    }
    setIsUpdateModalOpen(false);
  };

  return (
    <>
      <FeedView
        posts={state}
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