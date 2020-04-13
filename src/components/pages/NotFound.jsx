import React from 'react';
import Cat from '../Cat';

export const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <br />
      <h1>Page Not Found</h1>
      <h3>The page you are looking for is not here...</h3>
      <br />
      <Cat />
    </div>
  );
};

export default NotFound;
