import React, { useState } from 'react';
import css from './SearchInput.module.css';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function navigateToSearchPage() {
    console.log('searchQuery', searchQuery);
    navigate(`/search/${searchQuery}`);
  }

  return (
    <form className={css.inputForm}>
      <input
        type="text"
        value={searchQuery}
        className={css.inputSearch}
        onChange={e => {
          setSearchQuery(e.target.value);
        }}
      />
      <button
        type="button"
        className={css.searchBtn}
        onClick={navigateToSearchPage}
      >
        Search
      </button>
    </form>
  );
}

export default SearchInput;
