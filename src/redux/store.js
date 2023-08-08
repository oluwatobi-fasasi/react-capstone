import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/dragonsSlice';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    dragon: dragonsSlice,
    rocket: rocketsSlice,
  },
});

export default store;
