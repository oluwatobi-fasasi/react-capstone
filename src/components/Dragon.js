import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragonsAsync, selectAll } from '../redux/dragons/dragonsSlice';

export default function Dragon() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragonsAsync());
  }, [dispatch]);
  const dragons = useSelector(selectAll);
  return (
    <div className="dragon-component">
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            <h3>{dragon.name}</h3>
            <p>{dragon.desc}</p>
            <p><button type="submit">Reserve Dragon</button></p>
            {dragon.flickr_images.length > 0 && (
              <img className="dragon-image" src={dragon.flickr_images} alt={`${dragon.name} Dragon`} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
