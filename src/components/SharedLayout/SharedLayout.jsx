import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import SearchInput from 'components/SearchInput/SearchInput';
import DropDownMenu from 'components/Menu/DropDownMenu';
import Footer from 'components/Footer/Footer';
// import ThemeToggle from 'components/ToggleTheme/ToggleTheme';

function SharedLayout() {
  const [activePage, setActivePage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActivePage = page => {
    setActivePage(``);
    setActivePage(page);
  };

  const toggleMenu = e => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className={css.navContainer}>
          <div className={css.linkContainer}>
            <NavLink
              to="/"
              onClick={() => handleSetActivePage('Home')}
              className={
                activePage === 'Home'
                  ? `${css.navLink} ${css.activeLink}`
                  : `${css.navLink}`
              }
            >
              Secrets of Taste
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={() => handleSetActivePage('Contacts')}
              className={
                activePage === 'Contacts'
                  ? `${css.navLink} ${css.activeLink}`
                  : `${css.navLink}`
              }
            >
              Contacts
            </NavLink>
            <NavLink
              to="/favorites"
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
            <SearchInput />{' '}
          </div>

          <div
            className={`${css.burger_icon} ${isMenuOpen ? `${css.open}` : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div
            className={isMenuOpen ? `${css.mobilemenu} ${css.openMenu}` : ``}
          >
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={
                isMenuOpen
                  ? `${css.navLink} ${css.showNavLink}`
                  : `${css.closeNavLink}`
              }
            >
              Secrets of Taste
            </NavLink>

            <NavLink
              to="/contacts"
              onClick={toggleMenu}
              className={
                isMenuOpen
                  ? `${css.navLink} ${css.showNavLink}`
                  : `${css.closeNavLink}`
              }
            >
              Contacts
            </NavLink>

            <NavLink
              to="/favorites"
              onClick={toggleMenu}
              className={
                isMenuOpen
                  ? `${css.navLink} ${css.showNavLink}`
                  : `${css.closeNavLink}`
              }
            >
              Favorite dishes
            </NavLink>
          </div>
        </nav>
        {/* <ThemeToggle /> */}
      </header>
      <main className={css.mainContainer}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default SharedLayout;
