/* PostAuthor.js
 * David D'Alessandro
 * March 22, 2024
 * Display the author in component
 */

import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = (props) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === props.userId);

  return <span> by {author ? author.name : "Unknown"} </span>;
};

export default PostAuthor;
