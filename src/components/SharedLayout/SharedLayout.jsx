import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import SearchInput from 'components/SearchInput/SearchInput';
import DropDownMenu from 'components/Menu/DropDownMenu';

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
            <DropDownMenu></DropDownMenu>
            <SearchInput />
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default SharedLayout;
