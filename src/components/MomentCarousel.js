import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MomentCarousel = ({ moments }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % moments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [moments.length]);

  const handleSwipe = (delta) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + delta;
      return newIndex >= 0 ? newIndex % moments.length : moments.length - 1;
    });
  };

  return (
    <div className="moment-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={moments[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="carousel-item"
        >
          <img
            src={moments[currentIndex].imageUrl}
            alt={moments[currentIndex].caption}
            className="carousel-image"
          />
          <p className="carousel-caption">{moments[currentIndex].caption}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={() => handleSwipe(-1)}>Previous</button>
      <button onClick={() => handleSwipe(1)}>Next</button>
    </div>
  );
};

export default MomentCarousel;
