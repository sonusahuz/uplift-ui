import React, { useState } from 'react';
import './Carousel.css'; // Optional: CSS for styling
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselProps = {
  items: { id: number; title: string; image: string }[]; // Adjust type as needed
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <ChevronLeft
        size={50}
        className="carousel-button left"
        onClick={prevSlide}
      />
      <div className="carousel-item">
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        <h2 className="carousel-title">{items[currentIndex].title}</h2>
      </div>
      <ChevronRight
        size={50}
        className="carousel-button right"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;
