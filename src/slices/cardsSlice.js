/* eslint no-param-reassign: "off" */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cardsAdapter = createEntityAdapter();

const initialState = cardsAdapter.getInitialState();

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCards: cardsAdapter.addMany,
    removeCards: cardsAdapter.removeMany,
    updateCard: cardsAdapter.updateOne,
  },
});

export const cardsSelectors = cardsAdapter.getSelectors((state) => state.cards);

export const {
  addCards, removeCards, updateCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
