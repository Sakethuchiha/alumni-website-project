// PhotoContainer.js
import React, { useState } from 'react';
import GalleryItem from './GalleryItem';

const PhotoContainer = ({ photos }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleContainerClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`photo-container ${isExpanded ? 'expanded' : ''}`} onClick={handleContainerClick}>
      {photos.map((photo, index) => (
        <GalleryItem key={index} imageUrl={photo.imageUrl} caption={photo.caption} />
      ))}
      {isExpanded && <div className="caption">{photos[0].caption}</div>}
    </div>
  );
};

export default PhotoContainer;
