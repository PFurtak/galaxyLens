import React, { Fragment, useState, useEffect } from 'react';
import Search from '../Search';
import Card from '../Card';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.collection.items);
        console.log('data: ', data.collection.items);
        console.log('images state: ', images);
        console.log('search:', search);
      })
      .catch((err) => console.log(err));
  }, [search]);
  return (
    <Fragment>
      <h1>Galaxy Lens</h1>
      <h2>Images from the Cosmos</h2>
      <h3>Brought to you by NASA</h3>
      <Search searchText={(search) => setSearch(search)} />
      {search === '' ? (
        <h1>Images not found</h1>
      ) : (
        <div>
          {images.map((image) => (
            <Card image={image} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Home;
