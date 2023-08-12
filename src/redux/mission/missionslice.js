import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

export const fetchMissionAsync = createAsyncThunk('mission/fetchMission', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setMissions: (state, action) => ({
      ...state,
      missions: action.payload,
    }),
    reserveMission: (state, action) => {
      const missionId = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.mission_id === missionId
          ? { ...mission, reserved: true } : mission)),
      };
    },

    cancelMission: (state, action) => {
      const missionId = action.payload;
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.mission_id === missionId
          ? { ...mission, reserved: false } : mission)),
      };
    },
  },
});

export const selectAllMissions = (state) => state.mission.missions;

export const { setMissions, reserveMission, cancelMission } = missionSlice.actions;

export default missionSlice.reducer;
