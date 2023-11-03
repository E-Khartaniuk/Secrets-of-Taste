import React, { useState } from 'react';
import css from './DropDownMenu.module.css';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={css.dopDownContainer}>
      <button
        onMouseEnter={handleOpen}
        onMouseLeave={handleOpen}
        className={css.menuControlBtn}
      >
        {' '}
        Category
      </button>
      {isOpen && (
        <ul className={css.dropDownList}>
          <li>Vegan</li>
          <li>Meat</li>
          <li>Low caolries</li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
