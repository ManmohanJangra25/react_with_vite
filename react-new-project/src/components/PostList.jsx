import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostList";

const PostList = () => {
  const { postList, addPost } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.posts.map((post) => {
          addPost({
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body,
            reactions: post.reactions,
            tags: post.tags,
          });
        });
      });
  }, []);

  return (
    <div className="d-flex gap-3 flex-wrap mt-3 ms-3">
      {postList.length > 0 ? (
        postList.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center w-100">
          <h2 className="text-center w-100">No Data Found</h2>
        </div>
      )}
    </div>
  );
};

export default PostList;
