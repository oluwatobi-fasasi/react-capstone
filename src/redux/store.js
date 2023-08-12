import { configureStore } from '@reduxjs/toolkit';
import dragonSlice from './dragons/dragonsSlice';
import missionReducer from './mission/missionslice';
import rocketSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    dragon: dragonSlice,
    mission: missionReducer,
    rocket: rocketSlice,
  },
});

export default store;
