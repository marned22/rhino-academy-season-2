import { Action, IPost } from "../types/types";

export const FeedReducer = (state: IPost[], action: Action) => {
    switch (action.type) {
        case "ADD":
            return [
                action.payload,
                ...state
            ]
        case "UPDATE":
            return state.map((post, index) => {
            if (index === action.payload.id) {
                return { ...post, ...action.payload.updatedPost };
            } else {
                return post;
            }
            });
        case "DELETE":
            return state.filter((_, index) => index !== action.payload.id);
    }
}