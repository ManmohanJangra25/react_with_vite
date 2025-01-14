import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

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

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
