import React, { useState } from 'react';

function GalleryPage() {
  // Update this array with your image URLs and details
  const imagesData = [ { src: 'https://i.ytimg.com/vi/8yFJrwQEtVU/maxresdefault.jpg', details: 'Alumni meet 2018' },
  { src: 'https://www.cbit.ac.in/wp-content/uploads/2020/03/Deloite.jpg', details: 'Alumni meet 2021' },
  { src: 'https://www.cbit.ac.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-03-at-2.45.56-PM.jpeg', details: 'Alumni meet 2018' },
  { src: 'https://www.cbit.ac.in/wp-content/uploads/2020/02/Untitled-1-768x315.png', details: 'Alumni meet ii' },
  { src: 'https://www.cbit.ac.in/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-09-at-17.10.08.jpg', details: 'Alumni meet 2018' },
  { src: 'https://www.cbit.ac.in/wp-content/uploads/2022/12/CBIT-WINS-SREEVISION-2022.jpeg', details: 'Alumni meet 2021' },
  { src: 'https://www.cbit.ac.in/wp-content/uploads/2023/02/IMG_4354-scaled.jpg', details: 'Alumni meet 2018' },
  { src: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2018/12/27/w600X300/nostalgic.jpg', details: 'Alumni meet ii' },
  { src: 'https://cbit.ac.in/wp-content/uploads/2019/03/1-min-2.jpg', details: 'Alumni meet 2018' },
  

    // Add your image data here for a total of 20 images
    // Each element should have the 'src' (image URL) and 'details' (image details)
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className='space-y-8 p-8 bg-white rounded-lg shadow-md mt-[2%] ml-[10%] mr-[10%]'>
      <div className='space-y-8'>
        <div className='font-display space-y-2'>
          <p className='text-black font-extrabold text-4xl'>Gallery</p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-5'>
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

export default GalleryPage;