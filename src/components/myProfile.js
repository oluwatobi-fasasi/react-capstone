import React from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../redux/rockets/rocketsSlice';
import { selectAllDragons } from '../redux/dragons/dragonsSlice';

const Profile = () => {
  const rockets = useSelector(selectAll);
  const dragons = useSelector(selectAllDragons);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <div className="">
      <div className="prof-rock-div">
        <h2>My Rockets:</h2>
        <ul className="prof-rock-ul">
          {reservedRockets.map((rocket) => (
            <li className="prof-rockets" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
      <div className="prof-rock-div">
        <h2>My Dragon:</h2>
        <ul className="prof-rock-ul">
          {reservedDragons.map((dragon) => (
            <li className="prof-rockets" key={dragon.id}>{dragon.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
