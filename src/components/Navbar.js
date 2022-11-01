import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  const links = (
    <ul>
      <li>
        <p>Profile</p>
      </li>
      <li>
        <p>Register</p>
      </li>
      <li>
        <p>Login</p>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>Clipper Friends</h1>
      {links}
    </nav>
  );
};

export default navbar;
