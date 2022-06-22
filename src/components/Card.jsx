/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCard } from '../slices/cardsSlice.js';

const Card = ({
  id, name, category, img, active, setActiveCat,
}) => {
  const dispatch = useDispatch();
  const badpicsIds = [3, 12, 21]; // crutch!!!
  const setActiveCard = (idToUpdate) => {
    if (window.screen.width > 1040) {
      dispatch(updateCard({ id: idToUpdate, changes: { active: !active } }));
    }
  };
  return (
    <div className={`card ${active ? 'active' : ''}`}>
      <h2>{name}</h2>
      <h4 onClick={() => setActiveCat(category)}>{category}</h4>
      <img
        onClick={() => setActiveCard(id)}
        style={badpicsIds.includes(id) ? { objectPosition: 'center center' } : { objectPosition: 'center left' }}
        className={active ? 'active' : ''}
        src={img}
        alt={`Placeholder-${name}`}
      />
    </div>
  );
};

export default Card;
