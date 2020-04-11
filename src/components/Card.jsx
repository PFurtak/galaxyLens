import React from 'react';

const Card = () => {
  return (
    <div>
      <div className='container'>
        <div className='card text-center'>
          <img src='' alt='' className='round-img' style={{ width: '60px' }} />
          <h3>Title</h3>
          <div>
            <ul>
              <li>Date</li>
              <li>Caption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
