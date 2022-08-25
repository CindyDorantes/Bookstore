import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const msg = useSelector((store) => store.statusReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => (dispatch(checkStatus()))}>Check status</button>
      {msg}
    </div>
  );
};

export default Categories;
