import Loader from '@components/Loader';
import { ProductCard } from '@components/ProductCard';
import { getAllProduct } from '@redux/asyncThunks/productThunk';
import { AppDispatch, state } from '@redux/store'
import { ERoutes } from '@types';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector(state);
  useEffect(() => {
    if(!products) {
      dispatch(getAllProduct())
    }
  }, []);
  console.log(products, 'products');
  if (products.status === 'loading') {
    return <Loader />
  }
  return (
    <div>
      <div>Products</div>
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.data.map(item => (
          <Link to={`/product/${item._id}`}>
            <ProductCard key={item._id} product={item} />
          </Link>
        ))}
      </div>
    </div>
  )
}
