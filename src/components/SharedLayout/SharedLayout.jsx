import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import SearchInput from 'components/SearchInput/SearchInput';

function SharedLayout() {
  return (
    <div className={css.mainContainer}>
      <header>
        <nav className={css.navContainer}>
          <div className={css.linkContainer}>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
            <NavLink to="/contacts" className={css.navLink}>
              Contacts
            </NavLink>
            <SearchInput />
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default SharedLayout;
