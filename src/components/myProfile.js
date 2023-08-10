import React from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../redux/rockets/rocketsSlice';

const Profile = () => {
  const rockets = useSelector(selectAll);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="prof-rock-div">
      <h2>My Rockets:</h2>
      <ul className="prof-rock-ul">
        {reservedRockets.map((rocket) => (
          <li className="prof-rockets" key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
