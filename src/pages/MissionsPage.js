import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMissions } from '../redux/mission/missionslice';
import Mission from '../components/mission';

const MissionPage = () => {
  const missions = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        dispatch(setMissions(data));
      } catch (error) {
        // Handle error
      }
    };

    if (missions.length === 0) {
      fetchMissions();
    }
  }, [missions, dispatch]);

  return (
    <div>
      <div className="heading">
        <p className="miss-heading">Missions</p>
        <p className="mission-desc">Description</p>
        <p className="mission-status">Status</p>
      </div>
      {missions.map((mission) => (
        <Mission key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionPage;
