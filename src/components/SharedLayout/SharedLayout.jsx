import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import SearchInput from 'components/SearchInput/SearchInput';
import DropDownMenu from 'components/Menu/DropDownMenu';
import Footer from 'components/Footer/Footer';

import { GoogleLogin } from '@react-oauth/google';

function SharedLayout() {
  return (
    <>
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
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </header>
      <main className={css.mainContainer}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default SharedLayout;
