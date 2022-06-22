/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Categories from './Categories.jsx';
import db from '../../assets/img/db';
import {
  cardsSelectors, addCards, removeCards,
} from '../slices/cardsSlice.js';

const App = () => {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelectors.selectAll);
  const deleteIds = cards.filter((card) => card.active)
    .map((card) => card.id);
  const [cat, setActiveCat] = React.useState('Show All');
  const [quantity, setQuantity] = React.useState(9);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete' && window.screen.width > 1040) {
      dispatch(removeCards(deleteIds));
    }
  });

  React.useEffect(() => {
    dispatch(addCards(db.map((card) => ({ ...card, active: false }))));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Categories cat={cat} setActiveCat={setActiveCat} />
          <div className="cards">
            {cards
              .filter((card, index) => index < quantity && (card.category === cat || cat === 'Show All'))
              .map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  setActiveCat={setActiveCat}
                />
              ))}
          </div>
          <button className="btn-add" type="button" onClick={() => setQuantity(quantity + 9)}>load more</button>
        </div>
      </div>
    </>
  );
};

export default App;
