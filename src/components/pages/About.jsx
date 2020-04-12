import React from 'react';

export const About = () => {
  return (
    <div>
      <h1>About this Application</h1>
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
          Source code can be viewed at https://github.com/PFurtak/galaxyLens
        </strong>
      </p>
      <br />
      <hr />
      <br />
      <h2>Credits:</h2>
      <br />
      <p>
        <h3>API</h3>Data is brought to you by the North American Space
        Association image library. More information on the API can be found at
        https://api.nasa.gov/
      </p>
      <br />
      <p>
        <h3>CSS</h3>CSS library provided by Brad Traversy. You can find his work
        at https://github.com/bradtraversy
      </p>
      <br />
      <p>
        <h3>GIFs</h3>GIFs were sourced from giphy.com and created by Tony Babel.
        His work can be found at https://giphy.com/tonybabel
      </p>
    </div>
  );
};

export default About;
