import React from 'react';

import { FaSearch } from 'react-icons/fa';

// styles
import '../static/styles/components/Search/search.scss';

const Search = () => (
  <div className='search'>
    <div className='input-search'>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='Search for your favorites products'
      />
      <FaSearch />
    </div>
  </div>
);

export default Search;
