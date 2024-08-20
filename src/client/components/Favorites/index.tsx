import { NotAuthBlock } from '@components/NotAuthBlock';
import { getAllProduct } from '@redux/asyncThunks/productThunk';
import { AppDispatch, RootState } from '@redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Favorites = () => {
  const {
    products: { data },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!data.length) {
      dispatch(getAllProduct());
    }
  }, []);

  return (
    <>
      <NotAuthBlock />
      <button>Получить товары</button>
    </>
  );
};
