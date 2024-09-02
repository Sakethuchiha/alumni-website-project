import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';

function GalleryLightbox({ images, isOpen, onClose, currentImage, onClickPrev, onClickNext }) {
  return (
    <Lightbox
      images={images.map((image) => image.src)}
      isOpen={isOpen}
      onClose={onClose}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      currentImage={currentImage}
    />
  );
}

export default GalleryLightbox;
