import { PageHead } from '@components/PageHead';
import { SellerAdmin } from '@components/SellerAdmin';

export const SellerMainPage = () => {
  return (
    <>
      <PageHead title="Админская панель" />
      <SellerAdmin />
    </>
  );
};
