import React, { FC } from 'react';
import styles from './ProductCard.module.scss';
import { IProductsData } from '@types'
import { Button } from '@components/UI/Button';
import { Tag } from '@components/UI/Tag';



interface IProductCardProps {
  product: IProductsData;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { 
    title,
    text,
    categories,
    photos,
    viewsCount,
    price,
    quantity
  } = product;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {photos.map((image: string) => (
        <img key={image} className="w-full" src={image} alt={title} />
      ))}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {categories.map((tag: string) => (
          <Tag tag={tag} />
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">Count of views: {viewsCount}</div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-gray-900 font-bold text-xl">{price}</span>
        <Button
          label='Добавить в корзину'
        />
      </div>
      {quantity && (
        <div className="px-6 py-4 flex justify-between items-center">
          <span className="text-gray-700">Available: {quantity}</span>
        </div>
      )}      
    </div>
  );
};
