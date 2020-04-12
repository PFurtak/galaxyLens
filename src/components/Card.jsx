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
          <h3 className='text-light'>{image.data[0].title}</h3>
          <div>
            <ul>
              <li className='text-light'>{image.data[0].date_created}</li>
              <li className='text-light'>{image.data[0].description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
