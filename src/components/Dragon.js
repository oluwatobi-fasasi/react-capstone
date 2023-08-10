// Dragon.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDragonsAsync,
  cancelDragonReservation,
  reserveDragon,
  selectAllDragons,
} from '../redux/dragons/dragonsSlice';

export default function Dragon() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragonsAsync());
  });

  const dragons = useSelector(selectAllDragons);

  const reserveHandler = (id) => {
    dispatch(reserveDragon(id));
  };

  const cancelReservationHandler = (id) => {
    dispatch(cancelDragonReservation(id));
  };
  return (
    <div className="dragon-component">
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            {dragon.flickr_images.length > 0 && (
              <img
                className="dragon-image"
                src={dragon.flickr_images}
                alt={`${dragon.name} Dragon`}
              />
            )}
            <div className="desc">
              <h3 className="dragon-name">{dragon.name}</h3>
              {dragon.reserved && <span className="reserved-badge">Reserved</span>}
              <p className="dragon-desc">{dragon.desc}</p>
              <p>
                {dragon.reserved ? (
                  <button
                    type="button"
                    className="cancel-reservation  dragon-btn"
                    onClick={() => cancelReservationHandler(dragon.id)}
                  >
                    Cancel Reservation
                  </button>
                ) : (
                  <button
                    type="button"
                    className="reserve-rocket-btn dragon-btn"
                    onClick={() => reserveHandler(dragon.id)}
                  >
                    Reserve Dragon
                  </button>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
