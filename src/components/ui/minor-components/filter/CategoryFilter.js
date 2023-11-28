import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryFilter = ({ subCategories }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  // Load selected categories from URL parameters or local storage
  const initialSelectedCategories =
    queryParams.get('category')
      ? queryParams.get('category').split(',')
      : JSON.parse(localStorage.getItem('selectedCategories')) || [];

  const [selectedCategories, setSelectedCategories] = useState(initialSelectedCategories);

  const updateURL = (categories) => {
    const queryParams = new URLSearchParams(location.search);
  
    // Update or set the 'category' parameter
    if (categories.length > 0) {
      queryParams.set('category', categories.join(','));
    } else {
      queryParams.delete('category');
    }
  
    // Preserve other query parameters
    const existingParams = queryParams.toString();
    const updatedParams = existingParams ? `diningMode=DELIVERY&${existingParams}` : 'diningMode=DELIVERY';
  
    navigate(`?${updatedParams}`);
  };

  useEffect(() => {
    console.log('Category Filter');

    // Update URL based on selected categories
    updateURL(selectedCategories);

    // Save selected categories to local storage
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  }, [selectedCategories, navigate]);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryName)
        ? prevSelected.filter((category) => category !== categoryName)
        : [...prevSelected, categoryName]
    );
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
