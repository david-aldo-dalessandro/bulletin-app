/* Header.js
 * David D'Alessandro
 * March 24, 2024
 * Header file to store nav options for app pages
 */

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1> My Redux Blog </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
