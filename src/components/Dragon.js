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
  }, [dispatch]);

  const dragons = useSelector(selectAllDragons);

  const reserveHandler = (id) => {
    dispatch(reserveDragon(id));
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
              <p className="dragon-desc">{dragon.desc}</p>
              <p>
                <button
                  type="button"
                  className={`dragon-btn ${dragon.reserved ? 'cancel-reservation' : 'reserve-rocket'}`}
                  onClick={() => {
                    if (dragon.reserved) {
                      cancelDragonReservation(dragon.id);
                    } else {
                      reserveHandler(dragon.id);
                    }
                  }}
                >
                  {dragon.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>

              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
