/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const items = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

const Categories = ({ cat, setActiveCat }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    toggleDropdown();
    setActiveCat(items[id]);
  };
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {cat}
          <div className={`icon ${isOpen && 'open'}`}>
            &#9660;
          </div>
        </div>
        <div className={`dropdown-body ${isOpen && 'open'}`}>
          {items.map((item, i) => (
            <div key={i} className="dropdown-item" onClick={(e) => handleItemClick(e.target.id)} id={i}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <ul className="categories">
        {items.map((item, i) => (
          <li
            key={i}
            className={cat === item ? 'active' : ''}
            onClick={() => setActiveCat(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
