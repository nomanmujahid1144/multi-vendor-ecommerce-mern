import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DeliveryPickupToggle = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialMode = new URLSearchParams(location.search).get('diningMode') || 'DELIVERY';
  const initialDeliveryFee = new URLSearchParams(location.search).get('df') || 3;

  const [diningMode, setDiningMode] = useState(initialMode);
  const [defaultDeliveryFee, setDefaultDeliveryFee] = useState(initialDeliveryFee);

  // Handle navigation when diningMode changes
  useEffect(() => {
    if (location.pathname === '/home') {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('diningMode', diningMode);
      console.log(defaultDeliveryFee, 'defaultDeliveryFee')
      searchParams.set('df', defaultDeliveryFee);
      navigate(`?${searchParams.toString()}`);
    }
  }, [diningMode, defaultDeliveryFee, location.pathname, location.search, navigate]);

  const handleToggle = (mode) => {
    console.log(mode, 'mode')
    // Toggle between DELIVERY and PICKUP
    // const newMode = diningMode === 'DELIVERY' ? 'PICKUP' : 'DELIVERY';
    if (diningMode !== mode) {
      // Update the state to reflect the new diningMode
      setDiningMode(mode);
    }

  };

  if (location.pathname !== '/home') {
    return null;
  }

  return (
    <div className='delivery-pickup-toggle-container'>
      <div className="delivery-pickup-toggle-inner bg-bgOrangeColor">
        <div
          className={`delivery-pickup-toggle-delivery ${
            diningMode === 'DELIVERY' ? 'bg-white' : ''
          } rounded-full`}
          onClick={() => handleToggle('DELIVERY')}
        >
          <div className='delivery-pickup-toggle-delivery-btn'>Delivery</div>
        </div>
        <div
          className={`delivery-pickup-toggle-delivery ${
            diningMode === 'PICKUP' ? 'bg-white' : ''
          } rounded-full`}
          onClick={() => handleToggle('PICKUP')}
        >
          <div className='delivery-pickup-toggle-delivery-btn'>Pickup</div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPickupToggle;