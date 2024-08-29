import Loader from '@components/Loader';
import { NotAuthBlock } from '@components/NotAuthBlock';
import { ProductCard } from '@components/ProductCard';
import { getAllProduct } from '@redux/asyncThunks/productThunk';
import { AppDispatch, RootState } from '@redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Favorites = () => {
  const {
    products: { data, status },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  console.log(status, 'products');
  useEffect(() => {
    if (!data.length) {
      dispatch(getAllProduct());
    }
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <p>Error loading products</p>;
  }

  return (
    <>
      <NotAuthBlock />
    </>
  );
};
