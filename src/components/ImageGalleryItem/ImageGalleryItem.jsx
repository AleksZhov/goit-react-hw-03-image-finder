import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, tags, previewURL, largeImageURL, onClick }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={previewURL}
        alt={tags}
        onClick={() => {
          onClick(largeImageURL, tags);
        }}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  previewURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default ImageGalleryItem;
