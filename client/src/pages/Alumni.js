import React from 'react';

function Alumni() {
  return (
    <div className="pdf-container" style={{ border: 'none', background: 'transparent' }}>
      <iframe
        title="PDF Viewer"
        src={`${process.env.PUBLIC_URL}/itpdf.pdf`}  // Use PUBLIC_URL to reference files in the public folder
        width="100%"
        height="600px"
        style={{ border: 'none', borderRadius: '8px' }} // Adjust the border-radius as needed
      ></iframe>
    </div>
  );
}

export default Alumni;
