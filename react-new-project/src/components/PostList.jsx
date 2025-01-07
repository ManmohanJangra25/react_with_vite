import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostList";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <div className="d-flex gap-3 flex-wrap mt-3 ms-3">
      {postList.length > 0 ? (
        postList.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })
      ) : (
        <h2 className="text-center w-100">No Data Found</h2>
      )}
    </div>
  );
};

export default PostList;
