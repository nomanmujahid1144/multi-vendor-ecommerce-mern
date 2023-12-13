import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DietFilter = ({alredyselectedDiet, handleClickDiet}) => {
  const [selectedDiets, setSelectedDiets] = useState([]);

  useEffect(() => {
    setSelectedDiets(alredyselectedDiet)
  }, [alredyselectedDiet])

  const handleButtonClick = (value) => {
    handleClickDiet(value)
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
