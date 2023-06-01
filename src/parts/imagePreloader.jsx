import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ImagePreloader = ({ images }) => {
  useEffect(() => {
    const preloadedImages = [];

    const preload = (url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
        preloadedImages.push(image);
      });
    };

    const preloadImages = async () => {
      try {
        await Promise.all(images.map((image) => preload(image)));
        console.log('Images preloaded:', preloadedImages);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [images]);

  return null;
};

ImagePreloader.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImagePreloader;