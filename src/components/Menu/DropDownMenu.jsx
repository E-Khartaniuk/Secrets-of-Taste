import React, { useState } from 'react';
import css from './DropDownMenu.module.css';
import { useNavigate } from 'react-router-dom';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const navigateToCategory = e => {
    navigate(`/search/${e.target.textContent}`);
  };

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      // onClick={handleOpen}

      className={css.dopDownContainer}
    >
      Diet
      {/* <button className={css.menuControlBtn}> Category</button> */}
      {isOpen && (
        <ul className={css.dropDownList}>
          <li className={css.listItem} onClick={navigateToCategory}>
            Vegetarian
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Gluten Free
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Lacto-Vegetarian
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Vegan
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Pescetarian
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Paleo
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Primal
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Low FODMAP
          </li>
          <li className={css.listItem} onClick={navigateToCategory}>
            Whole30
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
