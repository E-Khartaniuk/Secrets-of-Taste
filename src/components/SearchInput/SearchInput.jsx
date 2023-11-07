import React, { useState } from 'react';
import css from './SearchInput.module.css';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function navigateToSearchPage(e) {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  }

  function getQuery(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <form className={css.inputForm} onSubmit={navigateToSearchPage}>
      <input
        type="text"
        value={searchQuery}
        className={css.inputSearch}
        onChange={getQuery}
      />
      <button
        type="submit"
        className={css.searchBtn}
        // onClick={navigateToSearchPage}
      >
        Search
      </button>
    </form>
  );
}

export default SearchInput;
