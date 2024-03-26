/* EditPostForm.js
 * David D'Alessandro
 * March 24, 2024
 * Form component for editing a post
 */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, editPost } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";

import { selectAllUsers } from "../users/usersSlice";

const EditPostForm = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === post?.userId);

  const [editTitle, setEditTitle] = useState(post?.title || "");
  const [editContent, setEditContent] = useState(post?.body || "");
  const [userId, setUserId] = useState(post?.userId || "");
  const [editRequestStatus, setEditRequestStatus] = useState("idle");

  const onTitleChanged = (e) => setEditTitle(e.target.value);
  const onContentChanged = (e) => setEditContent(e.target.value);

  const onEditPostClicked = () => {
    if ([editContent, editTitle].every(Boolean)) {
      try {
        setEditRequestStatus("pending");
        dispatch(
          editPost({
            title: editTitle,
            body: editContent,
            id: postId,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
        setEditTitle("");
        setEditContent("");
        navigate("/");
      } catch (err) {
        console.log(err);
      } finally {
        setEditRequestStatus("idle");
      }
    }
  };

  //this took care of not being able to refresh the page once 'Edit Post' was selected
  useEffect(() => {
    if (!post) {
      setEditRequestStatus("pending");
    } else {
      setEditRequestStatus("idle");
      setEditTitle(post.title);
      setEditContent(post.body);
    }
  }, [post]);

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={editTitle}
          onChange={onTitleChanged}
        />
        <br />
        <label htmlFor="postAuthor">Author: {author?.name}</label>

        <br />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={editContent}
          onChange={onContentChanged}
        />
        <br />
        <button
          type="button"
          onClick={onEditPostClicked}
          disabled={![editContent, editTitle].every(Boolean)}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
