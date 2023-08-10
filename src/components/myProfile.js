import React from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../redux/rockets/rocketsSlice';

const Profile = () => {
  const rockets = useSelector(selectAll);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>Reserved Rockets:</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
