/* PostsExcerpt.js
 * David D'Alessandro
 * March 23, 2024
 * Extracts some of the PostsLists component into its own component
 */

import React from "react";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import EditPostForm from "./EditPostForm";

import { Link } from "react-router-dom";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";

const PostsExcerpt = (props) => {
  const post = useSelector((state) => selectPostById(state, props.postId));
  return (
    <article>
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 75)}</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post </Link>
        <Link to={`post/edit/${post.id}`}> Edit Post </Link>
        <Link to={`post/delete/${post.id}`}> Delete Post</Link>
        <PostAuthor userId={post.userId}></PostAuthor>
        <TimeAgo timeStamp={post.date}></TimeAgo>
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
