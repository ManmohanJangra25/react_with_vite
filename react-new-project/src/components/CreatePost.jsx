import { PostList as PostListData } from "../store/PostList";
import { useContext } from "react";
import { Form } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="m-auto w-50">
      <div className="mb-3">
        <label htmlFor="postUserID" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="postUserID"
          placeholder="User ID"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const CreatePostAction = (data) => {
  const formData = data.request.formData();
  const postData = Object.fromEntries(formData);
  const { addPost } = useContext(PostListData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  return addPost({
    id: Date.now(),
    userId: postData.userId,
    title: postData.title,
    body: postData.body,
    reactions: postData.reactions,
    tags: postData.tags,
  });
};

export default CreatePost;
