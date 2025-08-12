import { Navigation } from "../../core/components/Navigation/Navigation";
import { CreatePost } from "../../core/components/CreatePost/CreatePost";
import { Sidebar } from "../../core/components/Sidebar/Sidebar";
import { PostView } from "../views/components/Posts/Post.view";
import './Feed.scss';
import { FeedViewProps } from "../../types/types";
import { UsersView } from "../views/components/Users/Users.view";

export const FeedView = ({ posts, addPost, deletePost, updatePost, categories, chatUsers }: FeedViewProps) => {
    return (
        <div className="feed-wrapper">
            <Navigation />
            <div className='feed-content-container'>
                <div className='feed-content-left'>
                    <div className='category-containter'>
                        <Sidebar categories={categories} />
                    </div>
                </div>
                <div className='feed-content-center'>
                    <CreatePost addPost={addPost} />
                    <PostView posts={posts} deletePost={deletePost} updatePost={updatePost} />
                </div>
                <div className='feed-content-right'>
                    <UsersView chatUsers={chatUsers} />
                </div>
            </div>
        </div>
    );
};