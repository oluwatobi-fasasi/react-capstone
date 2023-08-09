// dragonsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPI = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragonsAsync = createAsyncThunk('dragon/fetchDragons', async (_, thunkAPI) => {
  try {
    const response = await axios.get(baseAPI);
    const dragonData = response.data.map((dItem) => ({
      id: dItem.id,
      name: dItem.name,
      type: dItem.type,
      desc: dItem.description,
      flickr_images: dItem.flickr_images[1],
      reserved: false,
    }));
    return dragonData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState: {
    dragons: [],
    isLoading: false,
  },
  reducers: {
    reserveDragon: (state, action) => {
      const { payload: dragonId } = action;
      const dragon = state.dragons.find((dragon) => dragon.id === dragonId);
      if (dragon) {
        dragon.reserved = !dragon.reserved; // Toggle reservation
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragonsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDragonsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dragons = action.payload;
      })
      .addCase(fetchDragonsAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectAllDragons = (state) => state.dragon.dragons;
export const { reserveDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
