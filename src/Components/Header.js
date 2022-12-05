import React from "react";
import "../Counter.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="main-header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {/* <li>Counter</li> */}
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
