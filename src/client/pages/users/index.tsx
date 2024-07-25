import { ProductCard } from '@components/ProductCard';
import React from 'react';
interface IProductCard {
  id: number
  image: string,
  name: string,
  description: string,
  categories: string[],
  price: number,
  quantity: number
}
export const UsersPage = () => {
  const mockProducts: IProductCard[] = [
    {
      id: 1,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 1',
      categories: ['Карточка', 'Товар'],
      price: 10000,
      quantity: 20
    },
    {
      id: 2,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 2',
      categories: ['Карточка', 'Товар'],
      price: 20000,
      quantity: 20
    },
    {
      id: 3,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 3',
      categories: ['Карточка', 'Товар'],
      price: 30000,
      quantity: 20
    },
    {
      id: 4,
      image: '',
      name: 'Карточка',
      description: 'Карточка товара 4',
      categories: ['Карточка', 'Товар'],
      price: 40000,
      quantity: 20
    }
  ]
  return (
    <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockProducts.map((item, index) => (
        <ProductCard product={item} key={index} />
      ))}      
    </div>
  )
};
