import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPI = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketsAsync = createAsyncThunk('rocket/fetchRockets', async (_, thunkAPI) => {
  try {
    const response = await axios.get(baseAPI);
    const rocketData = [];
    response.data.map((dItem) => {
      const newRocket = {
        id: dItem.id,
        name: dItem.name,
        desc: dItem.description,
        image: dItem.flickr_images[0],
        reserved: false,
      };
      rocketData.push(newRocket);
      return null;
    });
    return rocketData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    rockets: [],
    isloading: false,
  },
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelReserveRocket: (state, action) => {
      const rocket = state.rockets.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsAsync.fulfilled, (state, action) => {
        state.rockets = action.payload;
      });
  },
});

export const selectAll = ((state) => state.rocket.rockets);
export const { reserveRocket, cancelReserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
