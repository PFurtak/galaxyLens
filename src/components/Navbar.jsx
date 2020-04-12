import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar bg-light'>
        <h1>
          <Link to='/'>
            <i className='fas fa-satellite-dish'></i> Galaxy Lens
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <a href='https://api.nasa.gov/'>API Documentation</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
