import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MomentCarousel = ({ moments }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure moments is defined and not empty
  const safeMoments = moments && moments.length > 0 ? moments : [];

  useEffect(() => {
    if (safeMoments.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % safeMoments.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [safeMoments.length]);

  const handleSwipe = (delta) => {
    if (safeMoments.length > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + delta;
        return newIndex >= 0 ? newIndex % safeMoments.length : safeMoments.length - 1;
      });
    }
  };

  if (safeMoments.length === 0) {
    return (
      <div className="moment-carousel">
        <p>No moments yet. Be the first to share one!</p>
      </div>
    );
  }

  return (
    <div className="moment-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={safeMoments[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="carousel-item"
        >
          <img
            src={safeMoments[currentIndex].imageUrl}
            alt={safeMoments[currentIndex].caption}
            className="carousel-image"
          />
          <p className="carousel-caption">{safeMoments[currentIndex].caption}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={() => handleSwipe(-1)}>Previous</button>
      <button onClick={() => handleSwipe(1)}>Next</button>
    </div>
  );
};

export default MomentCarousel;
