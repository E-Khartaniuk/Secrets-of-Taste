import React, { useState } from 'react';
import css from './DropDownMenu.module.css';
import { useNavigate } from 'react-router-dom';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const diets = [
    'Vegetarian',
    'Gluten Free',
    'Lacto-Vegetarian',
    'Vegan',
    'Pescetarian',
    'Paleo',
    'Primal',
    'Low FODMAP',
    'Whole30',
  ];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const navigateToCategory = e => {
    navigate(`/diet/${e.target.textContent}`);
  };

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className={css.dopDownContainer}
    >
      Diet
      {isOpen && (
        <ul className={css.dropDownList}>
          {diets.map(diet => {
            return (
              <li className={css.listItem} onClick={navigateToCategory}>
                {diet}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
