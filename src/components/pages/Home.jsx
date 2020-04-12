import React, { Fragment, useState, useEffect } from 'react';
import Search from '../Search';
import Card from '../Card';
import Rocket from '../Rocket';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.collection.items);
      })
      .catch((err) => console.log(err));
  }, [search]);
  return (
    <Fragment>
      <div className='all-center'>
        <h1>Galaxy Lens</h1>
        <h2>Images from the Cosmos</h2>
        <h3>Brought to you by NASA</h3>
      </div>
      <Search searchText={(search) => setSearch(search)} />
      {search === '' ? (
        <Rocket />
      ) : (
        <div>
          {images.map((image) => (
            <Card key={image.data[0].nasa_id} image={image} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Home;
