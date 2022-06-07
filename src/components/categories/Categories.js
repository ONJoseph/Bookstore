import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categories);

  return (
    <>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check status</button>
      <div>{status}</div>
    </>
  );
}

export default Categories;
