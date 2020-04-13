import React from 'react';

const ToTopBtn = () => {
  return (
    <div style={topStyle}>
      <a href='#'>
        <i className='far fa-arrow-alt-circle-up text-light fa-2x'></i>
      </a>
    </div>
  );
};

const topStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '25px',
};

export default ToTopBtn;
