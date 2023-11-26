import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

const DeliveryPickupToggle = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse the URL query parameters to determine the initial mode
  const initialMode = new URLSearchParams(location.search).get('diningMode') || 'DELIVERY';

  const [diningMode, setDiningMode] = useState(initialMode);

  // Update the URL when the dining mode changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('diningMode', diningMode);
      // history.push({ search: searchParams.toString() });
    navigate(`?${searchParams.toString()}`);
  }, [diningMode, location.search, navigate]);

  const handleToggle = () => {
    // Toggle between DELIVERY and PICKUP
    setDiningMode((prevMode) => (prevMode === 'DELIVERY' ? 'PICKUP' : 'DELIVERY'));
  };

  return (
    <div className='delivery-pickup-toggle-container'>
      <div className="delivery-pickup-toggle-inner bg-bgOrangeColor">
        <div
          className={`delivery-pickup-toggle-delivery ${
            diningMode === 'DELIVERY' ? 'bg-white' : ''
          } rounded-full`}
          onClick={handleToggle}
        >
          <div className='delivery-pickup-toggle-delivery-btn'>Delivery</div>
        </div>
        <div
          className={`delivery-pickup-toggle-delivery ${
            diningMode === 'PICKUP' ? 'bg-white' : ''
          } rounded-full`}
          onClick={handleToggle}
        >
          <div className='delivery-pickup-toggle-delivery-btn'>Pickup</div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPickupToggle;
