import Loader from '@components/Loader';
import { SlickSlider } from '@components/SlickSlider';
import { Button } from '@components/UI/Button';
import { Tag } from '@components/UI/Tag';
import { addItemToCart } from '@redux/slices/cartSlice';
import { AppDispatch } from '@redux/store';
import { IProductsData } from '@types';
import api from 'client/api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const URL = process.env.REACT_APP_LOCAL_URL;

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

  const { title, text, categories, photos, viewsCount, price, quantity } = product;
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex flex-col items-center">
          {photos.length > 1 ? (
            <SlickSlider
              settings={defaultSettings}
              className="w-full"
              // asNavFor={true}
            >
              {photos.map((image: string) => (
                <img
                  key={image}
                  className="w-full h-full object-contain"
                  src={`${URL}uploads/${image}`}
                  alt={title}
                />
              ))}
            </SlickSlider>
          ) : (
            <img
              key={photos[0]}
              className="w-full h-full object-contain"
              src={`${URL}uploads/${photos[0]}`}
              alt={title}
            />
          )}
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
            <span className="text-sm text-gray-500">Просмотры: {viewsCount}</span>
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
