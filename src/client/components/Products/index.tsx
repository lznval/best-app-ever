import Loader from '@components/Loader';
import { ProductCard } from '@components/ProductCard';
import { getAllProduct } from '@redux/asyncThunks/productThunk';
import { AppDispatch, state } from '@redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    products: { data, status },
  } = useSelector(state);
  useEffect(() => {
    if (!data.length) {
      dispatch(getAllProduct());
    }
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }
  return (
    <div>
      <div>Products</div>
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};
