// AlumniTable.js
import React, { useState, useEffect } from 'react';
import DataTable from './DataTable'; // Make sure to adjust the path based on your file structure
import Dashboard from './Dashboard';
const AlumniTable = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    // Fetch alumni data from your database (replace with your actual API endpoint)
    fetch(`${process.env.REACT_APP_BASE_URL}/api/user/getdata`) // Corrected URL with backticks
      .then(response => response.json())
      .then(data => setAlumniData(data))
      .catch(error => console.error('Error fetching alumni data:', error.message));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh' }}>
    <Dashboard />
      <h2 className="text-4xl font-medium text-maroon mb-10 ml-[40%] mt-[3%]">Alumni Members</h2>
      <DataTable data={alumniData} />
    </div>
  );
};

export default AlumniTable;
