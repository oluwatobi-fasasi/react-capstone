import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/dragonsSlice';
import missionReducer from './mission/missionslice';

const store = configureStore({
  reducer: {
    dragon: dragonsSlice,
  },
});

export default store;
