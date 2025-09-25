import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode, SyntheticEvent } from "react";

interface ICategories {
    title: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap>;
}

interface IPost {
    userId: string;
    username: string;
    visibility: boolean;
    likes: number;
    coments: number;
    date: number;
    image: string;
    content: string;
}

interface IChatUser {
    id: string;
    title: string;
    username: string;
    email: string;
    icon: string;
    profile: {
        firstName: string;
        lastName: string;
        age: number;
        bio?: string;
        loacation?: string;
        work?: string;
        education?: string;
    };
    images: {
        profile: string;
        cover: string;
    }
    friends: string[];
    createdAt: number
}

interface FeedViewProps {
    posts: IPost[];
    addPost: (content: string) => void;
    deletePost: (index: number) => void;
    updatePost: (index: number, content: string) => void;
    categories: ICategories[];
    chatUsers: IChatUser[];
}

interface PostProps {
    post: IPost;
    onDelete: () => void;
    onUpdate: () => void;
}

interface SidebarProps {
    categories: ICategories[]
}

interface UsersViewProps {
    chatUsers: IChatUser[]
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    message?: string;
    isUpdateMode?: boolean;
    initialContent?:string;
    onUpdate?:(updatedContent: string) => void;
}



type Action = 
  | { type: 'ADD'; payload: IPost }
  | { type: 'UPDATE'; payload: { id: number | string; updatedPost: Partial<IPost> } }
  | { type: 'DELETE'; payload: { id: number | string} };

type AnalyticsData = {
    stats: number[];
    updated: string;
}

interface AuthContextType{
    currentUser: IChatUser | null;
    login: (userId: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
    isFriend: (userId: string) => boolean;
    isOwnPost: (post: { userId: string }) => boolean;
    chatUsers: IChatUser[];
}

interface useInfiniteScrollResult<T> {
    containerRef: React.RefObject<HTMLDivElement | null>;
    visibleItems: T[];
}

interface WithFilterableProps {
  posts: IPost[];
}

type FilterType = "all" | "friends" | "mine";

interface UseFilteredPostsResult {
  filteredPosts: IPost[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

type FilterBarProps = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

interface CreatePostViewProps {
  renderContent: () => ReactNode;
  value: string;
  handleTabChange: (event: SyntheticEvent, newValue: string) => void;
}

export type { ICategories, IPost, IChatUser, Action, FeedViewProps, PostProps, SidebarProps, 
    UsersViewProps, ModalProps, AnalyticsData, AuthContextType, useInfiniteScrollResult, WithFilterableProps
    ,UseFilteredPostsResult, FilterType, FilterBarProps, CreatePostViewProps };
