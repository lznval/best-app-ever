import { ProductCard } from '@components/ProductCard';
import { loginUser } from '@redux/asyncThunks/userThunk';
import { logoutUser } from '@redux/slices/userSlice';
import { AppDispatch, RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const UsersPage = () => {
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
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <button onClick={handleLogin}>Нажми, чтобы войти</button> <br />
      <button onClick={handleLogout}>Нажми, чтобы выйти</button>
      {/* <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockProducts.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div> */}
      {authStatus === 'loading' && <p>Loading...</p>}
      {authStatus === 'error' && <p>Error logging in!</p>}
      {authStatus === 'loaded' && <p>Logged in successfully!</p>}
    </>
  );
};
