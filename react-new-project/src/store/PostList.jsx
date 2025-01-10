import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((data) => data.id != action.payload.id);
  }
  if (action.type === "CREATE_POST") {
    newPostList = [action.payload.data, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = useCallback(
    (data) => {
      dispatchPostList({
        type: "CREATE_POST",
        payload: {
          data,
        },
      });
    },
    [dispatchPostList]
  );

  const deletePost = useCallback(
    (id) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          id,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Card Title",
//     body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     reactions: 10,
//     userId: "user-01",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Card Title 02",
//     body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     reactions: 100,
//     userId: "user-02",
//     tags: ["Some", "Quick", "Example", "Demo"],
//   },
// ];

export default PostListProvider;
