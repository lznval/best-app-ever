import Loader from "@components/Loader";
import { Button } from "@components/UI/Button";
import { Tag } from "@components/UI/Tag";
import { addItemToCart } from "@redux/slices/cartSlice";
import { AppDispatch } from "@redux/store";
import { IProductsData } from "@types";
import api from "client/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"


export const ProductDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProductsData | null>(null);  

  useEffect(() => {
    setIsLoading(true);
    api.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(e => alert(e))
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
    return null;
  }

  const { title, text, categories, photos, viewsCount, price, quantity, description } = product;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {photos.map((image: string) => (
            <img
              key={image}
              className="w-full h-auto object-cover rounded-lg"
              src={image}
              alt={title}
            />
          ))}
          {quantity === 0 && (
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
              Out of Stock
            </div>
          )}
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-700 text-base mt-4">{text}</p>
          <div className="flex flex-wrap mt-4">
            {categories.map((tag: string) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <div className="text-sm text-gray-600 mt-4">
            <span>Views: {viewsCount}</span>
            <span className="ml-4">Available: {quantity || 'Not specified'}</span>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-4">{price}₽</div>
          <Button onClick={handleAddToCart} label="Добавить в корзину" customStyles="mt-6" />
          <div className="text-gray-700 text-base mt-6">
            <h3 className="text-lg font-semibold">Описание:</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
