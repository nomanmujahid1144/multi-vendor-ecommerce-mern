import React, { useState } from 'react';

const SortFilters = ({ section }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionValue) => {
    // Toggle the selected option
    setSelectedOption((prevSelected) =>
      prevSelected === optionValue ? null : optionValue
    );
  };

  return (
    <div>
      {section.options.map((option, optionIdx) => (
        <div key={option.value} className="flex items-center py-2">
          <input
            id={`filter-${section.id}-${optionIdx}`}
            name={`${section.id}[]`}
            value={option.value}
            type="checkbox"
            checked={selectedOption === option.value}
            onChange={() => handleOptionClick(option.value)}
            className="h-4 w-4 rounded cursor-pointer border-gray-300 text-bgOrangeColor focus:ring-bgOrangeColor"
          />
          <label
            htmlFor={`filter-${section.id}-${optionIdx}`}
            className="ml-3 text-sm cursor-pointer text-gray-600"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SortFilters;
