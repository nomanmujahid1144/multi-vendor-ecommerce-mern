import React, { useState, useEffect } from 'react';

const CategoryFilter = ({ subCategories, handleClickCategory, alredyselectedCategories }) => {

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setSelectedCategories(alredyselectedCategories)
  }, [alredyselectedCategories])


  const handleCategoryChange = (categoryName) => {
    handleClickCategory(categoryName)
  };

  return (
    <ul>
      {subCategories.map((category, optionIdx) => (
        <li key={category.name} className="py-2">
          <div className="">
            <input
              id={`filter-mobile-${category.name}-${optionIdx}`}
              name={`categoryFilter-${optionIdx}`}
              type="checkbox"
              checked={selectedCategories.includes(category.name)}
              onChange={() => handleCategoryChange(category.name)}
              className="h-4 w-4 rounded-full border-gray-300 text-bgOrangeColor focus:ring-bgOrangeColor"
            />
            <label
              htmlFor={`filter-mobile-${category.name}-${optionIdx}`}
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              {category.name}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
