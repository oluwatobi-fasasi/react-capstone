import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    dragon: dragonsSlice,
  },
});

export default store;
