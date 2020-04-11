import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';

function App() {
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
    <div className='App'>
      <div className='container'>
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
      </div>
    </div>
  );
}

export default App;
