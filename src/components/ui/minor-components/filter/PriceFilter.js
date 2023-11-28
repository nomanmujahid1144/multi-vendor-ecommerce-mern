import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PriceFilter = () => {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const parseAndUpdateURL = () => {
    // Parse the 'price' parameter from the URL and update selectedPrices
    const urlPrices = queryParams.get('price');
    if (urlPrices) {
      const decodedPrices = urlPrices.split(',').map(price => {
        switch (price) {
          case 'dollar':
            return '$';
          case 'doubleDollar':
            return '$$';
          case 'tripleDollar':
            return '$$$';
          case 'quadrupleDollar':
            return '$$$$';
          default:
            return price;
        }
      });

      setSelectedPrices(decodedPrices);
    }

    // Update the URL based on the selected prices
    updateURL(selectedPrices);
  };

  useEffect(() => {
    console.log('Price Filter');
    parseAndUpdateURL();
  }, []);

  const handleButtonClick = (value) => {
    const newSelectedPrices = [...selectedPrices];

    // Toggle the selection
    if (newSelectedPrices.includes(value)) {
      newSelectedPrices.splice(newSelectedPrices.indexOf(value), 1);
    } else {
      newSelectedPrices.push(value);
    }

    setSelectedPrices(newSelectedPrices);
    updateURL(newSelectedPrices);
  };

  const updateURL = (selectedPrices) => {
    queryParams.delete('price');

    if (selectedPrices.length > 0) {
      const readablePrices = selectedPrices.map(price => {
        switch (price) {
          case '$':
            return 'dollar';
          case '$$':
            return 'doubleDollar';
          case '$$$':
            return 'tripleDollar';
          case '$$$$':
            return 'quadrupleDollar';
          default:
            return price;
        }
      });

      queryParams.set('price', readablePrices.join(','));
    }

    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div className='flex flex-wrap gap-3'>
      {['$', '$$', '$$$', '$$$$'].map((option) => (
        <button
          key={option}
          type="button"
          className={`${
            selectedPrices.includes(option)
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
