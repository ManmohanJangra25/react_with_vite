import { useContext, useRef } from "react";
import { PostList as PostListData } from "../store/PostList";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postReactions = useRef();
  const postHashtag = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    addPost({
      id: Date.now(),
      userId: userId.current.value,
      title: postTitle.current.value,
      body: postBody.current.value,
      reactions: postReactions.current.value,
      tags: postHashtag.current.value.split(" "),
    });

    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postHashtag.current.value = "";
  }

  return (
    <form className="m-auto w-50" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="postUserID" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="postUserID"
          placeholder="User ID"
          ref={userId}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          aria-describedby="PostTitle"
          placeholder="Enter Post Title"
          ref={postTitle}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Body
        </label>
        <textarea
          type="text"
          className="form-control"
          id="postBody"
          placeholder="Tell Me more about it"
          ref={postBody}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postReactions" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="postReactions"
          placeholder="Number Of Reactions"
          ref={postReactions}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postHashtags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="postHashtags"
          placeholder="Number Of Hashtags"
          ref={postHashtag}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
