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
    <div>This is DRAGON component</div>
  );
}
