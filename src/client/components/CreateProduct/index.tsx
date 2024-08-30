import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@components/UI/Button";

export const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    categories: "",
    photos: "",
    price: "",
    quantity: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productData = {
      ...formData,
      categories: formData.categories.split(",").map((category) => category.trim()),
      photos: formData.photos.split(",").map((photo) => photo.trim()),
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
    };
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Добавление товара</h2>
      <form onSubmit={handleSubmit}>
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
          <label className="block text-gray-700 text-sm font-bold mb-2">Категории (через запятую):</label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Фотографии (ссылки через запятую):</label>
          <input
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
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
