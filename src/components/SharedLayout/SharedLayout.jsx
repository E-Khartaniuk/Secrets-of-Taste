import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import DropDownMenu from 'components/Menu/DropDownMenu';
import SearchInput from 'components/SearchInput/SearchInput';

function SharedLayout() {
  const [activePage, setActivePage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerIconRef = useRef(null);

  const handleSetActivePage = page => {
    setActivePage('');
    setActivePage(page);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add(css.scrollLock);
      } else {
        document.body.classList.remove(css.scrollLock);
      }
      return newState;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove(css.scrollLock);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !burgerIconRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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

          <div
            ref={burgerIconRef}
            className={`${css.burger_icon} ${isMenuOpen ? `${css.open}` : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div
            ref={menuRef}
            className={isMenuOpen ? `${css.mobilemenu} ${css.openMenu}` : ''}
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
      </header>
      <main className={css.mainContainer}>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;
