import { Post } from "../../../../core/components/Post/Post";
import { IPost } from "../../../../types/types";
import { useInfiniteScroll } from "../../../../hooks/useInfiniteScroll";

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
        height: "800px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "16px",
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