import React, { FC } from 'react';
import styles from './ProductCard.module.scss';

interface IProductCard {
  id: number
  image: string,
  name: string,
  description: string,
  categories: string[],
  price: number,
  quantity: number
}

interface IProductCardProps {
  product: IProductCard;
}

export const ProductCard: FC<IProductCardProps> = ({product}) => {
  const {
    image,
    name,
    description,
    categories,
    price,
    quantity
  } = product;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {categories.map((tag: any) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-gray-900 font-bold text-xl">{price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-gray-700">Available: {quantity}</span>
      </div>
    </div>
  );
};
