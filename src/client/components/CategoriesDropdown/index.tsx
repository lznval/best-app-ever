import React, { useState, useEffect, useRef } from 'react';

interface ICategory {
  _id: string;
  title: string;
}

interface CategoryDropdownProps {
  categories: ICategory[];
}

export const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState<ICategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filtered = categories.filter((category) =>
      category.title.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredCategories(filtered);
  }, [inputValue, categories]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setDropdownVisible(true);
  };

  const handleCategoryClick = (category: ICategory) => {
    if (!selectedCategories.find((cat) => cat._id === category._id)) {
      setSelectedCategories([...selectedCategories, category]);
      setInputValue('');
    }
  };

  const handleRemoveCategory = (id: string) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat._id !== id));
  };

  // Обработка кликов вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  console.log(selectedCategories, 'selectedCategories');

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex flex-wrap gap-2">
        {selectedCategories.map((category) => (
          <div key={category._id} className="bg-gray-200 p-1 rounded flex items-center">
            {category.title}
            <button
              className="ml-1 text-red-500"
              onClick={() => handleRemoveCategory(category._id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setDropdownVisible(true)}
        className="border p-2 w-full"
        placeholder="Введите категории..."
      />
      {isDropdownVisible && filteredCategories.length > 0 && (
        <ul className="absolute left-0 right-0 max-h-60 bg-white border border-gray-300 overflow-y-auto z-10">
          {filteredCategories.map((category) => (
            <li
              key={category._id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
