import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DietFilter = () => {
  const [selectedDiets, setSelectedDiets] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const parseAndUpdateURL = () => {
    const urlDiets = queryParams.get('diet');
    if (urlDiets) {
      const decodedDiets = urlDiets.split(',').map(diet => diet.trim());
      setSelectedDiets(decodedDiets);
    }

    updateURL(selectedDiets);
  };

  useEffect(() => {
    console.log('Diet Filter');
    parseAndUpdateURL();
  }, []);

  const handleButtonClick = (value) => {
    const newSelectedDiets = [...selectedDiets];

    if (newSelectedDiets.includes(value)) {
      newSelectedDiets.splice(newSelectedDiets.indexOf(value), 1);
    } else {
      newSelectedDiets.push(value);
    }

    setSelectedDiets(newSelectedDiets);
    updateURL(newSelectedDiets);
  };

  const updateURL = (selectedDiets) => {
    queryParams.delete('diet');

    if (selectedDiets.length > 0) {
      queryParams.set('diet', selectedDiets.join(','));
    }

    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div className='flex flex-wrap gap-3'>
      {['Vegetarian', 'Non Vegetarian', 'Halal', 'Gluten Free'].map((option) => (
        <button
          key={option}
          type="button"
          className={`${
            selectedDiets.includes(option.toLowerCase())
              ? 'bg-bgOrangeColor hover:bg-bgOrangeColorHover text-textColorWhite'
              : 'bg-lightGrayBackground'
          } px-3 py-2 rounded-full`}
          onClick={() => handleButtonClick(option.toLowerCase())}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default DietFilter;
