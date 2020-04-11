import React, { useState } from 'react';

const Search = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          onChange={onChange}
          type='text'
          placeholder='Search NASA for...'
        />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Search;
