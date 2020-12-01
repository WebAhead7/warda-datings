import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper " style={{ padding: '0 10px' }}>
        <a href="#!" className="brand-logo">
          <Link to="/">Warda</Link>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <Link to="/posts">Posts</Link> */}
            <a href="#!">Posts</a>
          </li>
          <li>
            {/* <Link to="/myPosts">About</Link> */}
            <a href="#!">My Posts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
