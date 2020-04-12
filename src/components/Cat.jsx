import React, { Fragment } from 'react';
import cat from './cat.gif';

const Cat = () => {
  return (
    <Fragment>
      <img
        src={cat}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Cat;
