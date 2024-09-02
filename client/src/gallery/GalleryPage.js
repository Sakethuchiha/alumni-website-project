// GalleryPage.js

import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import './GalleryPage.css';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [selectedImages, setSelectedImages] = useState([true]);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleImageClick = (images) => {
    setSelectedImages(images);
    setShowCarousel(true);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowIntroduction(true);
  };

  const ImageClick = (images) => {
    setSelectedImages(images);
  };

  const getFilteredData = () => {
    if (activeTab === 'photos') {
      return [
        { imageUrl: 'images/gal5.jpeg', caption: 'Caption 1' },
        { imageUrl: 'images/gal2.jpeg', caption: 'Caption 2' },
        { imageUrl: 'images/gal3.jpeg', caption: 'Caption 2' },
        { imageUrl: 'images/gal4.jpeg', caption: 'Caption 1' },
        { imageUrl: 'images/gal1.jpeg', caption: 'Caption 2' },
        { imageUrl: 'images/gal5.jpeg', caption: 'Caption 1' },
        { imageUrl: 'images/gal2.jpeg', caption: 'Caption 2' },
        { imageUrl: 'images/gal1.jpeg', caption: 'Caption 2' },
        { imageUrl: 'images/gal5.jpeg', caption: 'Caption 1' },
        { imageUrl: 'images/gal2.jpeg', caption: 'Caption 2' },
        { imageUrl: 'images/gal5.jpeg', caption: 'Caption 1' }
        // Add more images as needed
      ];
    } else if (activeTab === 'videos') {
      return [
        { imageUrl: 'videos/video1.mp4', caption: 'Video 1' },
        { imageUrl: 'videos/video2.mp4', caption: 'Video 2' }
      ];
    } else if (activeTab === 'events') {
      return [
        { imageUrl: 'events/event1.jpg', caption: 'Event 1' },
        { imageUrl: 'events/event2.jpg', caption: 'Event 2' }
      ];
    }
    return [];
  };

  const galleryData = getFilteredData();

  const imagesSet1 = [
    { imageUrl: 'images/gal5.jpeg', caption: 'Image 1', title: 'title1' },
    { imageUrl: 'images/gal5.jpeg', caption: 'Image 2', title: 'title2' },
    // Add more images as needed
  ];

  return (
    <div className="page-container">
      {/* Centered Video with Box Shadow */}
      <div
        className="video-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          alignSelf:'center',
          justifySelf: 'center',
          marginBottom: '20px',
          marginTop:'10px',
          padding: '20px',
          borderRadius: '10px',
          width: '75%',
          maxWidth: '1000px',
        }}
      >
        <video controls autoPlay muted style={{ width: '100%' }}>
          <source src="/images/introvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 className="text-5xl font-medium text mb-10 ml-[40%] mt-[3%]" style={{color:'maroon',}}>Alumni Gallery</h2>
      <div className="gallery-container">
        {galleryData.map((item, index) => (
          <GalleryItem
            key={index}
            imageUrl={item.imageUrl}
            caption={item.caption}
            onClick={() => handleImageClick(imagesSet1)}
          />
        ))}
      </div>

      {showCarousel && (
        <div className="gallery-carousel-container">
          <ImageCarousel
            show={showCarousel}
            onHide={() => setShowCarousel(false)}
            images={selectedImages}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
