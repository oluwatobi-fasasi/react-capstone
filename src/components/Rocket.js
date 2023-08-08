import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync, selectAll } from '../redux/rockets/rocketsSlice';

export default function Rocket() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsAsync());
  }, [dispatch]);
  const rockets = useSelector(selectAll);

  return (
    <div className="rocket-list">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          <div className="rock-desc">
            <h2 className="rocket-name">{rocket.name}</h2>
            <p className="rocket-desc">{rocket.desc}</p>
            <button type="submit" className="reserve-button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
}
