import { CreateProduct } from '@components/CreateProduct';
import PageHead from '@components/PageHead';

export const CreateProductPage = () => {
  return (
    <>
      <PageHead title="Создание карточки товара" />
      <CreateProduct />
    </>
  );
};
