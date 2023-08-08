import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMissions } from '../redux/mission/missionslice';
import Mission from '../components/mission';

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        dispatch(setMissions(data));
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    };
  return (
    <div>
      <div className="heading">
        <p className="miss-heading">Missions</p>
        <p>Description</p>
        <p>Status</p>
      </div>
      {missions.map((mission) => (
        <Mission key={mission.mission_id} mission={mission} />
      ))}
    </div>
);

export default Mission;
