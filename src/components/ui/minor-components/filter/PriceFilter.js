import React, { useState } from 'react';

const PriceFilter = () => {
  const [selectedPrices, setSelectedPrices] = useState([]);

  // Define your price options
  const priceOptions = [
    { value: '$', label: '$' },
    { value: '$$', label: '$$' },
    { value: '$$$', label: '$$$' },
    { value: '$$$$', label: '$$$$' },
  ];

  // Function to handle button click
  const handleButtonClick = (value) => {
    const newSelectedPrices = [...selectedPrices];

    // Toggle the selection
    if (newSelectedPrices.includes(value)) {
      // Remove from selected if already present
      newSelectedPrices.splice(newSelectedPrices.indexOf(value), 1);
    } else {
      // Add to selected if not present
      newSelectedPrices.push(value);
    }

    setSelectedPrices(newSelectedPrices);
  };

  return (
    <div className='flex flex-wrap gap-3'>
      {priceOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`${
            selectedPrices.includes(option.value)
              ? 'bg-bgOrangeColor hover:bg-bgOrangeColorHover text-textColorWhite'
              : 'bg-lightGrayBackground'
          } px-3 py-2 rounded-full`}
          onClick={() => handleButtonClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default PriceFilter;
