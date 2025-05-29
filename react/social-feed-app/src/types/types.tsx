import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ICategories {
    title: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap>;
}

interface IPost {
    username: string;
    date: number;
    image: string;
    content: string;
}

interface IChatUser {
    title: string;
    icon: string;
}

interface FeedViewProps {
    posts: IPost[];
    addPost: (content: string) => void;
    deletePost: (index: number) => void;
    updatePost: (index: number, content: string) => void;
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

export type { ICategories, IPost, IChatUser, Action, FeedViewProps, PostProps, SidebarProps, UsersViewProps, ModalProps, AnalyticsData}