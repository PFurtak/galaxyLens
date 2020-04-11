import React, { useState } from 'react';

const Search = ({ searchText }) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(search);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='search'
          placeholder='Search NASA for...'
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>
    </div>
  );
};

export default Search;
