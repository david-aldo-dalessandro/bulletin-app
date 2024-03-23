/* TimeAgo.js
 * David D'Alessandro
 * March 22, 2024
 * Display the timestamp of post submission in component
 */

import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = (props) => {
  let timeAgo = "";
  if (props.timeStamp) {
    const date = parseISO(props.timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span title={props.timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
