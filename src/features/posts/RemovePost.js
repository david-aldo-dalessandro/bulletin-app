/* RemovePost.js
 * David D'Alessandro
 * March 24, 2024
 * Form component for removing a post
 */

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { useDispatch } from "react-redux";

import { deletePost } from "./postsSlice";

const RemovePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const remove = () => {
    try {
      dispatch(
        deletePost({
          id: postId,
        })
      ).unwrap();
      navigate("/");
    } catch (err) {
    } finally {
    }
  };
  if (!post) {
    return <div> No Post Found</div>;
  }

  return (
    <>
      <div>
        Are you sure you wish to delete: <br /> <b>{post.title} </b>
      </div>
      <button onClick={remove}>yes</button>{" "}
      <button onClick={() => navigate(-1)}>no</button>
    </>
  );
};

export default RemovePost;
