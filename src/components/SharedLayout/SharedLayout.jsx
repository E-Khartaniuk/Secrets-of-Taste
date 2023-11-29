import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import SearchInput from 'components/SearchInput/SearchInput';
import DropDownMenu from 'components/Menu/DropDownMenu';
import Footer from 'components/Footer/Footer';

function SharedLayout() {
  const [activePage, setActivePage] = useState('');

  const handleSetActivePage = page => {
    setActivePage(``);
    setActivePage(page);
  };

  return (
    <>
      <header>
        <nav className={css.navContainer}>
          <div className={css.linkContainer}>
            <NavLink
              to="/"
              // className={css.navLink}
              onClick={() => handleSetActivePage('Home')}
              className={
                activePage === 'Home'
                  ? `${css.navLink} ${css.activeLink}`
                  : `${css.navLink}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={() => handleSetActivePage('Contacts')}
              className={
                activePage === 'Contacts'
                  ? `${css.navLink} ${css.activeLink}`
                  : `${css.navLink}`
              }
              // className={css.navLink}
            >
              Contacts
            </NavLink>
            <NavLink
              to="/favorites"
              // className={css.navLink}
              onClick={() => handleSetActivePage('Favorite')}
              className={
                activePage === 'Favorite'
                  ? `${css.navLink} ${css.activeLink}`
                  : `${css.navLink}`
              }
            >
              Favorite dishes
            </NavLink>
            <DropDownMenu />
            <SearchInput />
          </div>
        </nav>
      </header>
      <main className={css.mainContainer}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default SharedLayout;
