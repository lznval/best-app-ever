import { useEffect, useRef, useState } from 'react';
import { Button } from '@components/UI/Button';
import api from 'client/api';
import { CategoryDropdown } from '@components/CategoriesDropdown';

interface ICategoriesData {
  _id: string;
  title: string;
}

export const CreateProduct = () => {
  const [categories, setCategories] = useState<ICategoriesData[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    categories: '',
    price: '',
    quantity: '',
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const files = fileInputRef.current?.files;

    const productData = {
      ...formData,
      categories: formData.categories.split(',').map((category) => category.trim()),
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
      photos: files && Array.from(files).map((file) => file.name),
    };

    api.post('/products', productData);

    const filesData = new FormData();

    if (files) {
      Array.from(files).forEach((file) => filesData.append('images', file));
      try {
        const response = await api.post('/upload', filesData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    }
  };

  const getCategories = async () => {
    const res = await api.get('/categories');
    if (res.status === 200) {
      setCategories(res.data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Добавление товара</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Название:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Описание:</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Категории (через запятую):
          </label>
          <CategoryDropdown categories={categories} />
          {/* <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          /> */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Добавьте фотографии товара:
          </label>
          <input
            type="file"
            name="photos"
            multiple
            className="w-full px-3 py-2 border rounded"
            ref={fileInputRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Цена:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Количество:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <Button type="submit" label="Добавить товар" />
      </form>
    </div>
  );
};
