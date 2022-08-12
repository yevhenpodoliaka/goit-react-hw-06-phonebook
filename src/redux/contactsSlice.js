import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

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
      return {
        ...state,
        items: [...state.items,action.payload],
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

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { add, deleted, changeFilter } = contactsSlice.actions;
// selectors
export const getContactItems = state => state.contacts.items
export const getFilterValue = state => state.contacts.filter;