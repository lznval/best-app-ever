import { FC } from 'react';
import { IProductsData } from '@types';
import { Button } from '@components/UI/Button';
import { Tag } from '@components/UI/Tag';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@redux/slices/cartSlice';
import { Link } from 'react-router-dom';

interface IProductCardProps {
  product: IProductsData;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const {_id, title, text, categories, photos, viewsCount, price, quantity } =
    product;

  const dispatch = useDispatch();

  const handleAddToCart = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };
  return (
    <Link to={`/product/${_id}`}>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="relative">
        {photos.map((image: string) => (
          <img
            key={image}
            className="w-full h-48 object-cover"
            src={image}
            alt={title}
          />
        ))}
        {quantity === 0 && (
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
            Out of Stock
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap">
        {categories.map((tag: string) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center text-sm text-gray-600">
        <span>Views: {viewsCount}</span>
        <span>Available: {quantity || 'Not specified'}</span>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-gray-900 font-bold text-xl">{price}₽</span>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <Button onClick={handleAddToCart} label="Добавить в корзину" />
      </div>
    </div>
    </Link>
  );
};
