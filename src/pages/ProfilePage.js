import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../components/myProfile';

const ProfilePage = () => {
  const missions = useSelector((state) => state.mission.missions);

  // Filter the joined missions (reserved missions)
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <h3 className="mission-title">My Missions</h3>
      <ul className="mission-table">
        {joinedMissions.map((mission) => (
          <li key={mission.mission_id} className="mission-row">
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
          
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
