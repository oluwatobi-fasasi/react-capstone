import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/dragonsSlice';
import missionReducer from './mission/missionslice';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    dragon: dragonsSlice,
    mission: missionReducer,
    rocket: rocketsSlice,
  },
});

export default store;
