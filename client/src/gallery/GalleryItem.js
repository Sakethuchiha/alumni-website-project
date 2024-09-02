/*import React from 'react';

const GalleryItem = ({ imageUrl, caption }) => {
  return (
    <div className="gallery-item">
      <img src={imageUrl} alt={caption} />
      <p>{caption}</p>
    </div>
  );
};

export default GalleryItem;
*/
import React from 'react';

const GalleryItem = ({ imageUrl, caption, onClick }) => {
  return (
    <div className="gallery-item" onClick={() => onClick()}>
      <img src={imageUrl} alt={caption} />
      <p>{caption}</p>
    </div>
  );
};

export default GalleryItem;
