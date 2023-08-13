import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [currentImg, setCurrentImg] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null);

  const imgs = document.querySelectorAll('img');

  const updateImg = () => {
    if (currentImg > imgs.length) {
      setCurrentImg(1);
    } else if (currentImg < 1) {
      setCurrentImg(imgs.length);
    }
    setTimeoutId(
      setTimeout(() => {
        setCurrentImg(currentImg + 1);
      }, 3000)
    );
  };

  useEffect(() => {
    const imageContE1 = document.querySelector('.image-container');

    imageContE1.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    clearTimeout(timeoutId);
    updateImg();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentImg, timeoutId]);

  const handleNextClick = () => {
    setCurrentImg(currentImg + 1);
    clearTimeout(timeoutId);
    updateImg();
  };

  const handlePrevClick = () => {
    setCurrentImg(currentImg - 1);
    clearTimeout(timeoutId);
    updateImg();
  };

  return (
    <div>
      <button className="prev" onClick={handlePrevClick}>
        Previous
      </button>
      <div className="image-container">
        {Array.from(imgs).map((img, index) => (
          <img key={index} src={"https://hackster.imgix.net/uploads/attachments/1105626/OpenBuilds_Simple_Ventilator_Concept.spin.gif?auto=format%2Ccompress&gifq=35&w=400&h=300&fit=min"} alt={`Image ${index + 1}`} />
         
        ))}
      </div>
      <button className="next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
