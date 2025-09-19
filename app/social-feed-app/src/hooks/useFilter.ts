import { useState } from "react";
import { IChatUser, IPost, UseFilteredPostsResult, FilterType } from "../types/types"

export const useFilterPosts = (posts: IPost[], currentUser?: IChatUser): UseFilteredPostsResult => {
    const [filter, setFilter] = useState<FilterType>("all");

    let filteredPosts = posts;
    if (filter === "mine" && currentUser) {
        filteredPosts = posts.filter(post => post.userId === currentUser.id);
    } else if (filter === "friends" && currentUser) {
        filteredPosts = posts.filter(post => currentUser.friends.includes(post.userId));
    }

    return { filteredPosts, filter, setFilter };
};