import { useReducer, useState } from "react";
import { POSTS } from "../core/components/Post/Posts";
import { IPost } from "../types/types";
import { FeedReducer } from "../core/reducers/FeedReducer";

export function usePosts(initialPosts: IPost[] = POSTS) {
     const [state, dispatch] = useReducer(FeedReducer, initialPosts);
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

    return {
        posts: state,
        addPost,
        handleDeleteClick,
        deletePost,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        postToDelete,
        handleUpdateClick,
        updatePost,
        isUpdateModalOpen,
        setIsUpdateModalOpen,
        postToUpdate,
        updateContent,
        setUpdateContent,
    }
}