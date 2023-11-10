import React from 'react';

import css from './Contacts.module.css';

import instaLogo from '../../../img/instagram-logo.png';
import telegramLogo from '../../../img/telegram-logo.png';
import facebookLogo from '../../../img/facebook-logo.png';

function Contacts() {
  return (
    <>
      <div className={css.container}>
        <div className={css.titleContainer}>
          <h1 className={css.ContactsTitle}>Contacts</h1>
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
          <h3>Our social networks</h3>{' '}
          <div className={css.iconsContainer}>
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
        </div>

        <div className={css.mapContainer}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4645.321232001829!2d-122.41563488937474!3d37.26415870164522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f06e8adaef087%3A0x7a60d7fa0fcdacc2!2z0J_QtdGB0LrQsNC00LXRgNC-INCh0YLQtdC50YIg0JHQuNGH!5e0!3m2!1sru!2sua!4v1699490872233!5m2!1sru!2sua"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contacts;
