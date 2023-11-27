import React, { useState } from 'react';

const DeliveryFeeFilter = () => {
  const [selectedValue, setSelectedValue] = useState(3);

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse the value as an integer
    setSelectedValue(value);
  };

  return (
    <div className='ranger-filter-container'>
      <div className='ranger-filter-inner'>
        <div className='ranger-filter-wrapper'>
          <div className='ranger-filter-inner-wrapper'>
            <div className='ranger-filter-inner-one !font-bold'>$2</div>
            <div className='ranger-filter-inner-one !font-bold'>$4</div>
            <div className='ranger-filter-inner-one !font-bold'>$6</div>
            <div className='ranger-filter-inner-one !font-bold'>$6+</div>
          </div>
          <input
            className='range-filter-input !relative !text-bgOrangeColor'
            max='3'
            min='0'
            type="range"
            // defaultValue={selectedValue === '$2' ? '0' : selectedValue === '$4' ? '1' : selectedValue === '$6' ? '2' : '3'}
            value={selectedValue}
            onChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryFeeFilter;
