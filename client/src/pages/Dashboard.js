import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleViewAlumniClick = () => {
    console.log('handleViewAlumniClick')  ;
    // Navigate to the AlumniTable page when the "View Alumni" button is clicked
    navigate('/AlumniTable');
  };

  return (
    <div style={{ display: 'flex' }}>
      <style>
        {`
          /* Style for the buttons */
          .dashboard-button {
            text-decoration: none;
            color: white;
            background-color: #004200;
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
            transition: background-color 0.3s ease-in-out; /* Add transition */
            position: relative;
          }

          /* Hover effect */
          .dashboard-button:hover {
            background-color: maroon; /* Change color on hover */
          }

          /* Tooltip style */
          .tooltip {
            visibility: hidden;
            width: 120px;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%; /* Position above the button */
            left: 50%;
            margin-left: -60px;
            opacity: 0;
            transition: opacity 0.3s;
          }

          /* Tooltip display on hover */
          .dashboard-button:hover .tooltip {
            visibility: visible;
            opacity: 1;
          }
        `}
      </style>

      <div style={{ flex: 1, marginLeft: '200px', padding: '20px' }}>
        <h1 style={{ color: 'maroon', fontSize: '1.8rem' }}>
          Welcome{' '}
          <span style={{ color: '#004200', fontSize: '1.8rem' }}>
            {user.fullName}
          </span>
        </h1>

        {/* Display navigation items as buttons with the defined class */}
        <div style={{ marginLeft:'280px',marginTop: '20px', display: 'flex', gap: '100px', width: '100%' }}>
          <Link to="/EventsPage" className="dashboard-button">
            Events List
            <span className="tooltip">Displays your events</span>
          </Link>
          {/* Use onClick to handle the navigation */}
          <div className="dashboard-button" onClick={handleViewAlumniClick}>
            View Alumni
            <span className="tooltip">Displays alumni</span>
          </div>
          <Link to="/EventForm" className="dashboard-button">
            Add Event
            <span className="tooltip">Create your own event</span>
          </Link>
        </div>

        {/* Other content */}
      </div>
    </div>
  );
};

export default Dashboard;
