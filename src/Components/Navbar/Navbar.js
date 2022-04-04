import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
          

            <h1 className='logo'>Pure<span className='orange'>PD</span></h1>
            <div >
                {/* Home */}
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'unactive')}
                    to="/home"
                >
                    HOME
                </NavLink>
                {/* Reviews  */}
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'unactive')}
                    to="/reviews"
                >
                    REVIEWS
                </NavLink>
                {/* DashBoard  */}
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'unactive')}
                    to="/dashborad"
                >
                    DASHBOARD
                </NavLink>
                {/* Blogs  */}
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'unactive')}
                    to="/blogs"
                >
                    BLOGS
                </NavLink>
                {/* About  */}
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'unactive')}
                    to="/about"
                >
                    ABOUT
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;