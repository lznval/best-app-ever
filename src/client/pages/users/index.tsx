import { ProductCard } from '@components/ProductCard';
import { loginUser } from '@redux/asyncThunks/authThunk';
import { AppDispatch, RootState } from '@redux/store';
import { IProductCard } from '@types';
import { useDispatch, useSelector } from 'react-redux';

export const UsersPage = () => {
  const mockProducts: IProductCard[] = [
    {
      id: 1,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 1',
      categories: ['Карточка', 'Товар'],
      price: 10000,
      quantity: 20,
    },
    {
      id: 2,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 2',
      categories: ['Карточка', 'Товар'],
      price: 20000,
      quantity: 20,
    },
    {
      id: 3,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 3',
      categories: ['Карточка', 'Товар'],
      price: 30000,
      quantity: 20,
    },
    {
      id: 4,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 4',
      categories: ['Карточка', 'Товар'],
      price: 40000,
      quantity: 20,
    },
  ];
  const dispatch: AppDispatch = useDispatch();
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const handleLogin = () => {
    dispatch(
      loginUser({
        email: 'anton@test.com',
        password: '12345',
      }),
    );
  };
  return (
    <>
      <button onClick={handleLogin}>Нажми</button>

      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockProducts.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
      {authStatus === 'loading' && <p>Loading...</p>}
      {authStatus === 'error' && <p>Error logging in!</p>}
      {authStatus === 'loaded' && <p>Logged in successfully!</p>}
    </>
  );
};
