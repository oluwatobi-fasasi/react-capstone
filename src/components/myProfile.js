import React from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../redux/rockets/rocketsSlice';
import { selectAllDragons } from '../redux/dragons/dragonsSlice';

const Profile = () => {
  const rockets = useSelector(selectAll);
  const dragons = useSelector(selectAllDragons);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  const missions = useSelector((state) => state.mission.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="prof-main-div">
      <div className="profile-container">
        <h2 className="mission-title">My Rockets</h2>
        <ul className="mission-table">
          {reservedRockets.map((rocket) => (
            <li className="prof-rockets mission-row" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
      <div className="profile-container">
        <h2 className="mission-title">My Dragon</h2>
        <ul className="mission-table">
          {reservedDragons.map((dragon) => (
            <li className="prof-rockets mission-row" key={dragon.id}>{dragon.name}</li>
          ))}
        </ul>
      </div>
      <div className="profile-container">
        <h2 className="mission-title">My Missions</h2>
        <ul className="mission-table">
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id} className="mission-row">
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
