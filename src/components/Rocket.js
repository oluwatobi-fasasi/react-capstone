import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync, selectAll } from '../redux/rockets/rocketsSlice';

export default function Rocket() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsAsync());
  }, [dispatch]);
  const rockets = useSelector(selectAll);
  console.log(rockets);
  return (
    <div>This is ROCKET component</div>
  );
}
