import PageHead from '@components/PageHead';
import { ProductDetail } from '@components/ProductDetail';

export const ProductDetailPage = () => {
  return (
    <>
      <PageHead title="Страница продукта" />
      <ProductDetail />
    </>
  );
};
