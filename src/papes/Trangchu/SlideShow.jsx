import React, { useState, useEffect } from "react";
import "./SlideShow.scss";

const images = [
  "/slide1.webp",
  "/slide3.jpg",
  "/Glucena.webp",
  "/everon.webp"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Chuyển sau 3 giây

    return () => clearInterval(interval); // Dọn dẹp bộ nhớ
  }, []);

  // Thay đổi slide khi nhấn vào dấu chấm
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="wrap">
      <div className="wrap__left">
        <div className="slideshow-container">
          <div className="slide">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="slide-image"
            />
          </div>

          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap__right">
        <div className="small-image-container">
          <img src="/thucu.webp" alt="Small 1" className="small-image" />
        </div>
        <div className="small-image-container">
          <img src="/chuyentrang.webp" alt="Small 2" className="small-image" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;