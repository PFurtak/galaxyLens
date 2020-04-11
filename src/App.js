import React from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Galaxy Lens</h1>
        <h2>Images from the Cosmos</h2>
        <h3>Brought to you by NASA</h3>
      </header>
      <Search />
      <Card />
    </div>
  );
}

export default App;
