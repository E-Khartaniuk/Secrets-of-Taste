import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import SearchInput from 'components/SearchInput/SearchInput';
import DropDownMenu from 'components/Menu/DropDownMenu';
import Footer from 'components/Footer/Footer';

function SharedLayout() {
  return (
    <div>
      <header>
        <nav className={css.navContainer}>
          <div className={css.linkContainer}>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
            <NavLink to="/contacts" className={css.navLink}>
              Contacts
            </NavLink>
            <NavLink to="/favorites" className={css.navLink}>
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

      <Footer></Footer>
    </div>
  );
}

export default SharedLayout;
