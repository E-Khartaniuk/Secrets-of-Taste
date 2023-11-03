import React, { useState } from 'react';
import css from './DropDownMenu.module.css';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className={css.dopDownContainer}
    >
      Category
      {/* <button className={css.menuControlBtn}> Category</button> */}
      {isOpen && (
        <ul className={css.dropDownList}>
          <li className={css.listItem}>Vegan</li>
          <li className={css.listItem}>Meat</li>
          <li className={css.listItem}>Low caolries</li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
