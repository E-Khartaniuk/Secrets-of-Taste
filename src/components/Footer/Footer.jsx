import React from 'react';
import css from './Footer.module.css';
import instaLogo from '../../img/instagram-logo.png';
import telegramLogo from '../../img/telegram-logo.png';
import facebookLogo from '../../img/facebook-logo.png';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.footerSotialiconSection}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className={css.socialIconContainer}
          >
            <img
              src={instaLogo}
              alt="instagram-Icon"
              className={css.socialImg}
            />
          </a>

          <a
            href="https://web.telegram.org/k/"
            target="_blank"
            rel="noreferrer"
            className={css.socialIconContainer}
          >
            <img
              src={telegramLogo}
              alt="instagram-Icon"
              className={css.socialImg}
            />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className={css.socialIconContainer}
          >
            <img
              src={facebookLogo}
              alt="instagram-Icon"
              className={css.socialImg}
            />
          </a>
        </div>

        <div>
          <div className={css.contactThumb}>
            <span className={css.contactPreText}>Phone:</span>
            <a href="tel:+380630000000" className={css.contactItem}>
              +38(063)000-00-00
            </a>
          </div>

          <div className={css.contactThumb}>
            <span className={css.contactPreText}>Mail:</span>
            <a href="mailto:hartanyuk.e@gmail.com" className={css.contactItem}>
              hartanyuk.e@gmail.com
            </a>
          </div>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/yevhenii-khartaniuk-45b279251/"
        className={css.copirite}
      >
        hartanyuk © 2023
      </a>
    </footer>
  );
}

export default Footer;
