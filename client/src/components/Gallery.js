import React, { useState } from 'react';

function Gallery() {
  // Update this array with your image URLs and details
  const imagesData = [
    { src: 'https://i.ytimg.com/vi/8yFJrwQEtVU/maxresdefault.jpg', details: 'Alumni meet 2018' },
    { src: 'https://www.cbit.ac.in/wp-content/uploads/2022/12/IMG_-73-of-90-scaled.jpg', details: 'Alumni meet 2021' },
    { src: 'https://www.cbit.ac.in/wp-content/uploads/2023/02/IMG_4354-scaled.jpg', details: 'Alumni meet 2018' },
    { src: 'https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-2048x864.jpeg', details: 'Alumni meet ii' },
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className='space-y-8'>
      <div className='space-y-8'>
        <div className='font-display space-y-2'>
          <p className='text-black font-extrabold text-4xl'>Highlights</p>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3 space-y-2'>
        {imagesData.map((imageData, index) => (
          <div
            key={index}
            className='relative border border-black rounded-3xl overflow-hidden'
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={imageData.src}
              alt={`Image-${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              className='rounded-lg'
            />
            {hoveredImage === index && (
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 text-white flex items-center justify-center'>
                <p>{imageData.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
