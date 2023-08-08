import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragonsAsync, selectAll } from '../redux/dragons/dragonsSlice';

export default function Dragon() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragonsAsync());
  }, [dispatch]);
  const dragons = useSelector(selectAll);
  console.log(dragons);
  return (
    <div>
      <h2>Dragons Page </h2>
      <ul>
        {dragons.map(dragon => (
          <li key={dragon.id}>
            <h3>{dragon.name}</h3>
            <p>{dragon.description}</p>
            {dragon.flickr_images.length > 0 && (
              <img src={dragon.flickr_images[0]} alt={`${dragon.name} Dragon`} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
