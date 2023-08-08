import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPI = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragonsAsync = createAsyncThunk('dragon/fetchDragons', async (_, thunkAPI) => {
  try {
    const response = await axios.get(baseAPI);
    const dragonData = [];
    response.data.map((dItem) => {
      const newDragon = {
        id: dItem.id,
        name: dItem.name,
        type: dItem.type,
        desc: dItem.description,
        flickr_images: dItem.flickr_images[1],
      };
      dragonData.push(newDragon);
      return null;
    });
    return dragonData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState: {
    dragons: [],
    isloading: false,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragonsAsync.fulfilled, (state, action) => {
        state.dragons = action.payload;
      });
  },
});

export const selectAll = ((state) => state.dragon.dragons);
export default dragonSlice.reducer;
