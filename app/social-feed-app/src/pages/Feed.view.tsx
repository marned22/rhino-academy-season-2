
import { CreatePost } from "../components/CreatePost/CreatePost";
import { PostView } from "../components/Post/Post.view";
import { FeedViewProps } from "../types/types";

export const FeedView = ({ posts, addPost, deletePost, updatePost }: FeedViewProps) => {
    return (
        <>
            <CreatePost addPost={addPost} />
            <PostView posts={posts} deletePost={deletePost} updatePost={updatePost} />
        </>
    );
};