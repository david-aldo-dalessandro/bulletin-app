/* PostsExcerpt.js
 * David D'Alessandro
 * March 23, 2024
 * Extracts some of the PostsLists component into its own component
 */

import React from "react";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";

const PostsExcerpt = (props) => {
  return (
    <article>
      <h3>{props.post.title}</h3>
      <p className="excerpt">{props.post.body.substring(0, 75)}</p>
      <p className="postCredit">
        <Link to={`post/${props.post.id}`}>View Post</Link>
        <PostAuthor userId={props.post.userId}></PostAuthor>
        <TimeAgo timeStamp={props.post.date}></TimeAgo>
      </p>
      <ReactionButtons post={props.post} />
    </article>
  );
};

export default PostsExcerpt;
