import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

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

export const { setMissions, reserveMission, cancelMission } = missionSlice.actions;

export default missionSlice.reducer;
