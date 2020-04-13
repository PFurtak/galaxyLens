import React, { Fragment, useState, useEffect } from 'react';
import Search from '../Search';
import Card from '../Card';
import Rocket from '../Rocket';
import ToTopBtn from '../ToTopBtn';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://images-api.nasa.gov/search?q=${search}&media_type=image`
      );
      const data = await res.json();
      setImages(data.collection.items);
    }
    getData();
    //eslint-disable-next-line
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
        <div className='container'>
          {images.map((image) => (
            <Card key={image.data[0].nasa_id} image={image} />
          ))}
          <ToTopBtn />
        </div>
      )}
    </Fragment>
  );
};

export default Home;
