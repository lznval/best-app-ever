import PageHead from '@components/PageHead';
import { ProductDetail } from '@components/ProductDetail';
import React from 'react';

export const ProductDetailPage = () => {
  return (
    <>
      <PageHead title="Страница продукта" />
      <ProductDetail />
    </>
  );
};
