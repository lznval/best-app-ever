import { Favorites } from '@components/Favorites';
import PageHead from '@components/PageHead';

export const FavoritesPage = () => {
  return (
    <>
      <PageHead title="Избранное" />
      <Favorites />
    </>
  );
};
