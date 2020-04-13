import React, { useState } from 'react';

const ToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const scrollComponent = document.addEventListener('scroll', function (e) {
    toggleVisibility(scrollComponent);
  });

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='scroll-to-top'>
      {visible && (
        <div onClick={scrollToTop} style={topStyle}>
          <i className='far fa-arrow-alt-circle-up text-light fa-2x'></i>
        </div>
      )}
    </div>
  );
};

const topStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '25px',
};

export default ToTopBtn;
