import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { IPost } from "../../types/types";
import { Post } from "./Post";

export const PostView = ({
  posts,
  deletePost,
  updatePost,
}: {
  posts: IPost[];
  deletePost: (index: number) => void;
  updatePost: (index: number, content: string) => void;
}) => {
  const { containerRef, visibleItems } = useInfiniteScroll(posts, 5, 5);

  return (
    <div
      ref={containerRef}
      style={{
        height: "600px",
        overflowY: "auto",
        padding: "0",
        background: "transparent",
      }}
    >
      {visibleItems.map((post, index) => (
        <Post
          key={index}
          post={post}
          onDelete={() => deletePost(index)}
          onUpdate={() => updatePost(index, post.content)}
        />
      ))}
    </div>
  );
};