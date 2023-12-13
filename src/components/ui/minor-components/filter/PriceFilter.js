import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PriceFilter = ({alredyselectedPrices, handleClickPrice}) => {
  const [selectedPrices, setSelectedPrices] = useState([]);


  useEffect(() => {
    setSelectedPrices(alredyselectedPrices)
  }, [alredyselectedPrices])

  const handleButtonClick = (value) => {
    handleClickPrice(value)
  };


  return (
    <div className='flex flex-wrap gap-3'>
      {['$', '$$', '$$$', '$$$$'].map((option) => (
        <button
          key={option}
          type="button"
          className={`${
            selectedPrices?.includes(option)
              ? 'bg-bgOrangeColor hover:bg-bgOrangeColorHover text-textColorWhite'
              : 'bg-lightGrayBackground'
          } px-3 py-2 rounded-full`}
          onClick={() => handleButtonClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PriceFilter;
