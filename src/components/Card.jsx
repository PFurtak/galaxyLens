import React from 'react';

const Card = ({ image }) => {
  return (
    <div>
      <div className='container'>
        <div className='card text-center'>
          <img
            src={image.links[0].href}
            alt=''
            className=''
            style={{ width: '800' }}
          />
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
