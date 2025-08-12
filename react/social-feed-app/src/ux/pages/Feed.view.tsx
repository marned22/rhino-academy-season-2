import { CreatePost } from "../../core/components/CreatePost/CreatePost";
import { PostView } from "../views/components/Posts/Post.view";
import { FeedViewProps } from "../../types/types";

export const FeedView = ({ posts, addPost, deletePost, updatePost }: FeedViewProps) => {
    return (
        <>
            <CreatePost addPost={addPost} />
            <PostView posts={posts} deletePost={deletePost} updatePost={updatePost} />
        </>
    );
};