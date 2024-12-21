import React, { useState, useEffect } from "react";
import "./SlideShow.scss";

const images = [
  "https://th.bing.com/th/id/R.92d62deeb52905640b0cf64c77093b13?rik=nCMP3fA6%2fgAe4A&riu=http%3a%2f%2fminnierose.m.i.pic.centerblog.net%2fo%2ffond-ecran-nature-paysages-arbres-002.jpg&ehk=jl4am0mz2MQOC8XFTMLKvjkEGbt%2f4IysLCIo3mf452g%3d&risl=&pid=ImgRaw&r=0", // Đường dẫn ảnh
  "https://dataconomy.com/wp-content/uploads/2022/10/NightCafe-AI-image-generator-7.jpg",
  "https://th.bing.com/th/id/R.92d62deeb52905640b0cf64c77093b13?rik=nCMP3fA6%2fgAe4A&riu=http%3a%2f%2fminnierose.m.i.pic.centerblog.net%2fo%2ffond-ecran-nature-paysages-arbres-002.jpg&ehk=jl4am0mz2MQOC8XFTMLKvjkEGbt%2f4IysLCIo3mf452g%3d&risl=&pid=ImgRaw&r=0",
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
         <div className="wrap__left"><div className="slideshow-container">
            <div className="slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>

            {/* Dấu chấm điều hướng */}
            <div className="dots">
                {images.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                ></span>
                        ))}
            </div>
          </div></div>
         <div className="wrap__right">
         </div>
    </div>
   
  );
};

export default Slideshow;
