import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin
import logo from '../assets/logo.png';
import watermark from '../assets/watermark.png';


const DataTable = ({ data }) => {
  const columns = ['Sl. No', 'Full Name', 'Roll No', 'Department', 'Batch', 'Details'];
  const [visibleRows, setVisibleRows] = useState(10);

  const handleSlideDown = () => {
    setVisibleRows((prev) => prev + 10);
  };

  const downloadUserDetails = (user) => {
    const pdf = new jsPDF();

    // Add college logo
    const logoUrl = logo;
    pdf.addImage(logoUrl, 'PNG', 10, 10, 100, 30); // Increase width to 150

    // Watermark
    const watermarkUrl = watermark; // Replace with your watermark image URL
    const opacity = 0.1; // Set the opacity value (0 to 1)

    // Calculate center position for watermark
    const centerX = (pdf.internal.pageSize.width - 100) / 2;
    const centerY = (pdf.internal.pageSize.height - 100) / 2;
    const center = pdf.internal.pageSize.width / 2;

    pdf.setDrawColor(0, 0, 0, opacity); // Set draw color with opacity
    pdf.addImage(watermarkUrl, 'PNG', centerX, centerY, 100, 100);

    // Customize the content of the PDF based on your user object
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(18); // Increase font size for user details headings

    // Position user details below the logo
    const userDetailStartY = 60; // Adjust as needed
    pdf.text(`User Details`,  20, userDetailStartY);

    // Display user details in a table format using autoTable
    pdf.autoTable({
      // Adjust the starting X position to center the table
      startY: userDetailStartY + 20,
      
      body: [
        ['Full Name', user.fullName],
        ['Roll No', user.rollNumber],
        ['Department', user.department],
        ['Batch', user.batchYear],
      ],
      theme: 'plain', // Use 'plain' theme for a single color
    });

    // Download the PDF
    pdf.save(`${user.fullName}_details.pdf`);
  };

  return (
  
    <div style={{ minHeight: '100vh' }}>
      <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '20px', margin: 'auto', marginTop: '0px', marginBottom: '20px', maxWidth: '1000px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#004200', color: 'white' }}>
              {columns.map((column, index) => (
                <th key={index} style={{ padding: '12px', textAlign: 'left' }}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, visibleRows).map((alumni, index) => (
              <tr key={index}>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{index + 1}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{alumni.fullName}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{alumni.rollNumber}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{alumni.department}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{alumni.batchYear}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                  <button onClick={() => downloadUserDetails(alumni)}>Download PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data.length > visibleRows && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleSlideDown}>Slide Down</button>
          </div>
        )}
      </div>
    </div>
   
  );
};

export default DataTable;
