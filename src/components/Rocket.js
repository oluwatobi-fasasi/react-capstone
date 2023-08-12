import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelReserveRocket,
  fetchRocketsAsync, reserveRocket, selectAll,
} from '../redux/rockets/rocketsSlice';

export default function Rocket() {
  const dispatch = useDispatch();
  const rockets = useSelector(selectAll);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketsAsync());
    }
  }, [dispatch, rockets.length]);

  const reserveHandler = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReserveHandler = (id) => {
    dispatch(cancelReserveRocket(id));
  };
  return (
    <div className="rocket-list">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          <div className="rock-desc">
            <h2 className="rocket-name">{rocket.name}</h2>
            {rocket.reserved && <span className="reserved-badge-rock">Reserved</span>}
            <p className="rocket-desc">{rocket.desc}</p>
            <button
              type="button"
              className={`reserve-button ${rocket.reserved ? 'cancel-reservation' : 'reservation-button'}`}
              onClick={() => {
                if (!rocket.reserved) {
                  reserveHandler(rocket.id);
                } else {
                  cancelReserveHandler(rocket.id);
                }
              }}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
