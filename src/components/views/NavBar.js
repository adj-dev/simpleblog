import React from 'react';
import { Link } from 'react-router-dom';

import './views.css';

const NavBar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="branding">
          <Link to="/">Simple Blog</Link>
        </div>
        <div className="links">
          <div className="spacer">
            <Link to="/posts" className="posts">
              POSTS
            </Link>
          </div>
          <div className="spacer">
            <Link to="/posts/create" className="create">
              CREATE
            </Link>
          </div>
          <div className="spacer">
            <Link to="/about" className="create">
              ABOUT
            </Link>
          </div>
        </div>
      </nav>
      <div className="line" />
    </>
  );
};

export default NavBar;
