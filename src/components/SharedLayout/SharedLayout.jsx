import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import SearchInput from 'components/SearchInput/SearchInput';
import DropDownMenu from 'components/Menu/DropDownMenu';
import Footer from 'components/Footer/Footer';

function SharedLayout() {
  const [activePage, setActivePage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActivePage = page => {
    setActivePage(``);
    setActivePage(page);
  };

  const toggleMenu = e => {
    setIsMenuOpen(!isMenuOpen);
    // document.body.classList.toggle('scrollLock', isMenuOpen);
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

            <SearchInput />
          </div>

          <button onClick={toggleMenu} className={css.mobileMenuOpenBtn}>
            open menu
          </button>
          <div
            className={
              isMenuOpen
                ? `${css.mobilemenu} ${css.openMenu}`
                : `${css.closeMenu}`
            }
          >
            <button
              onClick={toggleMenu}
              className={
                isMenuOpen
                  ? `${css.mobileMenuCloseBtn} ${css.showNavLink}`
                  : `${css.closeNavLink}`
              }
            >
              close menu
            </button>
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
      </header>
      <main className={css.mainContainer}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default SharedLayout;
