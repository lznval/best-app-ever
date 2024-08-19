import { NotAuthBlock } from '@components/NotAuthBlock';
import { getAllProduct } from '@redux/asyncThunks/productThunk';
import { AppDispatch } from '@redux/store';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleGetProducts = async () => {
    const data = await dispatch(getAllProduct());
    console.log(data.payload);
  }

  return (
    <>
      <NotAuthBlock />
      <button onClick={handleGetProducts}>Получить товары</button>
    </>
  );
};
