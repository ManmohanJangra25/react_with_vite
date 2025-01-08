import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosHeartDislike } from "react-icons/io";
import { PostList as PostListData } from "../store/PostList";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark delete_badge"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <h5 className="card-title position-relative d-inline pe-5">
          {post.title}
        </h5>
        <p className="card-text">{post.body}</p>
        <h5>
          {post.userId}
          <span className="badge rounded-pill bg-danger ms-2">
            <FaHeart /> {post.reactions.likes}
          </span>
          <span className="badge rounded-pill bg-dark ms-2">
            <IoIosHeartDislike /> {post.reactions.dislikes}
          </span>
        </h5>
        <ul className="d-flex">
          {post.tags.map((e) => {
            return (
              <span className="badge text-bg-primary me-2" key={e}>
                #{e}
              </span>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Post;
