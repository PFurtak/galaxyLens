import React, { Fragment } from 'react';
import rocket from './rocket.gif';

const Rocket = () => {
  return (
    <Fragment>
      <img
        src={rocket}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Rocket;
