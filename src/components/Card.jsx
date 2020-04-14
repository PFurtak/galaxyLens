import React from 'react';

const Card = ({ image }) => {
  return (
    <div className='card'>
      <img
        src={image.links[0].href}
        alt=''
        className=''
        style={{ width: '400' }}
      />
      <h3 className='text-light text-center p-2'>{image.data[0].title}</h3>
      <ul>
        <li className='text-light text-center'>{image.data[0].date_created}</li>
        <li className='text-light text-center p-2 dont-break-out'>
          {image.data[0].description}
        </li>
      </ul>
    </div>
  );
};

export default Card;
