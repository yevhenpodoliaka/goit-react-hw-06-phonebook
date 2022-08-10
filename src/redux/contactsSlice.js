import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [...startContacts], filter: '' },
  reducers: {
    add(state, action) {
      const name = action.payload.name.toLowerCase();
      const hasContact = state.items.find(el => el.name.toLowerCase() === name);
      if (hasContact) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }
      const newContact = {
        id: nanoid(),
        ...action.payload,
      };
      return {
        ...state,
        items: [...state.items, newContact],
      };
    },
    deleted(state, action) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    changeFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, deleted, changeFilter } = contactsSlice.actions;
