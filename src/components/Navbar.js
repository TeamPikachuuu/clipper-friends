import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <ul>
      <li>
        <Link to='#!'>Profile</Link>
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
      <h1>
        <Link to='/'>
          <i className='fa-solid fa-scissors'></i> Clipper Friends
        </Link>
      </h1>
      {links}
    </nav>
  );
};

export default Navbar;
