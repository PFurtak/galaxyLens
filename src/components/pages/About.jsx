import React from 'react';

export const About = () => {
  return (
    <div>
      <br />
      <h1>About this Application</h1>
      <br />
      <p>
        <strong>Search and pull images from NASA's image library.</strong>
      </p>
      <p>
        <strong>Version: 0.0.4</strong>
      </p>
      <p>
        <strong>React version 16.13.1</strong>
      </p>
      <br />
      <p>
        <strong>
          Source code can be reviewed at{' '}
          <a
            className='text-light'
            href='https://github.com/PFurtak/galaxyLens'>
            github.com/PFurtak/galaxyLens
          </a>
        </strong>
      </p>
      <br />
      <hr />
      <br />
      <h2>Credits</h2>
      <br />
      <h3>API</h3>
      <p>
        Data is brought to you by the North American Space Association image
        library. More information on the API can be found at
        <a className='text-light' href='https://api.nasa.gov/'>
          {' '}
          api.nasa.gov
        </a>
      </p>
      <br />
      <h3>CSS</h3>
      <p>
        CSS library provided by Brad Traversy. You can find his work at{' '}
        <a className='text-light' href='https://github.com/bradtraversy'>
          github.com/bradtraversy
        </a>
      </p>
      <br />
      <h3>GIFs</h3>
      <p>
        GIFs were sourced from giphy.com and created by Tony Babel. His work can
        be found at{' '}
        <a className='text-light' href='https://giphy.com/tonybabel'>
          {' '}
          giphy.com/tonybabel
        </a>
      </p>
      <br />
    </div>
  );
};

export default About;
