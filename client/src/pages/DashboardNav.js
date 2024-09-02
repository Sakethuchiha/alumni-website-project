// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillGridFill, BsCalendar, BsPeople, BsBoxArrowRight } from 'react-icons/bs';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const DashboardNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (

   
    <div
      style={{
        width: '15rem', // Set the width to the same as nav items
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ECF4D6', // Set your preferred light color
        height: '150vh',
      }}
    >
 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ... your existing JSX ... */}
        <div
          style={{
            
            display: 'flex',
            flexDirection: 'column',
            gap: '10px', // Adjust the gap as needed
          }}
        >
          <Link
            to="/EventsPage"
            style={{
              textDecoration: 'none',
              color: "#004200", // Set your preferred text color
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={toggleNav}
          >
            <BsCalendar style={{ marginRight: '8px' }} />
            Events List
          </Link>
          <Link
            to="#"
            style={{
             
              color: "#004200", // Set your preferred text color
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={toggleNav}
          >
            <BsFillGridFill style={{ marginRight: '8px' }} />
            View-Alumni
          </Link>
          <Link
            to="/EventForm"
            style={{
              textDecoration: 'none',
              color: "#004200", // Set your preferred text color
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={toggleNav}
          >
            <BsCalendar style={{ marginRight: '8px' }} />
            Add Event
          </Link>
        
        </div>
        {/* ... your existing JSX ... */}
      </div>
      <div
        style={{
          marginTop: 'auto', // Push the footer to the bottom
        }}
      >
        <Link
          to="/logout"
          style={{
            textDecoration: 'none',
            color: '#333', // Set your preferred text color
            display: 'flex',
            alignItems: 'center',
          }}
          id="foot"
          onClick={logout}
        >
          <BsBoxArrowRight style={{ marginRight: '8px' }} />
          Logout
        </Link>
      </div>
    </div>
    
  );
};

export default DashboardNav;
