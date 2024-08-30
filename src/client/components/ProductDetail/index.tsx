import Loader from '@components/Loader';
import { SLickSlider } from '@components/Slider';
import { Button } from '@components/UI/Button';
import { Tag } from '@components/UI/Tag';
import { addItemToCart } from '@redux/slices/cartSlice';
import { AppDispatch } from '@redux/store';
import { IProductsData } from '@types';
import api from 'client/api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProductsData | null>(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => alert(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (product) {
      dispatch(addItemToCart({ ...product, quantity: 1 }));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const {
    title,
    text,
    categories,
    photos,
    viewsCount,
    price,
    quantity,
  } = product;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <SLickSlider />
            {/* <img
              className="w-full h-full object-contain"
              src={photos[0]}
              alt={title}
            /> */}
          </div>
          {/* <div className="flex space-x-4 mt-4">
            {photos.slice(1).map((image: string) => (
              <img
                key={image}
                className="w-20 h-20 object-cover border rounded-lg cursor-pointer hover:border-gray-700"
                src={image}
                alt={title}
              />
            ))}
          </div> */}
          {quantity === 0 && (
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              Нет в наличии
            </div>
          )}
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-gray-700 mt-4">{text}</p>

          <div className="mt-4">
            {categories.map((tag: string) => (
              <Tag key={tag} tag={tag} customStyles="mr-2 mb-2" />
            ))}
          </div>
          <div className="mt-6">
            <span className="text-sm text-gray-500">
              Просмотры: {viewsCount}
            </span>
            <span className="ml-4 text-sm text-gray-500">
              Наличие: {quantity > 0 ? quantity : 'Не указано'}
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-900 mt-6">{price}₽</div>
          <Button
            onClick={handleAddToCart}
            label="Добавить в корзину"
            customStyles="mt-6 w-full py-3 text-lg"
          />
        </div>
      </div>
    </div>
  );
};
