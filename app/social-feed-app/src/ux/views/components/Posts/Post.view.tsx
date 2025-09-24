import { useEffect, useRef, useState } from "react";
import { Post } from "../../../../core/components/Post/Post";
import { IPost } from "../../../../types/types";

export const PostView = ({
  posts,
  deletePost,
  updatePost,
}: {
  posts: IPost[];
  deletePost: (index: number) => void;
  updatePost: (index: number, content: string) => void;
}) => {
  const [visibleCount, setVisibleCount] = useState(5); 
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMorePosts = () => {
      setVisibleCount((prev) => Math.min(prev + 5, posts.length)); 
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMorePosts();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [posts]);

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
      {posts.slice(0, visibleCount).map((post, index) => (
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