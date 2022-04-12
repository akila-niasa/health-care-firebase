import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {
  const[user]=useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
    return (
        <nav>
      <div className='logo-container'>
        <img src='' alt='' />
      </div>
      <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/allServices'
        >
          Services
        </NavLink>
      {
        user?<button onClick={logout} className='link'>Log Out</button>:
        <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to='/login'
      >
        Login
      </NavLink>
      }
      </div> 
        </nav>
    );
};

export default Navbar;