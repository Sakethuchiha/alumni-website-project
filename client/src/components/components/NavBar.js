// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPeople, BsTrash, BsPerson, BsAward ,BsBoxArrowRight} from 'react-icons/bs';
import './NavBar.css';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`navbar ${isNavOpen ? 'open' : 'closed'}`}>
      <div className="nav-header">
        {/* <div className="nav-toggle" onClick={toggleNav}>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
        </div> */}
      </div>
      <div className="nav-items">
        {/* <Link to="/AddGallery" className="nav-item" onClick={toggleNav}>
          <BsFillGridFill className="nav-icon" />
          Add Gallery
        </Link>
        <Link to="/GalleryList" className="nav-item" onClick={toggleNav}>
          <BsFillGridFill className="nav-icon" />
          Gallery List
        </Link> */}
        {/* <Link to="/add-event" className="nav-item" onClick={toggleNav}>
          <BsCalendar className="nav-icon" />
          Add Event
        </Link> */}
        <Link to="/AdminPanel" className="nav-item" onClick={toggleNav}>
          <BsPeople className="nav-icon" />
          Verify Candidates
        </Link>
        <Link to="/DeleteEvent" className="nav-item" onClick={toggleNav}>
        <BsTrash className="nav-icon" />
        Delete Event
      </Link>
      <Link to="/Users" className="nav-item" onClick={toggleNav}>
        <BsPerson className="nav-icon" />
        Users
      </Link>
      <Link to="/TopAlumni" className="nav-item" onClick={toggleNav}>
        <BsAward className="nav-icon" />
        Top Alumni
      </Link>
      </div>
      <div className="nav-footer" >
        <Link to="/AdminLoginPage" className="nav-item" id="foot" onClick={toggleNav}>
          <BsBoxArrowRight className="nav-icon"  />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
